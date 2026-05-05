#!/bin/bash

set -e  # Stop execution if any command fails

echo " ECS FARGATE DEPLOYMENT STARTED"  # Start deployment process

source .env  # Load environment variables (optional for local use)

AWS_REGION=${AWS_REGION}  # AWS region for deployment
CLUSTER_NAME=${ECS_CLUSTER_NAME}  # ECS cluster name
SERVICE_NAME=${ECS_SERVICE_NAME}  # ECS service name
TASK_FAMILY=${ECS_TASK_FAMILY}  # ECS task definition family
CONTAINER_NAME=${CONTAINER_NAME}  # Container name in task definition

IMAGE_TAG=$(aws ecr describe-images --repository-name $ECR_REPOSITORY --region $AWS_REGION --query 'sort_by(imageDetails,& imagePushedAt)[-1].imageTags[0]' --output text)  # Get latest ECR image tag

IMAGE_URI="$ECR_REPOSITORY:$IMAGE_TAG"  # Build full image URI

echo " Deploying image: $IMAGE_URI"  # Log image being deployed

TASK_DEF=$(aws ecs describe-task-definition --task-definition $TASK_FAMILY --region $AWS_REGION)  # Fetch current task definition

NEW_TASK_DEF=$(echo $TASK_DEF | jq --arg IMAGE "$IMAGE_URI" '.taskDefinition | {family: .family, containerDefinitions: (.containerDefinitions | map(.image = $IMAGE)), executionRoleArn: .executionRoleArn, taskRoleArn: .taskRoleArn, networkMode: .networkMode, requiresCompatibilities: .requiresCompatibilities, cpu: .cpu, memory: .memory}')  # Create updated task definition with new image

echo "$NEW_TASK_DEF" > new-task-def.json  # Save updated task definition locally

NEW_REVISION=$(aws ecs register-task-definition --cli-input-json file://new-task-def.json --region $AWS_REGION --query 'taskDefinition.taskDefinitionArn' --output text)  # Register new task definition revision

echo " New task definition registered: $NEW_REVISION"  # Log new revision

aws ecs update-service --cluster $CLUSTER_NAME --service $SERVICE_NAME --task-definition $NEW_REVISION --force-new-deployment --region $AWS_REGION  # Update ECS service with new task definition

echo " Waiting for service to stabilize..."  # Wait for deployment to complete

aws ecs wait services-stable --cluster $CLUSTER_NAME --services $SERVICE_NAME --region $AWS_REGION  # Ensure deployment is stable

echo " ECS FARGATE DEPLOYMENT COMPLETED SUCCESSFULLY"  # End success message
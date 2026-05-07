#   Three-Tier Architecture with CI/CD Pipeline

A production-ready **Three-Tier Web Application** built using **React.js**, **Node.js**, **Docker**, **AWS ECS Fargate**, **Application Load Balancer (ALB)**, **Auto Scaling**, **CloudWatch Monitoring**, and **GitHub Actions CI/CD**.

This project demonstrates modern **cloud-native deployment**, **container orchestration**, and **DevOps automation** practices using AWS services.

---

#   Project Overview

This project follows a scalable **Three-Tier Architecture**:

- **Presentation Layer** → React Frontend
- **Application Layer** → Node.js Backend API
- **Data Layer** → Database Layer

The complete infrastructure is containerized and deployed using AWS cloud services.

---

#   System Architecture

```text
                          ┌────────────────────┐
                          │     End Users      │
                          └─────────┬──────────┘
                                    │
                                    ▼
                     ┌──────────────────────────┐
                     │  Application Load        │
                     │  Balancer (ALB)          │
                     └─────────┬────────────────┘
                               │
                ┌──────────────┴──────────────┐
                │                             │
                ▼                             ▼
      ┌──────────────────┐        ┌──────────────────┐
      │ React Frontend   │        │ Node.js Backend  │
      │ ECS Fargate Task │        │ ECS Fargate Task │
      └─────────┬────────┘        └─────────┬────────┘
                │                            │
                └────────────┬───────────────┘
                             ▼
                  ┌────────────────────┐
                  │      Database      │
                  │    (Data Layer)    │
                  └────────────────────┘
```

---

#   Tech Stack

##   Frontend
- React.js
- JavaScript
- Axios
- Nginx

##   Backend
- Node.js
- Express.js

##   DevOps & Cloud
- Docker
- Docker Compose
- GitHub Actions
- AWS ECS Fargate
- AWS ECR
- Application Load Balancer (ALB)
- AWS Auto Scaling
- AWS CloudWatch
- AWS IAM

---

#   Features

- Three-Tier Architecture
- Dockerized Frontend & Backend
- Automated CI/CD Pipeline
- ECS Fargate Deployment
- Application Load Balancer Integration
- Auto Scaling Support
- CloudWatch Monitoring & Logging
- Zero-Downtime Deployment
- Scalable Infrastructure
- Production-Ready DevOps Workflow

---

#   AWS Services Used

| AWS Service | Purpose |
|-------------|----------|
| Amazon ECS | Container orchestration |
| AWS Fargate | Serverless container hosting |
| Amazon ECR | Docker image storage |
| Application Load Balancer | Traffic distribution |
| AWS Auto Scaling | Dynamic scaling |
| Amazon CloudWatch | Monitoring and logs |
| AWS IAM | Access management |

---

#   Project Workflow

This project follows a complete **DevOps CI/CD workflow** for deploying a containerized Three-Tier Application on AWS.

---

##   Step 1: Developer Pushes Code

The developer pushes the latest frontend and backend code to the GitHub repository.

```bash
git push origin main
```

---

##   Step 2: GitHub Actions CI/CD Pipeline Triggered

GitHub Actions automatically detects changes in the repository and starts the CI/CD workflow.

### Pipeline Tasks:
- Install dependencies
- Build frontend & backend
- Build Docker images
- Authenticate with AWS
- Push images to Amazon ECR
- Deploy updated containers to ECS

---

##   Step 3: Docker Images are Built

Separate Docker images are created for:

- React Frontend
- Node.js Backend

```bash
docker build -t frontend ./frontend
docker build -t backend ./backend
```

---

##   Step 4: Docker Images are Pushed to Amazon ECR

The CI/CD pipeline pushes Docker images to:

- Amazon ECR Frontend Repository
- Amazon ECR Backend Repository

```bash
docker push <ecr-repository-url>
```

---

##   Step 5: ECS Service Deployment Starts

GitHub Actions updates the ECS services using:

```bash
aws ecs update-service --force-new-deployment
```

This forces ECS to pull the latest Docker images from ECR.

---

##   Step 6: ECS Fargate Launches Containers

AWS ECS Fargate launches new frontend and backend containers without managing servers manually.

### ECS Responsibilities:
- Run containers
- Restart failed tasks
- Maintain desired task count
- Handle networking

---

##   Step 7: Application Load Balancer Routes Traffic

Application Load Balancer (ALB) distributes incoming traffic between frontend and backend services.

### Routing Example:
- `/` → Frontend Service
- `/api/*` → Backend Service

---

##   Step 8: Auto Scaling Monitors Application Load

AWS Auto Scaling automatically increases or decreases ECS tasks based on:

- CPU utilization
- Memory utilization
- Traffic load

This improves:
- Scalability
- Performance
- Availability

---

##   Step 9: CloudWatch Monitoring & Logging

Amazon CloudWatch continuously monitors:

- ECS task logs
- CPU usage
- Memory usage
- Container health
- Application metrics

Logs and metrics help in:
- Debugging
- Monitoring
- Performance optimization

---

##   Step 10: Updated Application Goes Live

The new application version becomes available to users with minimal downtime.

Users access the application through:

```text
Application Load Balancer URL
```

---

#   Complete Workflow Diagram

```text
Developer Push
      ↓
GitHub Actions Triggered
      ↓
Build Docker Images
      ↓
Push Images to Amazon ECR
      ↓
Update ECS Services
      ↓
ECS Fargate Deploys Containers
      ↓
ALB Routes Traffic
      ↓
Auto Scaling Handles Load
      ↓
CloudWatch Monitors Application
      ↓
Application Goes Live
```

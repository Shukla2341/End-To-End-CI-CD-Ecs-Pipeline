Three-Tier Architecture with CI/CD Pipeline

A production-ready Three-Tier Web Application built using React.js, Node.js, Docker, AWS ECS Fargate, Application Load Balancer, Auto Scaling, CloudWatch Monitoring, and GitHub Actions CI/CD.

This project demonstrates modern cloud-native deployment, container orchestration, and DevOps automation practices using AWS services.


Project Overview

This project follows a Three-Tier Architecture:

Presentation Layer → React Frontend
Application Layer → Node.js Backend API
Data Layer → Database Layer

The infrastructure is fully containerized and deployed on AWS using:

Docker
Amazon ECS Fargate
Amazon ECR
Application Load Balancer (ALB)
Auto Scaling
CloudWatch Monitoring
GitHub Actions CI/CD

System Architecture

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

Tech Stack

Frontend
React.js
JavaScript
Axios
Nginx

Backend
Node.js
Express.js

DevOps & Cloud

Docker
GitHub Actions
AWS ECS Fargate
AWS ECR
AWS IAM
Application Load Balancer (ALB)
AWS Auto Scaling
AWS CloudWatch
Docker Compose

Key Features

Three-Tier Architecture
Dockerized Frontend & Backend
Automated CI/CD Pipeline
AWS ECS Fargate Deployment
Application Load Balancer Integration
Auto Scaling Configuration
CloudWatch Monitoring & Logs
Zero-Downtime Deployment
Scalable Cloud Infrastructure
Production-Ready DevOps Workflow

AWS Services Used

Service                  	Purpose
Amazon ECS	            Container orchestration
AWS Fargate	            Serverless container hosting
Amazon ECR	            Docker image storage
Elastic                 Load Balancing	Traffic distribution
Amazon                  CloudWatch	Logs & monitoring
AWS Auto Scaling	    Dynamic task scaling
AWS IAM	                AWS Access management


Project Structure
.
├── frontend/                          # React frontend application
│   ├── public/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
│
├── backend/                           # Node.js backend API
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── config/
│   ├── Dockerfile
│   └── package.json
│
├── scripts/                           # Automation helper scripts
│   ├── build.sh
│   ├── deploy-ecs-fargate.sh
│   └── test.sh
│
├── automation/
│   ├── docker/
│   │   ├── docker-compose.yml
│   │   └── nginx.conf
│   │
│   └── aws/
│       └── ecs-task-definition.json
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml
│
├── docs/
│   ├── architecture.md
│   └── setup-guide.md
│
├── .gitignore
├── README.md
└── LICENSE



CI/CD Workflow

Developer Push
      ↓
GitHub Actions Trigger
      ↓
Build Docker Images
      ↓
Push Images to Amazon ECR
      ↓
Update ECS Services
      ↓
Deploy on ECS Fargate
      ↓
Application Load Balancer Routes Traffic
      ↓
CloudWatch Monitors Logs & Metrics


Docker Setup
Run Locally
docker-compose up --build

Deployment Workflow

Build Application
./scripts/build.sh

Deploy to ECS Fargate
./scripts/deploy-ecs-fargate.sh

Monitoring & Scaling

CloudWatch Monitoring
ECS task logs
Container metrics
Service health monitoring
Performance insights
Auto Scaling
CPU-based scaling
Memory-based scaling
Automatic task increase/decrease

GitHub Secrets Required

AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION
ECR_REPOSITORY
ECS_CLUSTER_NAME
ECS_SERVICE_NAME

Security Best Practices

Use IAM Roles with least privilege
Store credentials in GitHub Secrets
Never commit .env files
Use private ECR repositories
Enable CloudWatch monitoring

Future Enhancements

HTTPS using AWS ACM
Custom domain integration
Blue/Green deployment
Infrastructure as Code (Terraform)
Centralized logging
Kubernetes migration

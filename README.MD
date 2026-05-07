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

This project follows a complete **DevOps CI/CD workflow** for deploying a containerized Three-Tier Application on AWS using Docker, Amazon ECS Fargate, Application Load Balancer, Auto Scaling, CloudWatch, and GitHub Actions.

---

#   Step 1: Develop Frontend & Backend

## Frontend Development
- Build React frontend application
- Create UI components
- Configure API integration

## Backend Development
- Build Node.js backend API
- Create routes and controllers
- Configure database connection

---

#   Step 2: Containerize the Application

## Create Dockerfiles
- Create Dockerfile for frontend
- Create Dockerfile for backend

## Build Docker Images

```bash
docker build -t frontend ./frontend
docker build -t backend ./backend
```

---

#   Step 3: Push Code to GitHub

The developer pushes the latest code to the GitHub repository.

```bash
git push origin main
```

---

#   Step 4: GitHub Actions CI/CD Pipeline Triggered

GitHub Actions automatically starts the CI/CD workflow.

## Pipeline Tasks
- Install dependencies
- Build frontend & backend
- Build Docker images
- Authenticate with AWS
- Push images to Amazon ECR
- Deploy updated containers to ECS

---

#   Step 5: Push Docker Images to Amazon ECR

The CI/CD pipeline pushes Docker images to Amazon ECR repositories.

```bash
docker push <ecr-repository-url>
```

---

#   Step 6: Create AWS Infrastructure

## Configure AWS Services
- Create ECS Cluster
- Create ECS Task Definitions
- Create ECS Services
- Configure Application Load Balancer
- Configure Security Groups
- Configure Target Groups

---

#   Step 7: Deploy Containers on ECS Fargate

GitHub Actions updates ECS services using:

```bash
aws ecs update-service --force-new-deployment
```

Amazon ECS Fargate launches updated frontend and backend containers automatically.

---

#   Step 8: Configure Application Load Balancer

Application Load Balancer distributes traffic between frontend and backend services.

## Routing Rules
- `/` → Frontend Service
- `/api/*` → Backend Service

---

#   Step 9: Configure Auto Scaling

AWS Auto Scaling automatically adjusts ECS tasks based on:

- CPU utilization
- Memory utilization
- Traffic load

This ensures:
- High availability
- Scalability
- Better performance

---

#   Step 10: Monitor Application with CloudWatch

Amazon CloudWatch monitors:

- ECS task logs
- CPU usage
- Memory usage
- Container health
- Application metrics

---

#   Step 11: Application Goes Live

The deployed application becomes accessible through the Application Load Balancer DNS URL.

```text
Application Load Balancer URL
```

---

#   Complete Workflow Diagram

```text
Develop Frontend & Backend
            ↓
Containerize Application
            ↓
Push Code to GitHub
            ↓
GitHub Actions Triggered
            ↓
Build Docker Images
            ↓
Push Images to Amazon ECR
            ↓
Deploy Containers to ECS Fargate
            ↓
ALB Routes Traffic
            ↓
Auto Scaling Handles Load
            ↓
CloudWatch Monitoring
            ↓
Application Goes Live
```

#  Three-Tier Architecture with CI/CD Pipeline

A production-ready **Three-Tier Web Application** built using **React.js**, **Node.js**, **Docker**, **AWS ECS Fargate**, **Application Load Balancer**, **Auto Scaling**, **CloudWatch Monitoring**, and **GitHub Actions CI/CD**.

This project demonstrates modern **cloud-native deployment**, **container orchestration**, and **DevOps automation** practices using AWS services.

---

#  Project Overview

This project follows a **Three-Tier Architecture**:

- **Presentation Layer** → React Frontend
- **Application Layer** → Node.js Backend API
- **Data Layer** → Database Layer

The infrastructure is fully containerized and deployed on AWS using:

- Docker
- Amazon ECS Fargate
- Amazon ECR
- Application Load Balancer (ALB)
- Auto Scaling
- CloudWatch Monitoring
- GitHub Actions CI/CD

---

#  System Architecture

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



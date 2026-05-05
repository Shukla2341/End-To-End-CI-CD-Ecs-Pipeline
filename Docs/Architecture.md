# System Architecture Document

## 1. Overview

This project implements a **scalable Three-Tier Web Application Architecture** with fully automated **CI/CD pipelines using GitHub Actions** and cloud deployment on **AWS**.

The system is designed for:
- Scalability
- Maintainability
- High availability
- Automated deployment
- Containerized workloads

---

## 2. High-Level Architecture

                ┌────────────────────────────┐
                │        End Users           │
                └─────────────┬──────────────┘
                              │
                              ▼
                ┌────────────────────────────┐
                │   Frontend (React.js)      │
                │   Nginx (Production)       │
                └─────────────┬──────────────┘
                              │ REST API Calls
                              ▼
                ┌────────────────────────────┐
                │   Backend (Node.js API)    │
                │   Express.js Server        │
                └─────────────┬──────────────┘
                              │
                              ▼
                ┌────────────────────────────┐
                │   Database Layer           │
                │   MongoDB / PostgreSQL     │
                └────────────────────────────┘


---

## 3. Architecture Layers

### 3.1 Presentation Layer (Frontend)
**Technology Stack:**
- React.js
- Nginx (Production serving)
- Axios / Fetch API

**Responsibilities:**
- User interface rendering
- Client-side routing
- API communication with backend
- State management

**Deployment:**
- Built using `npm run build`
- Served via **Nginx inside Docker container**

---

### 3.2 Application Layer (Backend)

**Technology Stack:**
- Node.js
- Express.js

**Responsibilities:**
- REST API handling
- Business logic processing
- Authentication & authorization (if implemented)
- Request validation
- Database communication

**Deployment:**
- Containerized using Docker
- Exposed via REST APIs (e.g., port 5000)

---

### 🗄 3.3 Data Layer (Database)

**Technology Options:**
- MongoDB (NoSQL)
- PostgreSQL (Relational)

**Responsibilities:**
- Persistent data storage
- Data integrity & consistency
- Query execution and indexing

---

## 4. CI/CD Pipeline Architecture

### GitHub Actions Workflow

Developer Push → GitHub Repo → GitHub Actions Trigger
│
▼
┌───────────────────────┐
│ Continuous Integration│
├───────────────────────┤
│ - Install Dependencies│
│ - Run Tests │
│ - Build Applications │
└──────────┬────────────┘
▼
┌───────────────────────┐
│ Docker Build Stage │
├───────────────────────┤
│ - Frontend Image │
│ - Backend Image │
└──────────┬────────────┘
▼
┌───────────────────────┐
│ AWS ECR Push │
└──────────┬────────────┘
▼
┌───────────────────────┐
│ Deployment Stage │
├───────────────────────┤
│ AWS ECS / EC2 Deploy │
└───────────────────────┘


---

## 5. Containerization Strategy

### Docker Architecture

| Service   | Container Type | Purpose |
|-----------|---------------|---------|
| Frontend  | Nginx + React | UI Serving |
| Backend   | Node.js       | API Server |
| Database  | Managed AWS / Local Docker | Data Storage |

### Docker Compose (Local Development)
- Orchestrates frontend, backend, and database
- Enables consistent local environment

---

## 6. Cloud Infrastructure (AWS)

### Services Used

- **Amazon ECR** → Docker Image Registry
- **Amazon ECS / forgate** → Application Hosting
- **IAM** → Access Management
- **CloudWatch** → Logging & Monitoring (optional)
- **S3 + CloudFront** → Static asset delivery (optional)

---

## 7. Network Flow

User
│
▼
APLICATION LOAD BALANCER
│
▼
React Frontend (Nginx)
│
▼
Node.js Backend API
│
▼
Database (MongoDB / PostgreSQL)

## 8. Security Architecture

- Environment variables stored in **GitHub Secrets**
- IAM roles used for AWS access control
- No sensitive data committed to GitHub
- API secured using CORS policy
- Optional JWT-based authentication layer

---

## 9. Scalability Design

- Stateless backend services
- Horizontal scaling via ECS tasks / EC2 instances
- Container-based deployment ensures portability

---

## 10. Key Design Principles

- Separation of Concerns (Frontend / Backend / DB)
- Containerization for portability
- Infrastructure as Code (CI/CD pipeline)
- Cloud-native deployment approach
- Automated build and release cycle

---

## 11. Summary

This architecture provides a **production-ready, cloud-deployable, and scalable full-stack system** with:
- Modern React frontend
- Robust Node.js backend
- Reliable database layer
- Fully automated CI/CD pipeline
- AWS-based deployment strategy

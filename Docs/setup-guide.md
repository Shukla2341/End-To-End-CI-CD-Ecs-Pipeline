## Setup Guide

This guide explains how to set up and run the **Three-Tier CI/CD Application (React + Node.js + AWS Deployment)** in local and production environments.

## 1. Prerequisites

Before starting, ensure the following tools are installed:

### Required Tools
- Node.js (>= 18.x)
- npm / yarn
- Git
- Docker & Docker Compose
- AWS CLI (for deployment)
- GitHub Account


## 2. Clone the Repository

```bash id="c8v1pq"
git clone https://github.com/your-username/your-repo.git
cd your-repo

3. Project Structure

│
├── frontend/                     # React / UI app
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── package-lock.json
│   └── Dockerfile
│
├── backend/                     # Node.js API
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── Dockerfile
│
├── nginx/                       # Reverse proxy config
│   ├── nginx.conf
│   └── Dockerfile
│
├── .github/
│   └── workflows/
│       └── deploy.yml           # CI/CD pipeline (GitHub Actions)
│
├── docker-compose.yml           # Local testing (optional but strong)
│
├── infrastructure/              # Infra configs (optional advanced)
│   ├── ecs-task-definition.json
│   ├── ecs-service.json
│   └── alb-config.md
│
├── scripts/                     # Helper scripts (optional)
│   ├── build.sh
│   ├── deploy.sh
│
├── docs/                        # Documentation
│   ├── architecture.md
│   └── setup-guide.md
│
├── .env.example                 # Environment variables template
├── .gitignore
├── README.md
└── LICENSE

4.Backend Setup (Node.js)
    Install Dependencies
    cd backend
    npm install

    Run Development Server
    npm run dev

Backend runs on:
http://localhost:5000

5. Frontend Setup (React)
    Install Dependencies
    cd frontend
    npm install
    Start Development Server
    npm start
    Frontend runs on:
    http://localhost:3000
6. Environment Variables Setup
    Backend .env

Create a file inside backend/

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
 Frontend .env

Create a file inside frontend/

REACT_APP_API_URL=http://localhost:5000

7. Run Full Stack Using Docker
Build and Start Containers
docker-compose up --build
Stop Containers
docker-compose down
8. Docker Services Overview
Service	Description	Port
frontend	React + Nginx	3000
backend	Node.js API	5000
database	MongoDB/Postgres	27017/5432

9. CI/CD Pipeline (GitHub Actions)
Required GitHub Secrets

Add these in:
GitHub → Settings → Secrets → Actions

AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION
ECR_REPOSITORY
ECS_CLUSTER_NAME
ECS_SERVICE_NAME

10. CI/CD Flow
Code Push → GitHub Actions Trigger → Build → Test → Docker Image Build → Push to AWS ECR → Deploy to AWS ECS/EC2

11. Production Build
Frontend Build
cd frontend
npm run build
Backend Build (if TypeScript used)
cd backend
npm run build

13. Recommended Run Order
Start Backend
Start Frontend
Verify Database Connection
Test API Endpoints
Run via Docker (optional)
14. Notes
Never commit .env files
Use GitHub Secrets for production
Prefer Docker for deployment consistency
Always test API before deployment
#!/bin/bash

set -e  # Stop execution if any command fails

echo " BUILD PIPELINE STARTED"  # Start build process

ROOT_DIR=$(pwd)  # Store project root directory

cd "$ROOT_DIR/backend"  # Move to backend directory
npm install  # Install backend dependencies
echo " Backend dependencies installed"  # Log backend install

cd "$ROOT_DIR/frontend"  # Move to frontend directory
npm install  # Install frontend dependencies
echo " Frontend dependencies installed"  # Log frontend install

npm run build  # Build React production bundle
echo " Frontend build completed"  # Log frontend build

cd "$ROOT_DIR/backend"  # Return to backend directory
npm run build 2>/dev/null || echo "ℹ No backend build step found"  # Build backend if script exists

echo " Building Docker images..."  # Start Docker build process
docker-compose -f automation/docker/docker-compose.yml build  # Build all services using Docker Compose

echo " Docker images built successfully"  # Log Docker build completion

echo " BUILD PIPELINE COMPLETED SUCCESSFULLY"  # End build process
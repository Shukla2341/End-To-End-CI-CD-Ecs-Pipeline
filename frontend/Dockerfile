# 🔹 Stage 1: Build React App
FROM node:18 AS build

WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

RUN npm install

# Copy remaining code
COPY . .

# Build the app
RUN npm run build


# 🔹 Stage 2: Serve using Nginx
FROM nginx:alpine

# Copy build files to nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
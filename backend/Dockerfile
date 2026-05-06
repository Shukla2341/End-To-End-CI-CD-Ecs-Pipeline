# 🔹 Lightweight Node image
FROM node:18-alpine

# 🔹 Set working directory
WORKDIR /app

# 🔹 Copy package files
COPY package*.json ./

# 🔹 Install only production dependencies
RUN npm ci --only=production

# 🔹 Copy source code
COPY . .

# 🔹 Set environment
ENV NODE_ENV=production

# 🔹 Expose port
EXPOSE 3000

# 🔹 Start app
CMD ["node", "server.js"]
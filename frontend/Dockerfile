# 🔹 Build Stage
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# 🔹 Production Stage
FROM nginx:alpine

# Remove default files
RUN rm -rf /usr/share/nginx/html/*

# 👉 Use ONE correct folder (choose based on your app)
# For React (CRA):
COPY --from=build /app/build /usr/share/nginx/html

# For Vite (use this instead if needed):
# COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
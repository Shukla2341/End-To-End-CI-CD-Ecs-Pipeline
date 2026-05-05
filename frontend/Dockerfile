# 🔹 Build Stage
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# 🔹 Production Stage
FROM nginx:latest

# Remove default nginx page
RUN rm -rf /usr/share/nginx/html/*

# ✅ Correct folder for CRA
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
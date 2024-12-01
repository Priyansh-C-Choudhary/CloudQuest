FROM node:18 as build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build # Build your React app

# Production stage (using a smaller image optimized for serving static files)
FROM nginx:stable-alpine as production

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] # Start Nginx
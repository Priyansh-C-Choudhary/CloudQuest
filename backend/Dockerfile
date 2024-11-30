# backend/Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy backend code into the container
COPY backend/ ./

# Expose the port the app runs on
EXPOSE 5000

# Command to run your app
CMD ["node", "index.js"]

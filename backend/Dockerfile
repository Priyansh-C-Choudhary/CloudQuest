# Backend Dockerfile

# Use the latest Node.js LTS version
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only the package.json and package-lock.json from the root folder
COPY package.json package-lock.json ./

# Install backend dependencies
RUN npm install

# Copy the backend folder contents
COPY backend ./backend

# Set the working directory for the backend
WORKDIR /usr/src/app/backend

# Expose the backend port
EXPOSE 5000

# Command to run the backend
CMD ["npm", "start"]

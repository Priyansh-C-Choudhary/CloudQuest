FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Expose the port your application listens on
EXPOSE 5000

# Set the NODE_ENV – you should set this to "production" for your deployed image, but if you want your logs and dev tools for testing you can keep this as "development"
ENV NODE_ENV production 

CMD ["npm", "run", "start"] # Command to start your backend
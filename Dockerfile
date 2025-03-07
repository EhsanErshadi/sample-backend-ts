# Use Node.js 20 LTS as base image
FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build TypeScript
RUN npm run build

# Create public/uploads directory
RUN mkdir -p public/uploads

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
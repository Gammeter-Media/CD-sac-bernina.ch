# Use a Node.js base image
FROM node:23-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 80
EXPOSE 80

# Start the development server
CMD ["npm", "run", "start", "--", "--port", "80", "--host", "0.0.0.0", "--poll"]

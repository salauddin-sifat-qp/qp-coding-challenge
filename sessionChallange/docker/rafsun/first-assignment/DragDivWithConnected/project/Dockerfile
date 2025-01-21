# Use the official Node.js v20.3.1 image
FROM node:20.3.1-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port Vite will run on
EXPOSE 5173

# Run the development server
CMD ["npm", "run", "dev", "--", "--host"]

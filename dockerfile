# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
# RUN tsc

# Expose the port that your application listens on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "server"]

# then execute command 'docker build -t <imagename> .'

# to build container execute command docker run -d -p <portnumber>:3000 --name <containername> --rm <imagename>

# to stop container execute command docker stop <containername>
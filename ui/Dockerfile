# Grab it from https://jsramblings.com/dockerizing-a-react-app/
# 1. Bump node version from 16 to 20.
# 2. Install dependencies via 'npm install' instead of 'npm ci'
# 3. IMPORTNAT - change .env file

# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:20-alpine
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== BUILD =====
# Install dependencies
RUN npm install
# Build the app
RUN npm run build
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
CMD [ "npx", "serve", "build" ]
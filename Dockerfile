# Stage 1: Build
FROM node:22-alpine AS build
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of your source code
COPY . .

# Run Vite build
RUN npm run build

# ----------------------------------------
# Stage 2: Production
# ----------------------------------------
FROM node:22-alpine AS production
WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy built dist folder
COPY --from=build /app/dist ./dist

# Expose port
EXPOSE 3000

# Run Vite built app
CMD ["serve", "-s", "dist", "-l", "3000"]

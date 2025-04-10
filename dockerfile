# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Enable corepack and prepare pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy the rest of the app
COPY . .

# Build the Next.js app
RUN pnpm build

# Expose the port
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]

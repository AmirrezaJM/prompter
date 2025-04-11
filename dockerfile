# Use official Node.js image
FROM node:22-slim AS development

# Set working directory
WORKDIR /app

# Install pnpm via Corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy the rest of the app
COPY . .

# ✅ Generate Prisma Client
RUN npx prisma generate

# Expose the port
EXPOSE 3000


CMD [ "pnpm", "run", "dev" ]
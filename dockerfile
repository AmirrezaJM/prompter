# Use official Node.js image
FROM node:22-alpine

# Set working directory
WORKDIR /src/app

# Install pnpm via Corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy the rest of the app
COPY . .

# ✅ Generate Prisma Client
RUN npx prisma generate

# Build the Next.js app
RUN pnpm build

# Expose the port
EXPOSE 3000

# Start the Next.js app
CMD ["pnpm", "start"]

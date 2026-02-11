# Use official Node.js runtime as the build environment
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies needed to build some native modules (if required)
RUN apk add --no-cache python3 make g++

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --silent

# Copy application sources
COPY . .

# Build the Next.js application
RUN npm run build

# Remove dev dependencies to keep production node_modules small
RUN npm prune --production

# ---- Final image ----
FROM node:20-alpine AS runner

WORKDIR /app

# Set production environment variable
ENV NODE_ENV=production
ENV PORT=3000

# Copy only the built output and production dependencies from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Copy next.config.js if it exists (using a RUN command to handle optional file)
RUN if [ -f /app/next.config.js ]; then echo "next.config.js found"; fi

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
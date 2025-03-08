# This Dockerfile should be built from the current directory (apps/engine)
# Build with: docker build -t everynews-engine .

FROM oven/bun:1.2 AS base

# Setup working directory
WORKDIR /app

# Copy package.json and other config files
COPY package.json tsconfig.json drizzle.config.ts ./

# Copy source code and drizzle directory
COPY src/ ./src/
COPY drizzle/ ./drizzle/

# Install dependencies
RUN bun install --frozen-lockfile

# Set environment variables
ENV NODE_ENV=production

# Expose the port
EXPOSE 3000

# Run database migrations on startup and then start the server
CMD ["sh", "-c", "bun run db:migrate && bun run start"]

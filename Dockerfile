# 1) Build stage
FROM node:22.18.0-alpine AS builder

WORKDIR /app

# Allow externalizing API URL during build if needed, with a sensible default
ARG NEXT_PUBLIC_RANDOM_USER_API_URL=https://randomuser.me/api
ENV NEXT_PUBLIC_RANDOM_USER_API_URL=${NEXT_PUBLIC_RANDOM_USER_API_URL}

COPY package.json package-lock.json* yarn.lock* ./
RUN npm ci

COPY . .
RUN npm run build

# 2) Production runtime (standalone)
FROM node:22.18.0-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# Pass runtime API URL from build or docker run, defaulting if unspecified
ARG NEXT_PUBLIC_RANDOM_USER_API_URL=https://randomuser.me/api
ENV NEXT_PUBLIC_RANDOM_USER_API_URL=${NEXT_PUBLIC_RANDOM_USER_API_URL}

# 2a) Pull in everything from the standalone build
COPY --from=builder /app/.next/standalone ./

# 2b) Copy over the client-side static assets
COPY --from=builder /app/.next/static ./.next/static

# 2c) Copy your public/ folder
COPY --from=builder /app/public ./public

EXPOSE 3000

# Run the standalone server
CMD ["node", "server.js"]

# ---- Build stage ----
FROM node:20-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# Install deps first (better layer caching)
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
# Pick your installer:
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable && corepack prepare pnpm@latest --activate && pnpm i --frozen-lockfile; \
  else npm ci; \
  fi

# Copy source & build
COPY . .
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f pnpm-lock.yaml ]; then pnpm build; \
  else npm run build; \
  fi

# ---- Runtime stage ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# Non-root user
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs
# Copy production artifacts
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
# Only prod deps
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
USER nextjs
# Next.js standalone is even leaner if you use output: "standalone"
CMD ["node","node_modules/next/dist/bin/next","start","-p","3000"]

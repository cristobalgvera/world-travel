FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
WORKDIR /app
COPY pnpm-lock.yaml ./
RUN pnpm fetch
COPY . .
RUN pnpm install --offline
RUN pnpm nx build yard-sale-api
RUN pnpm prune --prod

FROM node:22-alpine
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist/apps/yard-sale-api ./dist
RUN npm install -g pm2@latest
USER node
EXPOSE 3000
CMD ["pm2-runtime", "./dist/main.js", "-i", "0"]

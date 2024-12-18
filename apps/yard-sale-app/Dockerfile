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
RUN pnpm nx build yard-sale-app

FROM node:22-alpine
USER node
WORKDIR /app
COPY --from=build /app/dist/apps/yard-sale-app ./dist
EXPOSE 4200
CMD ["node", "./dist/server/server.mjs"]

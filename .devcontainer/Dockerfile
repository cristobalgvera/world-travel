FROM node:22 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
COPY . .

FROM base
ARG APP_NAME
ARG EXTRA_ARGS
ARG PORT
ENV APP_NAME=$APP_NAME
ENV EXTRA_ARGS=$EXTRA_ARGS
ENV PORT=$PORT
ENV NX_DAEMON=true
EXPOSE $PORT
CMD pnpm nx serve $APP_NAME $EXTRA_ARGS

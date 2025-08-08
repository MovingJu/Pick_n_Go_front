# syntax=docker/dockerfile:1

ARG NODE_VERSION=23.11.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Set working directory for all build stages.
WORKDIR /usr/src/app

################################################################################
# Create a stage for installing production dependencies.
FROM base as deps

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,id=npm-cache,target=/root/.npm \
    npm ci --omit=dev

################################################################################
# Create a stage for building the application.
FROM deps as build

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,id=npm-cache,target=/root/.npm \
    npm ci

# Copy the rest of the source files into the image.
COPY . .

RUN npm install
RUN npm run build

################################################################################
# Create a new stage to run the application with minimal runtime dependencies
FROM base as final

ENV NODE_ENV production
USER node

COPY package.json .

COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

EXPOSE 4173

# 👇 preview 서버가 0.0.0.0에 바인딩되도록 package.json에 --host 포함돼 있어야 함
CMD npm run preview

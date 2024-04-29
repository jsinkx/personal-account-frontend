# Create .env by args
FROM alpine AS env_by_args
ARG GENERATE_SOURCEMAP
ARG VITE_API_URL
ARG VITE_CLOUD_URL
ARG VITE_IS_BETA
WORKDIR /personal-account-frontend
RUN echo "GENERATE_SOURCEMAP=$GENERATE_SOURCEMAP" > .env
RUN echo "VITE_API_URL=$VITE_API_URL" >> .env
RUN echo "VITE_CLOUD_URL=$VITE_CLOUD_URL" >> .env
RUN echo "VITE_IS_BETA=$VITE_IS_BETA" >> .env

# Select .env from project or craeted by args
FROM alpine as env
WORKDIR /personal-account-frontend
COPY --from=env_by_args /personal-account-frontend/.env .
COPY *.env .env

# Prepare build image
FROM alpine AS builder
WORKDIR /personal-account-frontend
COPY . .
RUN apk add --update npm
RUN npm install -g pnpm
COPY --from=env /personal-account-frontend/.env .env
RUN pnpm install
RUN pnpm run build

# Build production image
FROM nginx:alpine AS runner
EXPOSE 80
COPY --from=builder /personal-account-frontend/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

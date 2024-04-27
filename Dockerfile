# Prepare build image
FROM alpine AS builder
WORKDIR /personal-account-frontend
COPY . .
RUN apk add --update npm
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

# Build production image
FROM nginx:alpine AS runner
EXPOSE 80
COPY --from=builder /personal-account-frontend/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
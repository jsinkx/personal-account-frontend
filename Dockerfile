FROM node:alpine

EXPOSE 3000
WORKDIR /usr/src/app-pa-frontend
COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build
CMD ["pnpm", "serve"]



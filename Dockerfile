FROM node:20-alpine 

RUN apk update
RUN apk add --no-cache \
    openssl 

WORKDIR /app

RUN npm install -g pnpm
COPY package*.json pnpm-lock.yaml* ./

COPY . .
RUN pnpm install
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
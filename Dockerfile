# 1단계: 빌드 스테이지
FROM node:20 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build


# 2단계: 프리뷰 서버만 실행
FROM node:20

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY package.json package-lock.json ./
RUN npm ci --omit=dev  # 프리뷰에 devDependencies 필요하면 생략

# host, port 설정
CMD ["npm", "run", "preview", "--", "--host", "--port", "8080"]

# 개발용 preview를 위한 빌드 스테이지
FROM node:18

WORKDIR /app

# 의존성 설치
COPY package.json package-lock.json ./
RUN npm ci

# 전체 소스 복사
COPY . .

# Vite preview 서버 실행
CMD ["npm", "run", "preview", "--", "--host"]

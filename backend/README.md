# Safe One - Backend

안전 교육 영상 플랫폼의 백엔드 API입니다.

## 기술 스택

- **Express.js** - 로컬 개발용 서버
- **Vercel Serverless Functions** - 프로덕션 배포
- **Resend** - 이메일 전송 서비스

## 개발 환경 설정

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env` 파일 생성 (`.env.example` 참조):

```bash
# Resend API 키
RESEND_API_KEY=re_your_api_key_here

# 발신 이메일
RESEND_FROM_EMAIL=onboarding@resend.dev

# 관리자 이메일
ADMIN_EMAIL=neohum77@gmail.com

# 서버 포트
PORT=3001
```

### 3. Resend API 키 발급

1. [Resend](https://resend.com) 가입
2. API Keys 메뉴에서 새 키 생성
3. `.env` 파일에 키 입력

### 4. 개발 서버 실행

```bash
npm run dev
```

서버가 `http://localhost:3001`에서 실행됩니다.

## API 엔드포인트

### POST /api/report-video-error

영상 재생 오류를 신고합니다.

**요청 본문:**
```json
{
  "post": {
    "id": 1,
    "contents": "탁자 밑으로 몸을 숨기고 머리 보호하기",
    "key_words": "지진",
    "url": "https://youtube.com/...",
    "youtube_id": "MYfF2SJ-4JE",
    "channel_name": "아이쿠",
    "play_time": 3
  },
  "userEmail": "user@example.com",
  "userMessage": "영상이 재생되지 않습니다"
}
```

**응답:**
```json
{
  "success": true,
  "message": "신고가 접수되었습니다. 감사합니다!",
  "emailId": "..."
}
```

### GET /api/health

서버 상태를 확인합니다.

**응답:**
```json
{
  "status": "ok",
  "timestamp": "2025-11-21T..."
}
```

## 프로젝트 구조

```
backend/
├── server/
│   └── index.js        # Express 서버 (로컬 개발용)
├── api/
│   └── report-video-error.js  # Vercel Serverless Function
├── vercel.json         # Vercel 설정
├── .env.example        # 환경 변수 예시
└── package.json
```

## 배포

### Vercel에 배포 (권장)

1. Vercel CLI 설치:
```bash
npm install -g vercel
```

2. 로그인:
```bash
vercel login
```

3. 배포:
```bash
npm run deploy
```

4. Vercel 대시보드에서 환경 변수 설정:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `ADMIN_EMAIL`

### 로컬 Express 서버 (개발용)

```bash
npm start
```

## 이메일 템플릿

신고 이메일에는 다음 정보가 포함됩니다:

- 영상 ID
- 영상 제목
- 키워드
- 채널명
- 재생시간
- YouTube URL
- 신고자 이메일 (선택)
- 추가 메시지 (선택)
- 신고 시간

## 비용

### Vercel (무료 플랜)
- Serverless Functions 무제한
- 100GB 대역폭/월

### Resend (무료 플랜)
- 3,000개 이메일/월
- 100개 이메일/일

## 문제 해결

### 이메일이 전송되지 않는 경우

1. `.env` 파일 확인
2. Resend API 키 유효성 확인
3. 서버 로그 확인:
```bash
npm run dev
```

### CORS 오류

`api/report-video-error.js`에서 CORS 설정 확인:
```javascript
res.setHeader('Access-Control-Allow-Origin', '*');
```

프로덕션에서는 특정 도메인만 허용:
```javascript
res.setHeader('Access-Control-Allow-Origin', 'https://yourdomain.com');
```

### Vercel 배포 오류

1. `vercel.json` 파일 확인
2. 환경 변수 설정 확인
3. Vercel 로그 확인:
```bash
vercel logs
```

## 보안

- `.env` 파일을 절대 Git에 커밋하지 마세요
- API 키가 노출되면 즉시 재발급하세요
- 프로덕션에서는 CORS를 특정 도메인으로 제한하세요


# Safe One - 안전 교육 영상 플랫폼

어린이를 위한 안전 교육 YouTube 영상 플랫폼입니다.

## 프로젝트 구조

```
safe_one/
├── frontend/           # React 프론트엔드
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/            # Express/Vercel API
│   ├── server/        # 로컬 개발 서버
│   ├── api/           # Vercel Serverless Functions
│   └── package.json
├── package.json        # 루트 패키지 (스크립트 관리)
└── README.md
```

## 빠른 시작

### 1. 전체 의존성 설치

```bash
npm run install:all
```

### 2. 환경 변수 설정

#### Backend (.env)
```bash
cd backend
cp .env.example .env
# .env 파일을 열어 Resend API 키 입력
```

#### Frontend (.env.development)
```bash
cd frontend
# .env.development 파일이 이미 생성되어 있음
```

### 3. 개발 서버 실행

#### 방법 1: 프론트엔드와 백엔드 동시 실행 (권장)
```bash
npm run dev
```

#### 방법 2: 각각 실행
터미널 1 (프론트엔드):
```bash
npm run dev:frontend
```

터미널 2 (백엔드):
```bash
npm run dev:backend
```

### 4. 브라우저에서 확인

- 프론트엔드: http://localhost:5173
- 백엔드 API: http://localhost:3001

## 주요 기능

### 1. 랜덤 영상 재생
- 226개의 안전 교육 영상 중 랜덤 재생
- "다른 영상 보기" 버튼으로 새로운 영상 로드

### 2. 키워드별 영상 선택
- 지진, 화재, 교통안전 등 키워드별 분류
- 원하는 영상 선택하여 재생

### 3. 영상 오류 신고
- 재생되지 않는 영상 신고 기능
- Resend를 통해 관리자에게 이메일 자동 전송

## 기술 스택

### Frontend
- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS
- React Query

### Backend
- Express.js (로컬 개발)
- Vercel Serverless Functions (프로덕션)
- Resend (이메일 서비스)

## 배포

### Verpex Shared Hosting + Vercel API

1. **백엔드 API를 Vercel에 배포:**
```bash
npm run deploy:backend
```

2. **프론트엔드 빌드:**
```bash
npm run deploy:frontend
```

3. **Verpex에 업로드:**
   - `frontend/dist/` 폴더의 모든 파일을 Verpex `public_html`에 업로드

자세한 내용은 `DEPLOYMENT_VERPEX.md` 참조

### 전체를 Vercel에 배포 (대안)

프론트엔드와 백엔드 모두 Vercel에 배포할 수도 있습니다.

## 환경 변수

### Backend
- `RESEND_API_KEY`: Resend API 키
- `RESEND_FROM_EMAIL`: 발신 이메일 (기본: onboarding@resend.dev)
- `ADMIN_EMAIL`: 신고를 받을 관리자 이메일
- `PORT`: 서버 포트 (기본: 3001)

### Frontend
- `VITE_API_URL`: 백엔드 API URL
  - 개발: http://localhost:3001
  - 프로덕션: Vercel API URL 또는 비워두기

## 스크립트

### 루트 레벨
```bash
npm run install:all      # 모든 의존성 설치
npm run dev              # 프론트엔드 + 백엔드 동시 실행
npm run dev:frontend     # 프론트엔드만 실행
npm run dev:backend      # 백엔드만 실행
npm run build:frontend   # 프론트엔드 빌드
npm run deploy:frontend  # 프론트엔드 빌드
npm run deploy:backend   # 백엔드 Vercel 배포
```

### Frontend
```bash
cd frontend
npm run dev              # 개발 서버
npm run build            # 빌드
npm run build:prod       # 프로덕션 빌드
npm run lint             # 린트
npm run preview          # 빌드 미리보기
```

### Backend
```bash
cd backend
npm run dev              # 개발 서버
npm start                # 프로덕션 서버
npm run deploy           # Vercel 배포
```

## 문서

- `frontend/README.md` - 프론트엔드 상세 문서
- `backend/README.md` - 백엔드 상세 문서
- `DEPLOYMENT_VERPEX.md` - Verpex 배포 가이드
- `SETUP_EMAIL.md` - 이메일 설정 가이드

## 문제 해결

### 개발 서버가 시작되지 않는 경우
```bash
# 의존성 재설치
npm run install:all
```

### API 연결 오류
1. 백엔드 서버가 실행 중인지 확인
2. `.env` 파일 확인
3. 브라우저 콘솔에서 CORS 오류 확인

### 이메일이 전송되지 않는 경우
1. `backend/.env` 파일의 `RESEND_API_KEY` 확인
2. Resend 대시보드에서 API 키 상태 확인
3. 백엔드 서버 로그 확인

## 라이선스

MIT

## 문의

neohum77@gmail.com


# 이메일 신고 기능 설정 가이드

## 1. Resend 계정 생성 및 API 키 발급

### 1.1 Resend 가입
1. [Resend](https://resend.com) 접속
2. 회원가입 (GitHub 계정으로 간편 가입 가능)
3. 무료 플랜: 월 3,000개 이메일 무료

### 1.2 API 키 발급
1. Resend 대시보드 로그인
2. 좌측 메뉴에서 "API Keys" 클릭
3. "Create API Key" 버튼 클릭
4. 이름 입력 (예: "safe_one_production")
5. 생성된 API 키 복사 (한 번만 표시됨!)

### 1.3 도메인 인증 (선택사항, 권장)
무료 플랜에서는 `onboarding@resend.dev`를 사용할 수 있지만, 
자신의 도메인을 사용하려면:

1. Resend 대시보드에서 "Domains" 클릭
2. "Add Domain" 클릭
3. 도메인 입력 (예: yourdomain.com)
4. DNS 레코드 추가 (Resend가 제공하는 값 복사)
5. 인증 완료 후 `noreply@yourdomain.com` 형식으로 사용 가능

## 2. 환경 변수 설정

### 2.1 .env 파일 생성
프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 입력:

```bash
# Resend API 키
RESEND_API_KEY=re_your_actual_api_key_here

# 발신 이메일 (도메인 인증 전에는 onboarding@resend.dev 사용)
RESEND_FROM_EMAIL=onboarding@resend.dev

# 관리자 이메일 (신고를 받을 이메일)
ADMIN_EMAIL=neohum77@gmail.com

# 서버 포트
PORT=3001
```

### 2.2 값 설정
- `RESEND_API_KEY`: 위에서 발급받은 API 키 입력
- `RESEND_FROM_EMAIL`: 
  - 도메인 인증 전: `onboarding@resend.dev`
  - 도메인 인증 후: `noreply@yourdomain.com`
- `ADMIN_EMAIL`: 신고 이메일을 받을 관리자 이메일
- `PORT`: API 서버 포트 (기본값: 3001)

## 3. 서버 실행

### 3.1 개발 환경에서 실행

#### 방법 1: 프론트엔드와 서버 동시 실행 (권장)
```bash
npm run dev:all
```

#### 방법 2: 별도 터미널에서 실행
터미널 1:
```bash
npm run dev
```

터미널 2:
```bash
npm run server
```

### 3.2 서버 확인
브라우저에서 `http://localhost:3001/api/health` 접속
다음과 같은 응답이 나오면 정상:
```json
{
  "status": "ok",
  "timestamp": "2025-11-21T..."
}
```

## 4. 기능 테스트

### 4.1 프론트엔드에서 테스트
1. `http://localhost:5173` 접속
2. 아무 영상 재생
3. 영상 아래 "⚠️ 영상이 재생되지 않나요?" 버튼 클릭
4. 신고 모달에서 정보 입력 (선택사항)
5. "신고하기" 버튼 클릭
6. 관리자 이메일로 신고 메일 수신 확인

### 4.2 이메일 내용
신고 이메일에는 다음 정보가 포함됩니다:
- 영상 ID
- 영상 제목 (contents)
- 키워드
- 채널명
- 재생시간
- YouTube URL
- 신고자 이메일 (입력한 경우)
- 추가 메시지 (입력한 경우)
- 신고 시간

## 5. 프로덕션 배포

### 5.1 환경 변수 설정
배포 플랫폼(Vercel, Netlify 등)에서 환경 변수 설정:
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `ADMIN_EMAIL`
- `PORT`

### 5.2 API URL 변경
프로덕션 환경에서는 `src/components/YoutubePlayer.tsx`의 
API URL을 변경해야 합니다:

```typescript
// 개발 환경
const API_URL = 'http://localhost:3001';

// 프로덕션 환경
const API_URL = process.env.VITE_API_URL || 'https://your-api-domain.com';
```

## 6. 문제 해결

### 6.1 이메일이 전송되지 않는 경우
1. `.env` 파일이 프로젝트 루트에 있는지 확인
2. `RESEND_API_KEY`가 올바른지 확인
3. 서버 콘솔에서 오류 메시지 확인
4. Resend 대시보드에서 API 키 상태 확인

### 6.2 CORS 오류가 발생하는 경우
서버의 CORS 설정이 올바른지 확인:
```javascript
app.use(cors({
  origin: 'http://localhost:5173', // 프론트엔드 URL
  credentials: true
}));
```

### 6.3 서버가 시작되지 않는 경우
1. 포트 3001이 이미 사용 중인지 확인
2. `.env` 파일의 PORT 값 변경
3. `node_modules` 재설치: `npm install`

## 7. 비용 및 제한사항

### Resend 무료 플랜
- 월 3,000개 이메일 무료
- 일일 100개 제한
- 1개 도메인 인증 가능
- API 접근 가능

### 유료 플랜 (필요시)
- Pro: $20/월 (50,000개 이메일)
- Business: 커스텀 가격

## 8. 보안 주의사항

1. `.env` 파일을 절대 Git에 커밋하지 마세요
2. `.gitignore`에 `.env`가 포함되어 있는지 확인
3. API 키가 노출되면 즉시 재발급
4. 프로덕션에서는 HTTPS 사용 필수


# Safe One - Frontend

안전 교육 영상 플랫폼의 프론트엔드 애플리케이션입니다.

## 기술 스택

- **React 19** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Vite** - 빌드 도구
- **React Router** - 라우팅
- **Tailwind CSS** - 스타일링
- **React Query** - 데이터 페칭

## 개발 환경 설정

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.development` 파일 생성:

```bash
VITE_API_URL=http://localhost:3001
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

## 빌드

### 개발 빌드
```bash
npm run build
```

### 프로덕션 빌드
```bash
npm run build:prod
```

빌드 결과물은 `dist/` 폴더에 생성됩니다.

## 프로젝트 구조

```
frontend/
├── src/
│   ├── components/     # 재사용 가능한 컴포넌트
│   │   ├── DateDisplay.tsx
│   │   ├── Header.tsx
│   │   └── YoutubePlayer.tsx
│   ├── pages/          # 페이지 컴포넌트
│   │   ├── Home.tsx
│   │   └── Select.tsx
│   ├── data/           # 데이터
│   │   └── posts.ts
│   ├── types/          # TypeScript 타입 정의
│   │   └── index.ts
│   ├── utils/          # 유틸리티 함수
│   │   └── youtube.ts
│   ├── hooks/          # 커스텀 훅
│   ├── App.tsx         # 메인 앱 컴포넌트
│   ├── main.tsx        # 엔트리 포인트
│   └── index.css       # 글로벌 스타일
├── public/             # 정적 파일
├── index.html          # HTML 템플릿
└── vite.config.ts      # Vite 설정
```

## 주요 기능

### 1. 랜덤 영상 재생
- 메인 페이지에서 안전 교육 영상 랜덤 재생
- "다른 영상 보기" 버튼으로 새로운 영상 로드

### 2. 영상 선택
- 키워드별 영상 목록 표시
- 원하는 영상 선택하여 재생

### 3. 영상 오류 신고
- 재생되지 않는 영상 신고 기능
- 이메일로 관리자에게 자동 전송

## 배포

### Verpex Shared Hosting

1. 프로덕션 빌드:
```bash
npm run build:prod
```

2. `dist/` 폴더의 모든 파일을 Verpex의 `public_html`에 업로드

3. `.htaccess` 파일 설정 (React Router 지원)

자세한 내용은 루트의 `DEPLOYMENT_VERPEX.md` 참조

### Vercel (대안)

```bash
vercel --prod
```

## 환경 변수

- `VITE_API_URL`: 백엔드 API URL
  - 개발: `http://localhost:3001`
  - 프로덕션: Vercel API URL 또는 비워두기

## 문제 해결

### 개발 서버가 시작되지 않는 경우
```bash
rm -rf node_modules package-lock.json
npm install
```

### 빌드 오류
```bash
npm run lint
```

### API 연결 오류
- `.env.development` 파일 확인
- 백엔드 서버 실행 상태 확인
- 브라우저 콘솔에서 CORS 오류 확인


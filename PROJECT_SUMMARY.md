# 안전한줄 React 프로젝트 요약

## 📋 프로젝트 개요

Laravel Livewire로 만들어진 "안전한줄" 웹서비스를 순수 React + TypeScript로 재구현한 프로젝트입니다.

## ✅ 완료된 작업

### 1. 프로젝트 초기 설정
- ✅ React + TypeScript + Vite 프로젝트 생성
- ✅ 필요한 패키지 설치
  - react-router-dom (라우팅)
  - axios (HTTP 클라이언트)
  - @tanstack/react-query (데이터 페칭)
  - date-fns (날짜 포맷팅)
  - tailwindcss (스타일링)

### 2. 타입 정의 및 유틸리티
- ✅ `types/index.ts` - Post, Tag 인터페이스 정의
- ✅ `utils/youtube.ts` - YouTube URL 파싱 및 임베드 URL 생성
- ✅ `utils/date.ts` - 한국어 날짜/요일 포맷팅

### 3. 데이터 관리
- ✅ `data/posts.ts` - Laravel PostSeeder 데이터를 참고한 안전 교육 영상 데이터 (15개 샘플)

### 4. 공통 컴포넌트
- ✅ `DateDisplay` - 현재 날짜와 요일 표시
- ✅ `Header` - 네비게이션 메뉴
- ✅ `Footer` - 사이트 정보
- ✅ `YoutubePlayer` - YouTube 영상 임베드 플레이어

### 5. 페이지 컴포넌트
- ✅ `Home` - 랜덤 안전 영상 표시 페이지
  - 랜덤 포스트 선택
  - YouTube 영상 자동 재생
  - "다른 영상 보기" 버튼
- ✅ `Select` - 영상 선택 페이지
  - 전체 영상 목록 표시
  - 검색 기능 (키워드, 내용, 채널명)
  - 영상 클릭 시 전체 화면 재생
- ✅ `NotSupported` - 모바일 미지원 안내 페이지

### 6. 커스텀 훅
- ✅ `useDeviceDetect` - 모바일 기기 감지

### 7. 라우팅 및 앱 구조
- ✅ React Router 설정
- ✅ 모바일 기기 리다이렉트 로직
- ✅ 404 처리 (메인 페이지로 리다이렉트)

## 🎯 주요 기능

### Laravel 원본과의 비교

| 기능 | Laravel (Livewire) | React |
|------|-------------------|-------|
| 랜덤 영상 표시 | ✅ | ✅ |
| 영상 검색 | ✅ | ✅ |
| 영상 선택 재생 | ✅ | ✅ |
| 날짜/요일 표시 | ✅ | ✅ |
| 모바일 감지 | ✅ | ✅ |
| 인증 시스템 | ✅ | ❌ (불필요) |
| 대시보드 | ✅ | ❌ (불필요) |

## 📁 파일 구조

```
frontend/
├── src/
│   ├── components/
│   │   ├── DateDisplay.tsx      # 날짜 표시
│   │   ├── Footer.tsx           # 푸터
│   │   ├── Header.tsx           # 헤더/네비게이션
│   │   └── YoutubePlayer.tsx    # YouTube 플레이어
│   ├── data/
│   │   └── posts.ts             # 안전 영상 데이터
│   ├── hooks/
│   │   └── useDeviceDetect.ts   # 모바일 감지 훅
│   ├── pages/
│   │   ├── Home.tsx             # 메인 페이지
│   │   ├── Select.tsx           # 선택 페이지
│   │   └── NotSupported.tsx     # 모바일 미지원 페이지
│   ├── types/
│   │   └── index.ts             # TypeScript 타입
│   ├── utils/
│   │   ├── date.ts              # 날짜 유틸리티
│   │   └── youtube.ts           # YouTube 유틸리티
│   ├── App.tsx                  # 메인 앱
│   ├── main.tsx                 # 엔트리 포인트
│   └── index.css                # 글로벌 스타일
├── public/                      # 정적 파일
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🚀 실행 방법

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 🌐 접속 URL

- 개발 서버: http://localhost:5174 (또는 5173)
- 메인 페이지: /
- 선택 페이지: /select

## 💡 주요 차이점

### Laravel → React 변환 시 변경사항

1. **데이터 관리**
   - Laravel: 데이터베이스 + Eloquent ORM
   - React: 정적 데이터 파일 (data/posts.ts)

2. **상태 관리**
   - Laravel: Livewire 컴포넌트 상태
   - React: useState, useEffect 훅

3. **라우팅**
   - Laravel: routes/web.php
   - React: React Router DOM

4. **스타일링**
   - Laravel: Blade + Tailwind + Flux UI
   - React: Tailwind CSS

5. **인증**
   - Laravel: Laravel Breeze + Sanctum
   - React: 제거 (불필요)

## 📝 향후 개선 사항

- [ ] 더 많은 안전 영상 데이터 추가 (현재 15개 → 1700+개)
- [ ] 카테고리/태그 필터링 기능
- [ ] 즐겨찾기 기능
- [ ] 다크 모드 토글
- [ ] 반응형 디자인 개선 (모바일 지원)
- [ ] 영상 시청 기록
- [ ] 공유 기능

## 👥 제작

- 기획: 박대현
- 제작: 민정일

---

© 2025 안전한줄.com


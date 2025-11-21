# Verpex Shared Hosting 배포 가이드

## 개요
- **프론트엔드**: Verpex shared hosting에 배포
- **백엔드 API**: Vercel serverless functions에 무료 배포
- **이메일**: Resend (무료 플랜)

---

## 1단계: Vercel에 API 배포

### 1.1 Vercel 계정 생성
1. [Vercel](https://vercel.com) 접속
2. GitHub 계정으로 가입 (무료)

### 1.2 프로젝트 배포
```bash
# Vercel CLI 설치
npm install -g vercel

# 로그인
vercel login

# 배포
vercel
```

### 1.3 환경 변수 설정
Vercel 대시보드에서:
1. 프로젝트 선택
2. Settings → Environment Variables
3. 다음 변수 추가:
   - `RESEND_API_KEY`: Resend API 키
   - `RESEND_FROM_EMAIL`: onboarding@resend.dev
   - `ADMIN_EMAIL`: neohum77@gmail.com

### 1.4 API URL 확인
배포 후 Vercel이 제공하는 URL 확인:
```
https://your-project.vercel.app
```

---

## 2단계: 프론트엔드 빌드 및 설정

### 2.1 환경 변수 설정
`.env.production` 파일 생성:
```bash
# Vercel API URL
VITE_API_URL=https://your-project.vercel.app
```

### 2.2 프로덕션 빌드
```bash
npm run build
```

빌드 결과물은 `dist/` 폴더에 생성됩니다.

---

## 3단계: Verpex에 업로드

### 3.1 cPanel 접속
1. Verpex cPanel 로그인
2. File Manager 열기

### 3.2 파일 업로드
1. `public_html` 폴더로 이동 (또는 도메인 루트 폴더)
2. `dist/` 폴더의 모든 파일 업로드:
   - `index.html`
   - `assets/` 폴더
   - `logo.png`
   - `vite.svg`

### 3.3 .htaccess 설정
`public_html/.htaccess` 파일 생성 또는 수정:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # HTTPS 강제 (선택사항)
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # React Router 지원
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# MIME 타입 설정
<IfModule mod_mime.c>
  AddType application/javascript .js
  AddType text/css .css
</IfModule>

# 캐싱 설정
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## 4단계: 테스트

### 4.1 사이트 접속
1. 브라우저에서 도메인 접속
2. 영상 재생 확인
3. "영상이 재생되지 않나요?" 버튼 클릭
4. 신고 기능 테스트

### 4.2 문제 해결
브라우저 개발자 도구(F12) → Console 탭에서 오류 확인

**CORS 오류가 발생하는 경우:**
`api/report-video-error.js`의 CORS 설정 확인:
```javascript
res.setHeader('Access-Control-Allow-Origin', '*');
// 또는 특정 도메인만 허용
res.setHeader('Access-Control-Allow-Origin', 'https://yourdomain.com');
```

---

## 5단계: 업데이트 방법

### 프론트엔드 업데이트
```bash
# 1. 코드 수정
# 2. 빌드
npm run build

# 3. dist/ 폴더의 파일을 Verpex에 재업로드
```

### API 업데이트
```bash
# 1. api/ 폴더의 코드 수정
# 2. Vercel에 재배포
vercel --prod
```

---

## 비용 정리

### 무료로 사용 가능:
- ✅ Vercel: 무료 플랜 (Hobby)
  - Serverless Functions 무제한
  - 100GB 대역폭/월
  
- ✅ Resend: 무료 플랜
  - 3,000개 이메일/월
  - 100개 이메일/일

### 유료:
- Verpex Shared Hosting (이미 보유)

---

## 대안: 모두 Vercel에 배포

Verpex 대신 Vercel에 전체를 배포할 수도 있습니다:

```bash
# 전체 배포
vercel --prod
```

장점:
- 무료
- 자동 HTTPS
- 자동 배포 (Git push 시)
- CDN 자동 적용
- 더 빠른 속도

단점:
- Verpex 호스팅 미사용

---

## 참고 자료

- [Vercel 문서](https://vercel.com/docs)
- [Resend 문서](https://resend.com/docs)
- [Vite 배포 가이드](https://vitejs.dev/guide/static-deploy.html)


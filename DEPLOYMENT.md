# 안전한줄 (Safe One Line) - 배포 가이드

## 📦 빌드 완료

프로덕션 빌드가 성공적으로 완료되었습니다!

### 빌드 결과
- **빌드 디렉토리**: `frontend/dist/`
- **빌드 시간**: 489ms
- **총 파일 크기**: 
  - HTML: 0.54 kB (gzip: 0.32 kB)
  - CSS: 2.95 kB (gzip: 1.13 kB)
  - React Vendor JS: 43.92 kB (gzip: 15.82 kB)
  - Main JS: 274.09 kB (gzip: 81.53 kB)
  - **총 압축 크기**: ~98.8 kB

---

## 🚀 배포 방법

### 1. Apache 웹서버

#### 파일 업로드
```bash
# dist 폴더의 모든 파일을 웹서버 루트로 복사
scp -r frontend/dist/* user@server:/var/www/html/
```

#### .htaccess 설정
`.htaccess` 파일이 `frontend/.htaccess`에 생성되어 있습니다.
```bash
# .htaccess 파일도 함께 업로드
scp frontend/.htaccess user@server:/var/www/html/
```

#### Apache 설정 확인
```apache
# mod_rewrite 모듈이 활성화되어 있는지 확인
sudo a2enmod rewrite
sudo systemctl restart apache2
```

---

### 2. Nginx 웹서버

#### 파일 업로드
```bash
# dist 폴더의 모든 파일을 Nginx 루트로 복사
scp -r frontend/dist/* user@server:/usr/share/nginx/html/
```

#### Nginx 설정
`nginx.conf` 파일이 `frontend/nginx.conf`에 생성되어 있습니다.

```bash
# Nginx 설정 파일 복사
sudo cp frontend/nginx.conf /etc/nginx/sites-available/safe_one
sudo ln -s /etc/nginx/sites-available/safe_one /etc/nginx/sites-enabled/

# Nginx 재시작
sudo nginx -t
sudo systemctl restart nginx
```

---

### 3. 정적 호스팅 서비스

#### Vercel
```bash
# Vercel CLI 설치
npm install -g vercel

# 배포
cd frontend
vercel --prod
```

#### Netlify
```bash
# Netlify CLI 설치
npm install -g netlify-cli

# 배포
cd frontend
netlify deploy --prod --dir=dist
```

#### GitHub Pages
```bash
# gh-pages 패키지 설치
npm install -D gh-pages

# package.json에 추가
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}

# 배포
npm run deploy
```

---

## 🔧 환경별 설정

### 프로덕션 환경 변수
필요한 경우 `.env.production` 파일을 생성하여 환경 변수를 설정할 수 있습니다.

```env
VITE_API_URL=https://api.example.com
```

---

## 📋 배포 체크리스트

- [x] 프로덕션 빌드 완료
- [x] .htaccess 파일 생성 (Apache용)
- [x] nginx.conf 파일 생성 (Nginx용)
- [ ] 웹서버에 파일 업로드
- [ ] 웹서버 설정 적용
- [ ] 도메인 연결
- [ ] SSL 인증서 설정 (HTTPS)
- [ ] 브라우저에서 테스트

---

## 🌐 접속 테스트

배포 후 다음 항목을 확인하세요:

1. **메인 페이지** (`/`)
   - 랜덤 안전 교육 영상 표시
   - 날짜 표시
   - YouTube 영상 재생

2. **선택 페이지** (`/select`)
   - 검색 기능
   - 카테고리 필터링
   - 영상 목록 표시

3. **라우팅 테스트**
   - 직접 URL 입력 시 정상 작동
   - 새로고침 시 404 에러 없음
   - 뒤로가기/앞으로가기 정상 작동

---

## 🔒 보안 설정

### HTTPS 설정 (Let's Encrypt)
```bash
# Certbot 설치
sudo apt-get install certbot python3-certbot-nginx

# SSL 인증서 발급
sudo certbot --nginx -d yourdomain.com
```

### 보안 헤더
Nginx 설정에 이미 다음 보안 헤더가 포함되어 있습니다:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection

---

## 📊 성능 최적화

빌드에 이미 다음 최적화가 적용되어 있습니다:

- ✅ **코드 분할**: React 라이브러리를 별도 청크로 분리
- ✅ **Gzip 압축**: 총 크기 ~98.8 kB
- ✅ **소스맵**: 디버깅을 위한 소스맵 생성
- ✅ **캐싱**: 정적 파일 1년 캐싱 설정

---

## 🛠️ 재빌드

코드 수정 후 재배포가 필요한 경우:

```bash
cd frontend
npm run build
```

---

## 📞 문의

배포 중 문제가 발생하면 다음을 확인하세요:

1. 웹서버 에러 로그
2. 브라우저 개발자 도구 콘솔
3. 네트워크 탭에서 404 에러 확인

---

**배포 완료!** 🎉


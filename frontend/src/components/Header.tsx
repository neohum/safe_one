import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFullscreen } from '../contexts/FullscreenContext';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { isFullscreen, toggleFullscreen } = useFullscreen();

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRandomClick = () => {
    // 현재 홈 페이지에 있으면 강제로 리로드
    if (location.pathname === '/') {
      // URL에 타임스탬프를 추가하여 강제 리렌더링
      navigate('/?refresh=' + Date.now());
    } else {
      navigate('/');
    }
  };

  // 전체화면 모드에서는 헤더 숨김
  if (isFullscreen) {
    return null;
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(31, 41, 55, 0.95)' : 'rgba(31, 41, 55, 0.7)',
        backdropFilter: 'blur(10px)',
        transition: 'background-color 0.3s ease',
        padding: '1rem 2rem',
        boxShadow: isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className="flex items-center justify-between gap-4 mx-auto" style={{ maxWidth: '1400px' }}>
        <Link to="/">
          <div style={{ height: '4rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src="/logo.png"
              alt="안전한줄 로고"
              style={{
                width: '48px',
                height: '48px',
                objectFit: 'contain'
              }}
            />
            <span className="text-2xl font-bold" style={{ color: '#10b981' }}>안전한줄</span>
          </div>
        </Link>
        <div className="flex gap-4">
          <div
            onClick={toggleFullscreen}
            style={{ height: '4rem', display: 'flex', alignItems: 'center' }}
            className="cursor-pointer transition hover:opacity-80"
            title="큰 화면 모드"
          >
            <span className="text-2xl">🖥️ 큰화면</span>
          </div>
          <div
            onClick={handleRandomClick}
            style={{ height: '4rem', display: 'flex', alignItems: 'center' }}
            className="cursor-pointer transition hover:opacity-80"
          >
            <span className="text-2xl">🔄 랜덤</span>
          </div>
          <Link to="/select">
            <div style={{ height: '4rem', display: 'flex', alignItems: 'center' }} className="cursor-pointer transition hover:opacity-80">
              <span className="text-2xl">📋 선택</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}


import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleRandomClick = () => {
    // 현재 홈 페이지에 있으면 강제로 리로드
    if (location.pathname === '/') {
      // URL에 타임스탬프를 추가하여 강제 리렌더링
      navigate('/?refresh=' + Date.now());
    } else {
      navigate('/');
    }
  };

  return (
    <div className="w-full p-4 mb-8 bg-gray-800 rounded-lg">
      <div className="flex items-center justify-between gap-4">
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
            onClick={handleRandomClick}
            style={{ height: '4rem', display: 'flex', alignItems: 'center' }}
            className="cursor-pointer transition"
          >
            <span className="text-2xl">🔄 랜덤</span>
          </div>
          <Link to="/select">
            <div style={{ height: '4rem', display: 'flex', alignItems: 'center' }} className="cursor-pointer transition">
              <span className="text-2xl">📋 선택</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}


import { useState, useEffect } from 'react';
import { posts } from '../data/posts';

export default function DevTools() {
  const [isOpen, setIsOpen] = useState(false);
  const [stats, setStats] = useState({
    totalPosts: 0,
    lastUpdate: new Date().toLocaleTimeString('ko-KR'),
  });

  useEffect(() => {
    setStats({
      totalPosts: posts.length,
      lastUpdate: new Date().toLocaleTimeString('ko-KR'),
    });
  }, []);

  // 개발 환경에서만 표시
  if (import.meta.env.PROD) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 9999,
    }}>
      {/* 토글 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        🛠️
      </button>

      {/* 개발자 도구 패널 */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '70px',
          right: '0',
          backgroundColor: '#1f2937',
          border: '2px solid #10b981',
          borderRadius: '12px',
          padding: '20px',
          minWidth: '300px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
          color: 'white',
        }}>
          <h3 style={{ 
            margin: '0 0 15px 0', 
            fontSize: '18px',
            borderBottom: '2px solid #10b981',
            paddingBottom: '10px',
          }}>
            🛠️ 개발자 도구
          </h3>

          <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
            <div style={{ marginBottom: '10px' }}>
              <strong>📊 데이터 통계</strong>
            </div>
            
            <div style={{ 
              backgroundColor: '#374151', 
              padding: '10px', 
              borderRadius: '6px',
              marginBottom: '10px',
            }}>
              <div>총 영상: <span style={{ color: '#10b981', fontWeight: 'bold' }}>{stats.totalPosts}개</span></div>
              <div>마지막 업데이트: <span style={{ color: '#60a5fa' }}>{stats.lastUpdate}</span></div>
            </div>

            <div style={{ marginBottom: '10px' }}>
              <strong>🔥 핫 리로딩</strong>
            </div>
            
            <div style={{ 
              backgroundColor: '#374151', 
              padding: '10px', 
              borderRadius: '6px',
              marginBottom: '10px',
            }}>
              <div style={{ color: '#10b981' }}>✅ 활성화됨</div>
              <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '5px' }}>
                파일 저장 시 자동 새로고침
              </div>
            </div>

            <div style={{ marginBottom: '10px' }}>
              <strong>⚡ 빠른 액션</strong>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={() => window.location.reload()}
                style={{
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  fontSize: '13px',
                }}
              >
                🔄 강제 새로고침
              </button>
              
              <button
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
                style={{
                  backgroundColor: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  fontSize: '13px',
                }}
              >
                🗑️ 캐시 삭제
              </button>
              
              <button
                onClick={() => {
                  console.log('Posts Data:', posts);
                  alert(`콘솔에 ${posts.length}개의 데이터를 출력했습니다.`);
                }}
                style={{
                  backgroundColor: '#8b5cf6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  fontSize: '13px',
                }}
              >
                📋 데이터 콘솔 출력
              </button>
            </div>
          </div>

          <div style={{ 
            marginTop: '15px', 
            paddingTop: '15px', 
            borderTop: '1px solid #374151',
            fontSize: '12px',
            color: '#9ca3af',
          }}>
            💡 Tip: 파일을 수정하고 저장하면 자동으로 반영됩니다!
          </div>
        </div>
      )}
    </div>
  );
}


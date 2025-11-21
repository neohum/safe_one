import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { posts } from '../data/posts';
import type { Post } from '../types/index';
import Header from '../components/Header';
import DateDisplay from '../components/DateDisplay';
import YoutubePlayer from '../components/YoutubePlayer';
import { findReplacementVideo, findAnyReplacementVideo } from '../utils/videoSelection';
import { useFullscreen } from '../contexts/FullscreenContext';

export default function Home() {
  const [currentPost, setCurrentPost] = useState<Post | null>(null);
  const [excludedIds, setExcludedIds] = useState<number[]>([]);
  const location = useLocation();
  const { isFullscreen, toggleFullscreen } = useFullscreen();

  // 랜덤 포스트 선택 (제외 목록 고려)
  const getRandomPost = (excludeIds: number[] = []) => {
    const availablePosts = posts.filter(post => !excludeIds.includes(post.id));

    if (availablePosts.length === 0) {
      // 모든 영상이 제외되었으면 제외 목록 초기화
      setExcludedIds([]);
      const randomIndex = Math.floor(Math.random() * posts.length);
      return posts[randomIndex];
    }

    const randomIndex = Math.floor(Math.random() * availablePosts.length);
    return availablePosts[randomIndex];
  };

  // 컴포넌트 마운트 시 또는 URL 변경 시 랜덤 포스트 선택
  useEffect(() => {
    setCurrentPost(getRandomPost(excludedIds));
  }, [location.search]); // URL의 쿼리 파라미터가 변경될 때마다 실행

  // ESC 키로 전체화면 나가기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, toggleFullscreen]);

  // 새로고침 버튼
  const handleRefresh = () => {
    setCurrentPost(getRandomPost(excludedIds));
  };

  // 영상 오류 발생 시 대체 영상 찾기 (최신 영상 우선)
  const handleVideoError = async (errorPost: Post) => {
    console.log('영상 오류 발생:', errorPost.contents);

    // 오류 발생한 영상을 제외 목록에 추가
    const newExcludedIds = [...excludedIds, errorPost.id];
    setExcludedIds(newExcludedIds);

    // 1. 같은 키워드의 최신 영상 찾기
    const replacementVideo = await findReplacementVideo(errorPost, posts, newExcludedIds);

    if (replacementVideo) {
      setCurrentPost(replacementVideo);
      return;
    }

    // 2. 같은 키워드가 없으면 아무 최신 영상이나 선택
    const anyVideo = await findAnyReplacementVideo(posts, newExcludedIds);

    if (anyVideo) {
      setCurrentPost(anyVideo);
    } else {
      // 모든 영상이 제외되었으면 제외 목록 초기화
      console.log('제외 목록 초기화');
      setExcludedIds([]);
      setCurrentPost(getRandomPost([]));
    }
  };

  if (!currentPost) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center min-h-screen" style={{ paddingTop: isFullscreen ? 0 : '6rem' }}>
          <p className="text-xl">로딩 중...</p>
        </div>
      </>
    );
  }

  // 전체화면 모드
  if (isFullscreen) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#111827',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '3rem 2rem 2rem 2rem',
          zIndex: 999,
          overflowY: 'auto',
        }}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFullscreen();
          }}
          style={{
            position: 'fixed',
            top: '2rem',
            right: '2rem',
            fontSize: '3rem',
            background: 'rgba(31, 41, 55, 0.8)',
            border: 'none',
            borderRadius: '50%',
            width: '4rem',
            height: '4rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            transition: 'all 0.3s',
            zIndex: 1001,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 1)';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.8)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          ✕
        </button>

        {/* 텍스트 */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 8rem)',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '2rem',
            marginTop: '2rem',
            lineHeight: 1.3,
            maxWidth: '90%',
            wordBreak: 'keep-all',
            overflowWrap: 'break-word',
          }}
        >
          {currentPost.contents}
        </h1>

        {/* 영상 */}
        {currentPost.url && (
          <div style={{ width: '85%', maxWidth: '1400px', flexShrink: 0 }}>
            <YoutubePlayer
              url={currentPost.url}
              post={currentPost}
              autoplay={true}
              height="60vh"
              onVideoError={handleVideoError}
            />
          </div>
        )}

        {/* 영상 바꾸기 버튼 */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleRefresh();
          }}
          style={{
            marginTop: '2rem',
            padding: '1rem 2rem',
            fontSize: '2rem',
            background: 'rgba(16, 185, 129, 0.9)',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            color: 'white',
            fontWeight: 'bold',
            transition: 'all 0.3s',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 1)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.9)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          🔄 다른 영상 보기
        </button>

        {/* 하단 안내 */}
        <p
          style={{
            marginTop: '2rem',
            marginBottom: '2rem',
            fontSize: '1.5rem',
            color: '#9ca3af',
            opacity: 0.7,
          }}
        >
          ESC 키를 누르면 나가기
        </p>
      </div>
    );
  }

  // 일반 모드
  return (
    <>
      <Header />
      <div className="flex flex-col items-center w-full mx-auto" style={{ paddingTop: '6rem' }}>
        <div className="w-full p-8">
          <div className="text-center">
            <DateDisplay />

            <div className="w-full p-6">
              <h1 className="mb-4 text-9xl font-bold">
                {currentPost.contents}
              </h1>

              {currentPost.url && (
                <div className="flex justify-center mt-8">
                  <div style={{ width: '80%' }}>
                    <YoutubePlayer
                      url={currentPost.url}
                      post={currentPost}
                      autoplay={true}
                      height="600px"
                      onVideoError={handleVideoError}
                    />
                  </div>
                </div>
              )}

              <div className="mt-8">
                <button onClick={handleRefresh}>
                  🔄 다른 영상 보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { posts } from '../data/posts';
import type { Post } from '../types/index';
import DateDisplay from '../components/DateDisplay';
import YoutubePlayer from '../components/YoutubePlayer';

export default function Home() {
  const [currentPost, setCurrentPost] = useState<Post | null>(null);
  const location = useLocation();

  // 랜덤 포스트 선택
  const getRandomPost = () => {
    const randomIndex = Math.floor(Math.random() * posts.length);
    return posts[randomIndex];
  };

  // 컴포넌트 마운트 시 또는 URL 변경 시 랜덤 포스트 선택
  useEffect(() => {
    setCurrentPost(getRandomPost());
  }, [location.search]); // URL의 쿼리 파라미터가 변경될 때마다 실행

  // 새로고침 버튼
  const handleRefresh = () => {
    setCurrentPost(getRandomPost());
  };

  if (!currentPost) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl">로딩 중...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full mx-auto">
      <div className="w-full p-8">
        <div className="text-center">
          <DateDisplay />

          <div className="w-full p-6">
            <h1 className="mb-4 text-6xl font-bold">
              {currentPost.contents}
            </h1>

            {currentPost.url && (
              <div className="flex justify-center mt-8">
                <div style={{ width: '50%' }}>
                  <YoutubePlayer url={currentPost.url} autoplay={true} height="600px" />
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
  );
}


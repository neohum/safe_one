import { useState } from 'react';
import { posts } from '../data/posts';
import { mainCategories, tagMapping } from '../data/tags';
import type { Post } from '../types/index';
import DateDisplay from '../components/DateDisplay';
import YoutubePlayer from '../components/YoutubePlayer';

export default function Select() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [showCategories, setShowCategories] = useState(false);

  // 검색 및 카테고리 필터링
  const filteredPosts = posts.filter((post) => {
    const searchLower = search.toLowerCase();
    const matchesSearch =
      post.key_words.toLowerCase().includes(searchLower) ||
      post.contents.toLowerCase().includes(searchLower) ||
      (post.channel_name && post.channel_name.toLowerCase().includes(searchLower));

    // 세부 태그를 대분류로 매핑
    const postCategory = tagMapping[post.key_words] || '';
    const matchesCategory = selectedCategory === '' || postCategory === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleSelectVideo = (post: Post) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen">
        <div className="w-full px-4 mx-auto" style={{ maxWidth: '1400px' }}>
          <div className="p-4">
            <div className="flex flex-col items-center">
              <DateDisplay />

              <div className="w-full p-6">
                <h1 className="mb-4 text-6xl font-bold text-center">
                  {selectedPost.contents}
                </h1>

                <div className="flex justify-center mt-8">
                  <YoutubePlayer url={selectedPost.url} autoplay={true} height="800px" />
                </div>

                <div className="mt-8 text-center">
                  <button onClick={handleBack} style={{ backgroundColor: '#4b5563' }}>
                    ← 목록으로 돌아가기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="w-full px-4 mx-auto" style={{ maxWidth: '1400px' }}>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full">
            <div className="flex flex-col items-center justify-center" style={{ minHeight: '80vh' }}>
              {/* 검색창 */}
              <div className="w-full" style={{ marginBottom: '36px' }}>
                <input
                  type="text"
                  placeholder="검색어를 입력하세요..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* 카테고리 필터 */}
              <div className="w-full mb-8">
                <div className="flex items-center mb-5" style={{ gap: '24px' }}>
                  <button
                    onClick={() => setShowCategories(!showCategories)}
                    style={{
                      padding: '12px 24px',
                      fontSize: '1rem',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: '#10b981',
                      color: 'white',
                      transition: 'all 0.2s',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#059669';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#10b981';
                    }}
                  >
                    <span>📂 카테고리 {showCategories ? '숨기기' : '보기'}</span>
                    <span style={{ fontSize: '0.8rem' }}>{showCategories ? '▲' : '▼'}</span>
                  </button>

                  {selectedCategory && (
                    <button
                      onClick={() => setSelectedCategory('')}
                      style={{
                        padding: '10px 20px',
                        fontSize: '0.875rem',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: '#374151',
                        color: 'white',
                        transition: 'all 0.2s',
                        fontWeight: 'bold'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#4b5563';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#374151';
                      }}
                    >
                      ✕ 필터 해제
                    </button>
                  )}

                  {selectedCategory && (
                    <span className="text-sm" style={{ color: '#10b981', fontWeight: 'bold' }}>
                      선택: {selectedCategory}
                    </span>
                  )}
                </div>

                {showCategories && (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '10px',
                    padding: '20px',
                    backgroundColor: '#1f2937',
                    borderRadius: '12px',
                    marginBottom: '10px'
                  }}>
                    {mainCategories.map((category) => {
                      const count = posts.filter(p => {
                        const postCategory = tagMapping[p.key_words] || '';
                        return postCategory === category;
                      }).length;

                      if (count === 0) return null;

                      return (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setShowCategories(false);
                          }}
                          style={{
                            padding: '16px 20px',
                            fontSize: '0.95rem',
                            borderRadius: '10px',
                            border: selectedCategory === category ? '3px solid #3b82f6' : '2px solid transparent',
                            cursor: 'pointer',
                            backgroundColor: selectedCategory === category ? '#1e40af' : '#374151',
                            color: 'white',
                            transition: 'all 0.3s',
                            fontWeight: selectedCategory === category ? 'bold' : 'normal',
                            boxShadow: selectedCategory === category ? '0 4px 12px rgba(59, 130, 246, 0.4)' : 'none',
                            transform: selectedCategory === category ? 'scale(1.05)' : 'scale(1)',
                            margin: '10px'
                          }}
                          onMouseEnter={(e) => {
                            if (selectedCategory !== category) {
                              e.currentTarget.style.backgroundColor = '#4b5563';
                              e.currentTarget.style.transform = 'scale(1.02)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (selectedCategory !== category) {
                              e.currentTarget.style.backgroundColor = '#374151';
                              e.currentTarget.style.transform = 'scale(1)';
                            }
                          }}
                        >
                          <div style={{ fontSize: '1.1rem', marginBottom: '6px' }}>
                            {category}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                            {count}개
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* 결과 개수 표시 */}
              <div className="w-full mb-4">
                <p className="text-sm" style={{ color: '#9ca3af' }}>
                  {filteredPosts.length}개의 영상
                </p>
              </div>

              {/* 영상 목록 */}
              <div className="grid w-full gap-4 grid-cols-3">
                {filteredPosts.map((post) => {
                  const postCategory = tagMapping[post.key_words] || post.key_words;

                  return (
                    <div
                      key={post.id}
                      onClick={() => handleSelectVideo(post)}
                      className="cursor-pointer p-4 bg-gray-800 hover:bg-gray-700 transition rounded-lg"
                    >
                      <div style={{ marginBottom: '10px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        <span style={{
                          fontSize: '0.75rem',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          backgroundColor: '#3b82f6',
                          color: 'white',
                          fontWeight: 'bold'
                        }}>
                          {postCategory}
                        </span>
                        <span style={{
                          fontSize: '0.7rem',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          backgroundColor: '#4b5563',
                          color: '#d1d5db'
                        }}>
                          {post.key_words}
                        </span>
                      </div>
                      <p className="text-gray-300" style={{ fontSize: '0.875rem' }}>
                        {post.contents}
                        <br />
                        <span style={{ fontSize: '0.75rem' }} className="text-gray-400">
                          (채널: {post.channel_name} | 플레이 타임: {post.play_time}분)
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>

              {filteredPosts.length === 0 && (
                <div className="mt-8 text-center">
                  <p className="text-gray-400">
                    검색 결과가 없습니다.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


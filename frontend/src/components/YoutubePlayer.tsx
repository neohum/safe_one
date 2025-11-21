import { useState, useEffect, useRef } from 'react';
import { getYoutubeVideoId, getYoutubeEmbedUrl } from '../utils/youtube';
import type { Post } from '../types';

interface YoutubePlayerProps {
  url: string;
  post?: Post;
  autoplay?: boolean;
  height?: string;
  onVideoError?: (post: Post) => void;
}

export default function YoutubePlayer({ url, post, autoplay = true, height = '600px', onVideoError }: YoutubePlayerProps) {
  const [videoError, setVideoError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const errorTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const checkIntervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const videoId = getYoutubeVideoId(url);

  // 영상 오류 감지 및 대체 영상 요청
  useEffect(() => {
    // URL이 변경되면 오류 상태 초기화
    setVideoError(false);
    setRetryCount(0);

    // 이전 타이머 정리
    if (errorTimeoutRef.current) {
      clearTimeout(errorTimeoutRef.current);
    }
    if (checkIntervalRef.current) {
      clearInterval(checkIntervalRef.current);
    }

    // 즉시 영상 확인 시작
    checkVideoAvailability();

    // 3초마다 영상 상태 확인 (최대 3회)
    let checkCount = 0;
    checkIntervalRef.current = setInterval(() => {
      checkCount++;
      checkVideoAvailability();

      if (checkCount >= 3) {
        if (checkIntervalRef.current) {
          clearInterval(checkIntervalRef.current);
        }
      }
    }, 3000);

    // 10초 후 최종 확인
    errorTimeoutRef.current = setTimeout(() => {
      checkVideoAvailability();
    }, 10000);

    return () => {
      if (errorTimeoutRef.current) {
        clearTimeout(errorTimeoutRef.current);
      }
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
    };
  }, [url]);

  const checkVideoAvailability = async () => {
    if (!videoId || !post || retryCount >= 1) return;

    try {
      // YouTube oEmbed API로 영상 존재 여부 확인
      const response = await fetch(
        `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
      );

      if (!response.ok) {
        // 영상이 존재하지 않거나 재생 불가 (비공개, 삭제됨, 지역 제한 등)
        console.log(`영상 재생 불가 (${response.status}):`, post.contents);
        handleVideoError('oEmbed API 오류');
      } else {
        // 응답이 성공이면 영상 정보 확인
        const data = await response.json();
        console.log('영상 확인 성공:', data.title);
      }
    } catch (error) {
      // 네트워크 오류 또는 영상 불가
      console.error('영상 확인 오류:', error);
      handleVideoError('네트워크 오류');
    }
  };

  const handleVideoError = (reason?: string) => {
    if (retryCount < 1 && post && onVideoError) {
      console.log(`영상 오류 처리 (${reason || '알 수 없음'}):`, post.contents);
      setVideoError(true);
      setRetryCount(prev => prev + 1);

      // 타이머 정리
      if (errorTimeoutRef.current) {
        clearTimeout(errorTimeoutRef.current);
      }
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }

      // 부모 컴포넌트에 오류 알림 (대체 영상 요청)
      setTimeout(() => {
        onVideoError(post);
      }, 1000);
    }
  };

  if (!videoId) {
    return (
      <div className="flex items-center justify-center p-8 bg-gray-800 rounded-lg">
        <p className="text-gray-400">유효하지 않은 YouTube URL입니다.</p>
      </div>
    );
  }

  const embedUrl = getYoutubeEmbedUrl(videoId, autoplay);

  return (
    <div className="w-full">
      {videoError && (
        <div className="mb-4 p-4 bg-yellow-900 bg-opacity-50 rounded-lg text-center">
          <p className="text-yellow-300">
            ⚠️ 영상을 불러올 수 없습니다. 다른 영상을 찾고 있습니다...
          </p>
        </div>
      )}

      <div style={{ height }}>
        <iframe
          ref={iframeRef}
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', height: '100%', borderRadius: '0.5rem' }}
          onError={() => handleVideoError()}
        />
      </div>
    </div>
  );
}


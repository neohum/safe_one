import type { Post } from '../types';
import { getYoutubeVideoId } from './youtube';

/**
 * 영상이 재생 가능한지 확인
 */
async function isVideoAvailable(post: Post): Promise<boolean> {
  const videoId = getYoutubeVideoId(post.url);
  
  if (!videoId) {
    return false;
  }

  try {
    const response = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
    );
    return response.ok;
  } catch (error) {
    return false;
  }
}

/**
 * 같은 키워드의 대체 영상 찾기 (최신 영상 우선)
 */
export async function findReplacementVideo(
  errorPost: Post,
  allPosts: Post[],
  excludedIds: number[]
): Promise<Post | null> {
  console.log(`대체 영상 검색 시작: ${errorPost.contents} (키워드: ${errorPost.key_words})`);

  // 1. 같은 키워드의 영상 필터링 (제외 목록 제외)
  const sameKeywordPosts = allPosts.filter(
    post => 
      post.key_words === errorPost.key_words && 
      !excludedIds.includes(post.id) &&
      post.id !== errorPost.id
  );

  if (sameKeywordPosts.length === 0) {
    console.log('같은 키워드의 영상이 없습니다.');
    return null;
  }

  console.log(`같은 키워드의 영상 ${sameKeywordPosts.length}개 발견`);

  // 2. 각 영상의 재생 가능 여부 확인
  const availableVideos: Post[] = [];
  
  for (const post of sameKeywordPosts) {
    const isAvailable = await isVideoAvailable(post);
    if (isAvailable) {
      availableVideos.push(post);
      console.log(`✓ 재생 가능: ${post.contents}`);
    } else {
      console.log(`✗ 재생 불가: ${post.contents}`);
    }
  }

  if (availableVideos.length === 0) {
    console.log('재생 가능한 영상이 없습니다.');
    return null;
  }

  // 3. ID가 높은 순으로 정렬 (최신 데이터일 가능성이 높음)
  availableVideos.sort((a, b) => b.id - a.id);

  const selectedVideo = availableVideos[0];
  console.log(`✅ 선택된 대체 영상: ${selectedVideo.contents} (ID: ${selectedVideo.id})`);

  return selectedVideo;
}

/**
 * 아무 영상이나 찾기 (최신 영상 우선)
 */
export async function findAnyReplacementVideo(
  allPosts: Post[],
  excludedIds: number[]
): Promise<Post | null> {
  console.log('아무 영상이나 검색 시작');

  // 제외 목록 제외
  const availablePosts = allPosts.filter(post => !excludedIds.includes(post.id));

  if (availablePosts.length === 0) {
    console.log('모든 영상이 제외되었습니다. 제외 목록을 초기화합니다.');
    return null;
  }

  // ID가 높은 순으로 정렬 (최신 데이터일 가능성이 높음)
  availablePosts.sort((a, b) => b.id - a.id);

  // 상위 10개 중에서 재생 가능한 영상 찾기
  const topPosts = availablePosts.slice(0, 10);

  for (const post of topPosts) {
    const isAvailable = await isVideoAvailable(post);
    if (isAvailable) {
      console.log(`✅ 선택된 영상: ${post.contents} (ID: ${post.id})`);
      return post;
    }
  }

  // 상위 10개에서 찾지 못하면 첫 번째 영상 반환
  console.log(`⚠️ 재생 가능한 영상을 찾지 못해 첫 번째 영상 반환: ${availablePosts[0].contents}`);
  return availablePosts[0];
}


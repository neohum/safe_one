// YouTube 영상 재생 가능 여부 확인 스크립트
const posts = require('./src/data/posts.ts');

// YouTube URL에서 비디오 ID 추출
function getYoutubeVideoId(url) {
  const pattern = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const matches = url.match(pattern);
  return matches ? matches[1] : null;
}

// 각 영상의 정보 출력
console.log('=== YouTube 영상 목록 ===\n');

posts.posts.forEach((post, index) => {
  const videoId = getYoutubeVideoId(post.url);
  console.log(`${index + 1}. [ID: ${post.id}] ${post.contents}`);
  console.log(`   채널: ${post.channel_name}`);
  console.log(`   URL: ${post.url}`);
  console.log(`   Video ID: ${videoId || 'N/A'}`);
  console.log('');
});

console.log(`\n총 ${posts.posts.length}개의 영상`);


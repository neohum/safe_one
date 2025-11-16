/**
 * YouTube URL에서 비디오 ID를 추출합니다.
 */
export function getYoutubeVideoId(url: string): string | null {
  const pattern = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const matches = url.match(pattern);
  return matches ? matches[1] : null;
}

/**
 * YouTube 비디오 ID로 임베드 URL을 생성합니다.
 */
export function getYoutubeEmbedUrl(videoId: string, autoplay: boolean = true): string {
  return `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&mute=0`;
}


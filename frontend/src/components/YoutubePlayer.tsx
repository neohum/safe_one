import { getYoutubeVideoId, getYoutubeEmbedUrl } from '../utils/youtube';

interface YoutubePlayerProps {
  url: string;
  autoplay?: boolean;
  height?: string;
}

export default function YoutubePlayer({ url, autoplay = true, height = '600px' }: YoutubePlayerProps) {
  const videoId = getYoutubeVideoId(url);

  if (!videoId) {
    return (
      <div className="flex items-center justify-center p-8 bg-gray-800 rounded-lg">
        <p className="text-gray-400">유효하지 않은 YouTube URL입니다.</p>
      </div>
    );
  }

  const embedUrl = getYoutubeEmbedUrl(videoId, autoplay);

  return (
    <div className="w-full" style={{ height }}>
      <iframe
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ width: '100%', height: '100%', borderRadius: '0.5rem' }}
      />
    </div>
  );
}


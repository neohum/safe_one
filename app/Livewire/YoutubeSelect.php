<?php

namespace App\Livewire;

use App\Models\Post;
use Livewire\Component;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;

class YoutubeSelect extends Component
{
    public ?string $currentUrl = '';
    public ?string $youtubeVideoId = '';
    public string $search = '';
    public Collection $loadedPosts;
    public ?Post $selectedPost = null;

    public function mount()
    {
        $this->loadedPosts = collect([]);
        $latestPost = Post::latest()->first();
        if ($latestPost && $latestPost->url) {
            $this->currentUrl = $latestPost->url;
            $this->youtubeVideoId = $this->getYoutubeVideoId($latestPost->url);
        }
        $this->loadPosts();
    }

    public function loadPosts()
    {
        $this->loadedPosts = Post::where(function ($query) {
            $query->where('key_words', 'like', '%' . $this->search . '%')
                  ->orWhere('contents', 'like', '%' . $this->search . '%')
                  ->orWhere('channel_name', 'like', '%' . $this->search . '%');
        })
        ->whereNotNull('url')
        ->get();

        foreach ($this->loadedPosts as $post) {
            if (!$post->channel_name) {
                $videoId = $this->getYoutubeVideoId($post->url);
                if ($videoId) {
                    $channelName = $this->fetchChannelNameFromApi($videoId);
                    $post->update(['channel_name' => $channelName]);
                }
            }
        }
    }

    private function fetchChannelNameFromApi(string $videoId): string
    {
        try {
            $response = Http::get('https://www.googleapis.com/youtube/v3/videos', [
                'key' => config('services.youtube.api_key'),
                'part' => 'snippet',
                'id' => $videoId,
            ]);

            if ($response->successful()) {
                $data = $response->json();
                if (!empty($data['items'])) {
                    return $data['items'][0]['snippet']['channelTitle'];
                }
            }
            return '채널명 없음';
        } catch (\Exception $e) {
            return '채널명 없음';
        }
    }

    public function updatingSearch()
    {
        $this->loadPosts();
    }

    public function selectVideo($url, $postId)
    {
        $this->currentUrl = $url;
        $this->youtubeVideoId = $this->getYoutubeVideoId($url);
        $this->selectedPost = Post::find($postId);
    }

    private function getYoutubeVideoId(string $url): ?string
    {
        $pattern = '/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/';
        if (preg_match($pattern, $url, $matches)) {
            return $matches[1];
        }
        return null;
    }

    public function render()
    {
        return view('livewire.youtube-select', [
            'posts' => $this->loadedPosts
        ]);
    }
}

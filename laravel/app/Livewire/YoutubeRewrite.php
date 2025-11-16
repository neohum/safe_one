<?php

namespace App\Livewire;

use Livewire\Component;

class YoutubeRewrite extends Component
{
    public ?string $currentUrl = '';
    public ?string $content = '';

    public function mount(?string $url = null)
    {
        if ($url) {
            // url이 이미 video ID인 경우
            if (preg_match('/^[a-zA-Z0-9_-]{11}$/', $url)) {
                $this->currentUrl = "https://www.youtube.com/watch?v=" . $url;
            } else {
                $this->currentUrl = $url;
            }
        }
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
        return view('livewire.youtube-rewrite', [
            'youtubeVideoId' => $this->getYoutubeVideoId($this->currentUrl),
            'currentUrl' => $this->currentUrl
        ]);
    }
}

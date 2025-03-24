<?php

namespace App\Livewire;

use App\Models\Post;
use Livewire\Component;
use Livewire\WithPagination;

use Embed\Embed;

class PostList extends Component
{
    use WithPagination;

    public string $search = '';
    public ?string $embedTitle = '';
    public ?string $embedDescription = '';
    public ?string $embedImage = '';
    public ?string $embedUrl = '';
    public ?string $youtubeVideoId = '';
    public ?string $currentUrl = '';
    public bool $showRewriteLink = false;

    public function updatedYoutubeVideoId($value)
    {
        $this->dispatch('youtube-id-updated', youtubeId: $value);
    }

    private function getYoutubeVideoId(string $url): ?string
    {
        $pattern = '/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/';
        if (preg_match($pattern, $url, $matches)) {
            return $matches[1];
        }
        return null;
    }

    public function mount(bool $showRewriteLink = false): void
    {
        $this->showRewriteLink = $showRewriteLink;
    }

    public function updatingSearch(): void
    {
        $this->resetPage();
    }

    public function render()
    {
        $posts = Post::where(function ($query) {
            $query->where('key_words', 'like', '%' . $this->search . '%')
                ->orWhere('contents', 'like', '%' . $this->search . '%');
        })->inRandomOrder()->paginate(1);



        if ($posts->isNotEmpty() && !empty($posts->first()->url)) {
            try {
                $embed = new Embed();
                $info = $embed->get($posts->first()->url);

                $this->embedTitle = (string) $info->title;
                $this->embedDescription = (string) $info->description;
                $this->embedImage = (string) $info->image;
                $this->embedUrl = (string) $info->url;
                $this->youtubeVideoId = $this->getYoutubeVideoId($posts->first()->url);
                $this->dispatch('youtube-id-updated', youtubeId: $this->youtubeVideoId);
            } catch (\Exception $e) {
                $this->embedTitle = '';
                $this->embedDescription = '';
                $this->embedImage = '';
                $this->embedUrl = $posts->first()->url;
                $this->youtubeVideoId = $this->getYoutubeVideoId($posts->first()->url);
                $this->dispatch('youtube-id-updated', youtubeId: $this->youtubeVideoId);
            }
        } else {
            $this->embedTitle = '';
            $this->embedDescription = '';
            $this->embedImage = '';
            $this->embedUrl = '';
            $this->youtubeVideoId = '';
        }

        return view('livewire.post-list', [
            'posts' => $posts,

            
        ]);
    }
}

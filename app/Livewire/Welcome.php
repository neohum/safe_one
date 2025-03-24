<?php

namespace App\Livewire;

use Livewire\Component;

class Welcome extends Component
{
    public ?string $youtubeVideoId = '';

    public function youtubeIdUpdated($youtubeId)
    {
        $this->youtubeVideoId = $youtubeId;
    }

    public function render()
    {
        return view('livewire.welcome-page');
    }

    protected function getListeners()
    {
        return [
            'youtube-id-updated' => 'youtubeIdUpdated',
        ];
    }
}

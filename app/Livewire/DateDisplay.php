<?php

namespace App\Livewire;

use Livewire\Component;
use Carbon\Carbon;

class DateDisplay extends Component
{
    public string $date;
    public string $weekday;

    public function mount(): void
    {
        $weekMap = [
            0 => '일요일',
            1 => '월요일',
            2 => '화요일',
            3 => '수요일',
            4 => '목요일',
            5 => '금요일',
            6 => '토요일',
        ];
        
        $dayOfTheWeek = Carbon::now()->dayOfWeek;
        $this->weekday = $weekMap[$dayOfTheWeek];
        $this->date = Carbon::now()->format('Y년 m월 d일');
    }

    public function render()
    {
        return view('livewire.date-display');
    }
}
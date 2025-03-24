<div class="flex flex-col items-center w-full mx-auto">
    <!-- 상단 로고 섹션 -->
    <div class="w-full mb-8">
        <div class="flex items-center justify-between gap-4">
            <a href="{{ route('index') }}" class="flex-shrink-0">
                <img src="{{ asset('image/home2.png') }}" alt="logo" class="object-contain h-16 px-4 mt-4" />
            </a>
            <div class="flex gap-4">
                <a href="{{ route('index') }}">
                    <img src="{{ asset('image/change2.png') }}" alt="change" class="object-contain h-16" />
                </a>
                <a href="{{ route('youtube-select') }}">
                    <img src="{{ asset('image/select2.png') }}" alt="select" class="object-contain h-16 transition-opacity cursor-pointer hover:opacity-80" />
                </a>
                <a href="{{ route('youtube-rewrite') }}?url={{ $youtubeVideoId }}" wire:navigate>
                    <img src="{{ asset('image/rewrite.png') }}" alt="rewrite" class="object-contain h-16 transition-opacity cursor-pointer hover:opacity-80" />
                </a>
            </div>
        </div>
    </div>

    <!-- 메인 컨텐츠 -->
    <div class="w-full p-8 bg-white shadow-lg dark:bg-zinc-900 rounded-xl">
        <div class="text-center">
            @livewire('post-list')
        </div>
    </div>

    <!-- 푸터 -->
    <div>
        <div class="mt-4 text-center">
            안전한줄.com<br>
            <a href="https://litt.ly/parkdh" target="_blank">기획 박대현</a> | 제작 민정일 |
            <br>
            <a href="https://open.kakao.com/o/gnvuquqe" target="_blank">안전한줄 오픈 채팅방</a>
        </div>
    </div>
</div>

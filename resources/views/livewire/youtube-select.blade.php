<div class="flex justify-center w-full">
    <div class="w-[150%] -ml-[25%]"> <!-- 전체 컨테이너를 150%로 확장하고 왼쪽으로 25% 이동 -->
        <div class="flex justify-center mb-8">
            <a href="{{ route('youtube-select') }}" class="text-2xl font-bold">새로고침</a>
        </div>

        @if($selectedPost)
            <div class="p-12 bg-white shadow-lg dark:bg-zinc-900 rounded-xl">
                <div class="flex flex-col items-center"> <!-- 내용 중앙 정렬을 위한 컨테이너 -->
                    <livewire:date-display />

                    <div class="w-full p-6 rounded-lg shadow-md bg-gray-50 dark:bg-zinc-800">
                        <h1 class="mb-2 text-[5.5rem] font-bold text-center">
                            {{ $selectedPost->contents }}
                        </h1>
                        @if($youtubeVideoId)
                            <div class="flex justify-center mt-4">
                                <div class="w-full" style="height: 600px;">
                                    <iframe
                                        src="https://www.youtube.com/embed/{{ $youtubeVideoId }}?autoplay=1&mute=0"
                                        frameborder="0"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                        class="w-full h-full rounded-lg"
                                    ></iframe>
                                </div>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        @else
            <div class="p-12 bg-white shadow-lg dark:bg-zinc-900 rounded-xl">
                <div class="mb-6">
                    <input
                        wire:model.live.debounce.300ms="search"
                        type="text"
                        placeholder="검색어를 입력하세요..."
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white"
                    />
                </div>

                <div class="grid grid-cols-3 gap-4">
                    @foreach($posts as $post)
                        <div
                            wire:key="post-{{ $post->id }}"
                            wire:click="selectVideo('{{ $post->url }}', {{ $post->id }})"
                            class="cursor-pointer p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors {{ $currentUrl === $post->url ? 'bg-gray-100 dark:bg-zinc-800 border-2 border-blue-500' : '' }}"
                        >
                            <p class="text-sm text-gray-600 dark:text-gray-400">
                                {{ $post->contents }}
                                <br>
                                <span class="text-xs">(채널: {{ $post->channel_name }} | 플레이 타임: {{ $post->play_time }}분)</span>
                            </p>
                        </div>
                    @endforeach
                </div>
            </div>
        @endif
    </div>
</div>

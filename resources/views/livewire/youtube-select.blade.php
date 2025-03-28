<div class="flex items-center justify-center w-full min-h-screen">
    <div class="w-[200%] -ml-[50%] px-4 mx-auto">
        @if($selectedPost)
            <div class="p-4 bg-white dark:bg-zinc-900">
                <div class="flex flex-col items-center">
                    <livewire:date-display />

                    <div class="w-full p-3 bg-white d lg:p-6 dark:bg-zinc-800">
                        <h1 class="mb-2 text-3xl lg:text-[5.5rem] font-bold text-center">
                            {{ $selectedPost->contents }}
                        </h1>
                        @if($youtubeVideoId)
                            <div class="flex justify-center mt-4">
                                <div class="w-full" style="height: 800px;">
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
            <div class="flex flex-col items-center justify-center">
                <div class="w-full bg-white dark:bg-zinc-900">
                    <div class="flex flex-col items-center justify-center min-h-[80vh]">
                        <div class="w-full max-w-4xl mb-6">
                            <input
                                wire:model.live.debounce.300ms="search"
                                type="text"
                                placeholder="검색어를 입력하세요..."
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white"
                            />
                        </div>

                        <div class="grid w-full grid-cols-1 gap-4 max-w-7xl md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                            @foreach($posts as $post)
                                <div
                                    wire:key="post-{{ $post->id }}"
                                    wire:click="selectVideo('{{ $post->url }}', {{ $post->id }})"
                                    class="cursor-pointer p-4 bg-white dark:bg-zinc-900 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors {{ $currentUrl === $post->url ? 'bg-gray-100 dark:bg-zinc-800' : ''}}"
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
                </div>
            </div>
        @endif
    </div>
</div>

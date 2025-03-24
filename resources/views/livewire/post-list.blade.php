<div class="flex flex-col items-center w-full">
    <livewire:date-display />

    @if($showRewriteLink)
        <a href="{{ route('youtube-rewrite') }}?url={{ $youtubeVideoId }}" wire:navigate>
            <img src="{{ asset('image/rewrite.png') }}" alt="rewrite" class="object-contain h-16 transition-opacity cursor-pointer hover:opacity-80" />
        </a>
    @else
        <div class="w-full space-y-4">
            @foreach($posts as $post)
            <div class="p-6 rounded-lg shadow-md bg-gray-50 dark:bg-zinc-800">
                <div class="mb-4">

                </div>
                <h1 class="mb-2 text-[5.5rem] font-bold">
                    {{ $post->contents }}
                </h1>
                @if($post->url)
                    <div class="flex justify-center mt-4">
                        @if($youtubeVideoId)
                            <div class="w-1/2" style="height: 600px;">
                                <div class="w-full h-full">
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
                @endif
            </div>
            @endforeach
        </div>
    @endif
</div>

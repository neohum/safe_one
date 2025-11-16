<div class="max-w-4xl mx-auto w-full">
    <div class="flex justify-between items-center mb-8">
        <a href="{{ route('index') }}" class="text-2xl font-bold">← 돌아가기</a>
    </div>

    <div class="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-8">
        @if($currentUrl)
            <div class="mb-8">
                <div class="aspect-w-16 aspect-h-9">
                    <iframe
                        src="https://www.youtube.com/embed/{{ $this->getYoutubeVideoId($currentUrl) }}"
                        frameborder="0"
                        width="560"
                        height="315"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        class="w-full h-[315px] rounded-lg"
                    ></iframe>
                </div>
            </div>
        @endif

        <div class="mt-8" id="summernote-wrapper">
            <textarea id="summernote" wire:model="content"></textarea>
        </div>
    </div>

    <script>
        function initSummernote() {
            if ($('#summernote').length) {
                if ($('#summernote').data('summernote')) {
                    $('#summernote').summernote('destroy');
                }

                $('#summernote').summernote({
                    placeholder: '내용을 입력하세요',
                    tabsize: 2,
                    height: 300,
                    toolbar: [
                        ['style', ['style']],
                        ['font', ['bold', 'underline', 'clear']],
                        ['color', ['color']],
                        ['para', ['ul', 'ol', 'paragraph']],
                    ],
                    styleTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
                    callbacks: {
                        onInit: function() {
                            // 초기화 직후 H1 스타일 적용
                            $('#summernote').summernote('formatH1');
                        },
                         

                    }
                });

                // 에디터가 비어있을 때만 H1 스타일 적용
                if (!$('#summernote').summernote('code')) {
                    $('#summernote').summernote('formatH1');
                }
            }
        }

        // Livewire 페이지 로드/네비게이션 이벤트
        document.addEventListener('livewire:navigated', initSummernote);
        document.addEventListener('livewire:load', initSummernote);

        // DOM이 로드된 후 초기화
        document.addEventListener('DOMContentLoaded', initSummernote);
    </script>
</div>

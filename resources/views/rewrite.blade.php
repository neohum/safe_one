<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>안전한줄</title>

    <!-- jQuery는 가장 먼저 로드 -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

    <!-- Summernote CSS & JS -->
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>

    <!-- 기존 스타일 -->
    <style>
        /* Summernote 스타일 커스터마이징 */
        #summernote-wrapper .note-editor {
            background-color: white;
            border-radius: 0.5rem;
            overflow: hidden;
        }
        #summernote-wrapper .note-editing-area {
            background-color: white;
        }
        #summernote-wrapper .note-editable {
            font-size: 48px !important; /* 기본 글자 크기 증가 */
        }
        #summernote-wrapper .note-editable h1 {
            font-size: 64px !important; /* H1 태그 글자 크기 */
        }
        #summernote-wrapper .note-editable p {
            font-size: 48px !important; /* 일반 문단 글자 크기 */
        }
        #summernote-wrapper .note-toolbar {
            background-color: #f8f9fa;
            border-bottom: 1px solid #dee2e6;
        }
        #summernote-wrapper .note-btn {
            background-color: transparent;
            border: 1px solid #dee2e6;
            padding: 0.375rem 0.75rem;
        }
        #summernote-wrapper .note-btn:hover {
            background-color: #e9ecef;
        }

        /* 다크 모드 지원 */
        .dark #summernote-wrapper .note-editor {
            background-color: #27272a;
            border-color: #3f3f46;
        }
        .dark #summernote-wrapper .note-editing-area,
        .dark #summernote-wrapper .note-toolbar {
            background-color: #27272a;
            border-color: #3f3f46;
        }
        .dark #summernote-wrapper .note-editable {
            background-color: #27272a;
            color: white;
        }
        .dark #summernote-wrapper .note-btn {
            background-color: #3f3f46;
            border-color: #52525b;
            color: white;
        }
        .dark #summernote-wrapper .note-btn:hover {
            background-color: #52525b;
        }
    </style>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @livewireStyles
</head>
<body class="bg-[#FDFDFC] dark:bg-[#0a0a0a] text-[#1b1b18]">
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
                        <img src="{{ asset('image/select2.png') }}" alt="select" class="object-contain h-16" />
                    </a>
                </div>
            </div>
        </div>

        <!-- 메인 컨텐츠 -->
        @php
            $youtubeUrl = request()->get('url');
        @endphp
        <div id="summernote-wrapper" class="w-full">
            @livewire('youtube-rewrite', ['url' => $youtubeUrl])
        </div>

        <div>
            <div class="mt-4 text-center">
                안전한줄.com<br>
                <a href="https://litt.ly/parkdh" target="_blank">기획 박대현</a> | 제작 민정일 |
                <a href="https://www.koreateachers.org/" target="_blank">서버 지원 실천교육교사모임</a><br>
                <a href="https://open.kakao.com/o/gnvuquqe" target="_blank">안전한줄 오픈 채팅방</a>
            </div>
        </div>
    </div>
    @livewireScripts
</body>
</html>

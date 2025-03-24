<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>안전한줄</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        @vite(['resources/css/app.css', 'resources/js/app.js'])
        @livewireScripts()
    </head>
    <body class="bg-[#FDFDFC] dark:bg-[#0a0a0a] text-[#1b1b18] min-h-screen flex flex-col p-6 lg:p-8">
        <div class="flex flex-col w-full">
                <div class="flex justify-between">
                    <div class="flex-none"> <!-- 왼쪽 이미지를 위한 컨테이너 -->
                        <a href="{{ route('index') }}" class="flex-shrink-0">
                            <img src="{{ asset('image/home2.png') }}" alt="logo" class="object-contain h-16" />
                        </a>
                    </div>
                    <div class="flex gap-4 ml-auto"> <!-- 오른쪽 이미지들을 위한 컨테이너 -->
                        <a href="{{ route('index') }}">
                            <img src="{{ asset('image/change2.png') }}" alt="change" class="object-contain h-16" />
                        </a>
                        <a href="{{ route('youtube-select') }}">
                            <img src="{{ asset('image/select2.png') }}" alt="select" class="object-contain h-16 transition-opacity cursor-pointer hover:opacity-80" />
                        </a>
                    </div>
                </div>
            </div>
        <div class="flex flex-col items-center w-full max-w-2xl mx-auto">
            <!-- 상단 로고 섹션 -->


            <!-- 메인 컨텐츠 -->
            <div class="w-full mt-8">
                @livewire('youtube-select')
            </div>

            <!-- 푸터 -->
            <div class="mt-8 text-center">
                안전한줄.com<br>
                <a href="https://litt.ly/parkdh" target="_blank">기획 박대현</a> | 제작 민정일 |
                <a href="https://www.koreateachers.org/" target="_blank">서버 지원 실천교육교사모임</a><br>
                <a href="https://open.kakao.com/o/gnvuquqe" target="_blank">안전한줄 오픈 채팅방</a>
            </div>
        </div>
        @livewireStyles()
    </body>
</html>

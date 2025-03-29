<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>안전한줄 - PC 전용</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="bg-[#FDFDFC] dark:bg-[#0a0a0a] text-[#1b1b18] min-h-screen">
        <div class="flex items-center justify-center min-h-screen p-4">
            <div class="w-full max-w-md p-8 text-center bg-white rounded-lg shadow-lg dark:bg-zinc-900">
                <!-- 로고 -->
                <div class="mb-8">
                    <img src="{{ asset('image/home2.png') }}" alt="logo"
                         class="object-contain h-16 mx-auto" />
                </div>

                <!-- 메시지 -->
                <div class="space-y-4">
                    <h1 class="text-2xl font-bold text-red-600 dark:text-red-400">
                        PC 전용 서비스
                    </h1>
                    <p class="text-lg text-gray-700 dark:text-gray-300">
                        이 홈페이지는 PC에 최적화되어<br>
                        모바일에서는 볼 수 없습니다.<br>
                        PC로 접속 부탁드립니다.
                    </p>
                </div>

                <!-- 푸터 -->
                <div class="mt-12 text-sm text-gray-600 dark:text-gray-400">
                    <p class="mb-2">안전한줄.com</p>
                    <p class="mb-2">
                        <a href="https://litt.ly/parkdh" target="_blank"
                           class="hover:underline">기획 박대현</a> |
                        <span>제작 민정일</span>
                    </p>
                    <a href="https://open.kakao.com/o/gnvuquqe" target="_blank"
                       class="hover:underline">안전한줄 오픈 채팅방</a>
                </div>
            </div>
        </div>
    </body>
</html>

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
        <div class="w-full p-4 mb-8 bg-white dark:bg-zinc-900">
            <div class="flex items-center justify-between gap-4">
                <a href="{{ route('index') }}" class="flex-shrink-0">
                    <img src="{{ asset('image/home2.png') }}" alt="logo" class="object-contain h-16" />
                </a>
                <div class="flex gap-4">
                    <a href="{{ route('index') }}">
                        <img src="{{ asset('image/change2.png') }}" alt="change" class="object-contain h-16" />
                    </a>
                    <a href="{{ route('youtube-select') }}">
                        <img src="{{ asset('image/select2.png') }}" alt="select" class="object-contain h-16 transition-opacity cursor-pointer hover:opacity-80" />
                    </a>
                </div>
            </div>
        </div>
        @livewire('welcome')
    </body>
</html>

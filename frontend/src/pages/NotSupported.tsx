export default function NotSupported() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-zinc-900">
      <div className="p-8 text-center bg-white dark:bg-zinc-800 rounded-lg shadow-lg max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
          📱 모바일 미지원
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          이 서비스는 현재 데스크톱 환경에서만 이용 가능합니다.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          PC나 태블릿에서 접속해 주세요.
        </p>
      </div>
    </div>
  );
}


<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class PostController extends Controller
{
    /**
     * Display a listing of posts.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Post::query();

        // 검색 기능
        if ($request->has('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                $q->where('key_words', 'like', "%{$search}%")
                  ->orWhere('contents', 'like', "%{$search}%")
                  ->orWhere('channel_name', 'like', "%{$search}%");
            });
        }

        // 랜덤 정렬 또는 일반 정렬
        if ($request->input('random') === 'true') {
            $query->inRandomOrder();
        }

        $posts = $query->whereNotNull('url')->get();

        return response()->json([
            'success' => true,
            'data' => $posts
        ]);
    }

    /**
     * Display a random post.
     */
    public function random(Request $request): JsonResponse
    {
        $query = Post::query();

        // 검색 기능
        if ($request->has('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                $q->where('key_words', 'like', "%{$search}%")
                  ->orWhere('contents', 'like', "%{$search}%");
            });
        }

        $post = $query->whereNotNull('url')->inRandomOrder()->first();

        if (!$post) {
            return response()->json([
                'success' => false,
                'message' => 'No posts found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $post
        ]);
    }

    /**
     * Display the specified post.
     */
    public function show(string $id): JsonResponse
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json([
                'success' => false,
                'message' => 'Post not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $post
        ]);
    }
}


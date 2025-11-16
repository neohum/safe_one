<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use Illuminate\Http\JsonResponse;

class TagController extends Controller
{
    /**
     * Display a listing of tags.
     */
    public function index(): JsonResponse
    {
        $tags = Tag::all();

        return response()->json([
            'success' => true,
            'data' => $tags
        ]);
    }

    /**
     * Display the specified tag.
     */
    public function show(string $id): JsonResponse
    {
        $tag = Tag::find($id);

        if (!$tag) {
            return response()->json([
                'success' => false,
                'message' => 'Tag not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $tag
        ]);
    }
}


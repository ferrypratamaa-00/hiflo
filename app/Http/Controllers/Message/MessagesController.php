<?php

namespace App\Http\Controllers\Message;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MessagesController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('Chat/ChatList', [
            'status' => session('status'),
        ]);
    }
}

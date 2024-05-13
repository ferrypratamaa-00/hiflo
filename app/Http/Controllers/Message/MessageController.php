<?php

namespace App\Http\Controllers\Message;

use App\Http\Controllers\Controller;
use App\Models\Conversation;
use App\Models\Message;
use App\Models\Notification;
use App\Models\Participant;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MessageController extends Controller
{
    public function index(Request $request): Response
    {
        $user = $request->user();

        $queryConversational = function ($query) use ($user) {
            $query->where('user_id', $user->id);
        };

        $queryLastMessage = function ($query) {
            $query->orderBy('created_at', 'desc')->take(1);
        };

        $conversations = Conversation::whereHas('participants', $queryConversational)->select('id', 'type', 'title')
            ->with([
                "messages.user:id,name",
                'messages' => $queryLastMessage
            ])->get();

        return Inertia::render('Chat/ChatList', [
            'status' => session('status'),
            'conversations' => $conversations
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */

    //function 1
    public function show(Request $request, $id): Response
    {
        $user = $request->user();

        $messages = Message::where("conversation_id", $id)->get();
        $participants = Conversation::where("id", $id)
            ->with([
                "participants:id,conversation_id,user_id",
                "users:id,name"
            ])->get();

        return Inertia::render('Chat/ChatRoom', [
            'status' => session('status'),
            'messages' => $messages,
            'participants' => $participants
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Message $messages)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Message $messages)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Message $messages)
    {
        //
    }
}

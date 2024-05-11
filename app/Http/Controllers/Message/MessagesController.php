<?php

namespace App\Http\Controllers\Message;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MessagesController extends Controller
{
    public function index(): Response
    {

        $messageList = [
            [
                "id" => "001",
                "name" => "John Doe",
                "photo" => asset("img/users/messages-3.jpg"),
                "message" => "Hi, how are you?",
                "sentAt" => "2024-05-11 09:30:00"
            ],
            [
                "id" => "002",
                "name" => "Jane Smith",
                "photo" => asset("img/users/messages-2.jpg"),
                "message" => "Have you had your meal?",
                "sentAt" => "2024-05-11 10:15:00"
            ],
            [
                "id" => "003",
                "name" => "David Brown",
                "photo" => asset("img/users/messages-3.jpg"),
                "message" => "Let's meet at the cafe later this evening.",
                "sentAt" => "2024-05-11 11:00:00"
            ],
            [
                "id" => "004",
                "name" => "Emily Johnson",
                "photo" => asset("img/users/messages-1.jpg"),
                "message" => "Please review the document attached.",
                "sentAt" => "2024-05-11 11:30:00"
            ],
            [
                "id" => "005",
                "name" => "Michael White",
                "photo" => asset("img/users/messages-4.jpg"),
                "message" => "Happy birthday! 🎉",
                "sentAt" => "2024-05-11 12:00:00"
            ],
            [
                "id" => "006",
                "name" => "Sarah Wilson",
                "photo" => asset("img/users/messages-1.jpg"),
                "message" => "Don't forget the meeting tomorrow at 10 AM.",
                "sentAt" => "2024-05-11 12:20:00"
            ],
            [
                "id" => "007",
                "name" => "Alex Taylor",
                "photo" => asset("img/users/messages-2.jpg"),
                "message" => "Please bring an umbrella, it's cloudy.",
                "sentAt" => "2024-05-11 12:45:00"
            ],
            [
                "id" => "008",
                "name" => "Daniel Lee",
                "photo" => asset("img/users/messages-4.jpg"),
                "message" => "Thank you for your hard work!",
                "sentAt" => "2024-05-11 13:30:00"
            ],
            [
                "id" => "009",
                "name" => "Olivia Martinez",
                "photo" => asset("img/users/messages-1.jpg"),
                "message" => "Have you sent the report?",
                "sentAt" => "2024-05-11 13:45:00"
            ],
            [
                "id" => "010",
                "name" => "Sophia Garcia",
                "photo" => asset("img/users/messages-1.jpg"),
                "message" => "Sorry, I'm running late.",
                "sentAt" => "2024-05-11 14:00:00"
            ]
        ];

        usort($messageList, function ($a, $b) {
            if ($a["sentAt"] == $b["sentAt"]) return 0;
            return ($a["sentAt"] > $b["sentAt"]) ? -1 : 1;
        });

        return Inertia::render('Chat/ChatList', [
            'status' => session('status'),
            'messageList' => $messageList
        ]);
    }
}

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";

dayjs.extend(relativeTime);

export default function ChatBubble({ messages, auth }) {
    const { id, user_id, media_url, message, type, created_at } = messages;
    const isOdd = user_id === auth.user.id ? true : false;

    return (
        <div
            className={`border w-fit px-4 py-2 mb-3 shadow ${
                isOdd
                    ? " rounded-se-2xl rounded-s-2xl bg-primary-100  ml-auto"
                    : "border-gray-100 bg-gray-50 rounded-ss-2xl rounded-e-2xl"
            }`}
        >
            <div className="text-dark w-full">{message}</div>
            <div className="w-full text-end">
                <time className="text-xs text-dark-400">
                    {dayjs(created_at).format("H.mm")}
                </time>
            </div>
        </div>
    );
}

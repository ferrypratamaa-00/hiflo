import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "@inertiajs/react";
import photo from "/public/img/users/messages-1.jpg";

dayjs.extend(relativeTime);

export default function ChatBox({ conversations }) {
    const data = {
        id: conversations.id,
        type: conversations.type,
        title: conversations.title,
        name: conversations.messages[0].user.name,
        message: conversations.messages[0].message,
        sentAt: conversations.messages[0].created_at,
    };

    return (
        <Link href={`/messages/${data.id}`}>
            <div className="flex flex-row items-center justify-between gap-2 px-4 py-2 mb-4">
                <div className="flex-shrink-0 h-12 w-12">
                    <img
                        src={photo}
                        alt="photo"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
                <div className="flex flex-col w-full ps-1">
                    <div className="flex flex-row justify-between">
                        <h5 className="font-semibold">
                            {data.type === "single" ? data.name : data.title}
                        </h5>
                        <time className="text-sm text-primary">
                            {dayjs(data.sentAt).fromNow()}
                        </time>
                    </div>
                    <div className="rounded-lg px-1">
                        <p className="tex-sm line-clamp-1">
                            {data.type !== "single" && data.name + " : "}
                            {data.message}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

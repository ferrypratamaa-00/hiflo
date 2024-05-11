import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "@inertiajs/react";

dayjs.extend(relativeTime);

export default function ChatBox(props) {
    const { id, name, photo, message, sentAt } = props;
    return (
        <Link href={`/messages/${id}`}>
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
                        <h5 className="font-semibold">{name}</h5>
                        <time className="text-sm text-primary">
                            {dayjs(sentAt).fromNow()}
                        </time>
                    </div>
                    <div className="rounded-lg px-1">
                        <p className="tex-sm line-clamp-1">{message}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

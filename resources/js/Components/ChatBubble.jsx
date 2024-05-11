import React from "react";

export default function ChatBubble() {
    return (
        <div className="border px-4 py-2 mb-3 shadow even:rounded-ss-2xl even:rounded-e-2xl even:bg-primary-100 odd:border-gray-100 odd:bg-gray-50 odd:rounded-se-2xl odd:rounded-s-2xl">
            <div className="text-dark w-full">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
                molestiae! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Non, culpa?
            </div>
            <div className="w-full text-end">
                <time className="text-xs text-dark-400">19.20</time>
            </div>
        </div>
    );
}

import React from "react";
import ChatBubble from "@/Components/ChatBubble";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

export default function ChatRoom({ auth, messages, participants }) {
    console.log(participants);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="ChatList" />
            <div id="chatrom" className="flex flex-col px-4">
                {messages.map((message) => (
                    <ChatBubble
                        key={message.id}
                        messages={message}
                        auth={auth}
                    />
                ))}
            </div>
            <div className="h-16"></div>
            <div className="w-full fixed bottom-0 h-16 bg-white pt-2">
                <div className="bottom-0 w-full flex flex-row gap-x-2 px-4">
                    <div className="flex justify-between border rounded-full bg-white border-gray-100 shadow p-1 w-full">
                        <TextInput
                            type="text"
                            id="website-admin"
                            placeholder="Ketik pesan ..."
                            className="border-0 shadow-none rounded-s-full"
                        />
                        <span className="inline-flex items-center px-3 text-sm text-primary-400 border-0 rounded-s-0 rounded-e-full  dark:text-gray-200">
                            <FontAwesomeIcon icon={["fas", "paperclip"]} />
                        </span>
                    </div>
                    <PrimaryButton className="">
                        <FontAwesomeIcon
                            icon={["fas", "reply"]}
                            className="transform rotate-45"
                        />
                    </PrimaryButton>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

import ChatBox from "@/Components/ChatBox";
import FloatingButton from "@/Components/FloatingButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head } from "@inertiajs/react";

export default function ChatList({ auth, conversations }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="ChatList" />
            <div id="chat-box" className="mt-2 flex flex-col">
                {conversations.map((conversation) => (
                    <ChatBox
                        key={conversation.id}
                        conversations={conversation}
                    />
                ))}
            </div>
            <FloatingButton className="h-14 w-14 right-5 bottom-5">
                <FontAwesomeIcon icon={["fas", "comments"]} size="xl" />
            </FloatingButton>
        </AuthenticatedLayout>
    );
}

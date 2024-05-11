import ChatBox from "@/Components/ChatBox";
import FloatingButton from "@/Components/FloatingButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head } from "@inertiajs/react";

export default function ChatList({ auth, messageList }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="ChatList" />
            <div id="chat-box" className="mt-2 flex flex-col">
                {messageList.map((message) => (
                    <ChatBox {...message} />
                ))}
            </div>
            <FloatingButton className="h-14 w-14">
                <FontAwesomeIcon icon={["fas", "comments"]} size="xl" />
            </FloatingButton>
        </AuthenticatedLayout>
    );
}

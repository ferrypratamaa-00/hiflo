import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function ChatList({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="ChatList" />
        </AuthenticatedLayout>
    );
}

import GuestLayout from "@/Layouts/GuestLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <GuestLayout>
            <Head title="Email Verification" />

            <div className="mb-4 text-center text-dark dark:text-light">
                <h5 className="mb-1 text-2xl font-bold text-primary">
                    Terima kasih sudah mendaftar!
                </h5>
                <p className="text-primary-600">
                    Sebelum memulai, bisakah Anda memverifikasi alamat email
                    Anda dengan mengklik tautan yang baru saja kami kirimkan
                    melalui email? Jika Anda tidak menerima email tersebut, kami
                    dengan senang hati akan mengirimkan yang lain.
                </p>
            </div>
            {status === "verification-link-sent" && (
                <div className="mb-4 font-medium text-sm text-success">
                    Tautan verifikasi baru telah dikirim ke alamat email yang
                    Anda berikan saat pendaftaran.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <PrimaryButton disabled={processing}>
                        Kirim Ulang verifikasi email
                    </PrimaryButton>

                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="underline text-sm text-dark-600 hover:text-dark-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Keluar
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}

import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="mb-4 text-center text-dark dark:text-light">
                <h5 className="mb-1 text-2xl font-bold text-primary">
                    Lupa Kata sandi anda ?
                </h5>
                <p className="text-primary-600">
                    Silakan masukkan alamat email Anda, dan kami akan
                    mengirimkan tautan untuk membuat kata sandi baru.
                </p>
            </div>

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    placeholder={"Masukan alamat email"}
                    onChange={(e) => setData("email", e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton
                        className="w-full flex justify-center"
                        disabled={processing}
                    >
                        <FontAwesomeIcon
                            icon={["fas", "paper-plane"]}
                            className="me-2"
                        />{" "}
                        Kirim
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}

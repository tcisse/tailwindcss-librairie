import { Input, Link, PrimaryButton } from "../../../components/onesine/utils";
import AuthLayout from "../../../layouts/onesine/AuthLayout";

const UpdatePasswordOne = () => {
    return (
        <AuthLayout
            title={
                <>
                    Welcome to <br /> our community
                </>
            }
        >
            <h3 className="text-center text-xl font-semibold text-gray-700">Update password</h3>
            <p className="text-center text-sm mt-2 mb-10">
                Enter and confirm the new password to make the change.
            </p>

            <form className="space-y-5">
                <div>
                    <Input
                        label={"New password"}
                        id="new_password"
                        type="password"
                        placeholder="Enter new password"
                    />
                </div>

                <div>
                    <Input
                        label={"Confirm password"}
                        id="confirm_password"
                        type="password"
                        placeholder="Confirm password"
                    />
                </div>

                <PrimaryButton>Update Password</PrimaryButton>

                <p className="text-sm text-center">
                    <Link href="/sign-in-one">Back to Login</Link>
                </p>
            </form>
        </AuthLayout>
    );
};

export default UpdatePasswordOne;

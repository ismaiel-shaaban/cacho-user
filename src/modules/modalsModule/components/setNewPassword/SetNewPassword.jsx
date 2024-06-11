import InputPassword from "@/components/sheared/inputPassword/InputPassword";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { strings } from "@/utilis/Localization";

const SetNewPassword = ({ code, email }) => {
    const router = useRouter();
    const [password, setPassword] = useState({ value: "", isValid: false });
    const [confirmPassword, setConfirmPassword] = useState({ value: "", isValid: false });
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [passwordChangeSuccess, setPasswordChangeSuccess] = useState(false);

    useEffect(() => {
        if (password.value === confirmPassword.value && password.isValid && confirmPassword.isValid) {
            setIsPasswordValid(true);
        } else {
            setIsPasswordValid(false);
        }
    }, [password, confirmPassword]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const req = await fetch("https://cachooapp.com/api/customer/auth/password/reset", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "password": password.value,
                "password_confirmation": confirmPassword.value,
                "code": code,
                "username": email
            })
        })

        const res = await req.json();
        if (res.code === 200) {
            setPasswordChangeSuccess(true);
            setTimeout(() => {
                router.reload()
            }, 400)
        } else {
            setErrorMessage(`${strings.SomethingWrong}`);
        }

    }

    return (
        <div className="pt-14 px-[20px] pb-6">
            <div className="flex justify-center">
                <h2 className="text-2xl font-medium">Set a New Password</h2>
            </div>
            <form>
                <div className="flex flex-col justify-center gap-3 mx-auto mt-[30px] md:w-1/2">
                    <InputPassword label={strings.NewPassword} placeholder={strings.EnterYourNewPassword}
                        onPasswordChange={(value, isValid) => setPassword({ value, isValid })} />
                    <InputPassword label={strings.ConfirmPassword} placeholder={strings.ConfirmPassword}
                        onPasswordChange={(value, isValid) => setConfirmPassword({ value, isValid })} />
                </div>
                <div className="flex flex-col gap-3 justify-center mt-8 mx-auto md:w-1/2">
                    <Button size={"lg"} onClick={handleSubmit} className={`w-full bg-[--primary-color] text-white`}
                        isDisabled={!isPasswordValid}>
                        {strings.SetNewPassword}
                    </Button>
                    {passwordChangeSuccess && <p className={"text-tiny text-success"}>{strings.PasswordChangeSuccessfully}</p>}
                    {errorMessage && <p className="text-tiny text-danger">{errorMessage}</p>}
                </div>
            </form>

        </div>
    );
};

export default SetNewPassword;

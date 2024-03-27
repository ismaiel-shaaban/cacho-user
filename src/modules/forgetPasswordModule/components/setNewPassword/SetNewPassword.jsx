import InputPassword from "@/components/sheared/inputPassword/InputPassword";
import {useEffect, useState} from "react";
import { Button } from "@nextui-org/react";

const SetNewPassword = () => {
    const [password, setPassword] = useState({ value: "", isValid: false });
    const [confirmPassword, setConfirmPassword] = useState({ value: "", isValid: false });
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    useEffect(() => {
        if (password.value === confirmPassword.value && password.isValid && confirmPassword.isValid) {
            setIsPasswordValid(true);
        } else {
            setIsPasswordValid(false);
        }
    }, [ password, confirmPassword]);

    return (
        <div className="h-[calc(100vh-64px)] pt-14 px-[20px] md:pt-[75px] md:px-[95px] bg-white">
            <div className="flex justify-center">
                <h2 className="text-2xl font-medium">Set a New Password</h2>
            </div>
                <form>
            <div className="flex flex-col justify-center gap-3 mx-auto mt-[30px] md:w-1/2">
                    <InputPassword label={"New Password"} placeholder={"Enter your new password"}
                                   onPasswordChange={(value, isValid) => setPassword({ value, isValid })} />
                    <InputPassword label={"Confirm Password"} placeholder={"Confirm your new password"}
                                   onPasswordChange={(value, isValid) => setConfirmPassword({ value, isValid })} />
            </div>
                </form>
            <div className="flex justify-center mt-8 mx-auto md:w-1/2">
                <Button size={"lg"} className={`w-full bg-[--primary-color] text-white`} isDisabled={!isPasswordValid}>
                    Set New Password
                </Button>
            </div>
        </div>
    );
};

export default SetNewPassword;

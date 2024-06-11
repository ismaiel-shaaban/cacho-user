import Image from "next/image";
import { useState } from "react";
import InputPassword from "@/components/sheared/inputPassword/InputPassword";
import ChangePasswordImage from "../../../../../../public/changePassword.svg"
import { Button } from "@nextui-org/react";
import { strings } from "@/utilis/Localization";
import { getCookie } from "cookies-next";

const ChangePasswordContent = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        oldPassword: "", newPassword: "", confirmPassword: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = getCookie("token")
        setIsLoading(true)
        const req = await fetch("https://cachooapp.com/api/customer/profile", {
            method: "POST", headers: {
                'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`
            }, body: JSON.stringify({
                oldPassword: formData.oldPassword,
                newPassword: formData.newPassword,
                confirmPassword: formData.confirmPassword,
            })
        })
        const res = await req.json()
        if (res.code === 200) {
            setIsSuccess(true)
        } else {
            setError(strings.SomethingWrong)
        }
        setIsLoading(false)
    }
    return (<div className="flex items-center flex-col p-2 md:flex-row md:gap-10 md:p-[50px]">
        <div>
            <h4 className="text-2xl font-medium mb-12">{strings.ChangePassword}</h4>
            <div>
                <Image quality={100} src={ChangePasswordImage} width={240} height={240} alt={"Change Password"} />
            </div>
        </div>
        <form onSubmit={handleSubmit}
            className="flex flex-col items-center gap-[16px] w-full md:w-4/6 [&>div]:w-full">
            <InputPassword
                label={strings.OldPassword}
                placeholder={strings.OldPassword}
                onPasswordChange={(value, isValid) => {
                    setFormData({ ...formData, oldPassword: value });
                }}
            />

            <InputPassword label={strings.NewPassword} placeholder={strings.NewPassword}
                onPasswordChange={(value, isValid) => {
                    setFormData({ ...formData, newPassword: value });
                }} />
            <InputPassword label={strings.ConfirmPassword} placeholder={strings.ConfirmPassword}
                onPasswordChange={(value, isValid) => {
                    setFormData({ ...formData, confirmPassword: value });
                }} />
            <Button size={"lg"} type={"submit"} isLoading={isLoading}
                className="w-full text-white bg-[--primary-color] mt-[24px]">{strings.Save}</Button>
            {isSuccess && isLoading === false && <p className={"text-success"}>{strings.PasswordChangeSuccessfully}</p>}
            {error && isLoading === false && <p className={"text-red-500"}>{error}</p>}
        </form>
    </div>)
}

export default ChangePasswordContent;
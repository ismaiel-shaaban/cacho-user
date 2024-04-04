import Image from "next/image";
import { useState } from "react";
import InputPassword from "@/components/sheared/inputPassword/InputPassword";
import ChangePasswordImage from "../../../../../../public/changePassword.svg"
import { Button } from "@nextui-org/react";

const ChangePasswordContent = () => {
    const [formData, setFormData] = useState({
        oldPassword: "", newPassword: "", confirmPassword: "",
    });
    return (
        <div className="flex items-center flex-col p-2 md:flex-row md:gap-10 md:p-[50px]">
            <div>
                <h4 className="text-2xl font-medium mb-12">change password</h4>
                <div>
                    <Image src={ChangePasswordImage} width={240} height={240} alt={"Change Password"} />
                </div>
            </div>
            <div className="flex flex-col items-center gap-[16px] w-full md:w-4/6">
                <InputPassword label={"Old Password"} placeholder={"Old Password"}
                    onPasswordChange={(e) => setFormData({ ...formData, oldPassword: e.target.value })} />
                <InputPassword label={"New Password"} placeholder={"New Password"}
                    onPasswordChange={(e) => setFormData({ ...formData, newPassword: e.target.value })} />
                <InputPassword label={"Confirm New Password"} placeholder={"Confirm Password"}
                    onPasswordChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
                <Button size={"lg"} className="w-full text-white bg-[--primary-color] mt-[24px]">Change Password</Button>
            </div>
        </div>
    )
}

export default ChangePasswordContent;
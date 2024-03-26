import EnterPhoneNumber from "@/modules/forgetPasswordModule/components/enterPhoneNumber/EnterPhoneNumber";
import VerifyPhoneNumber from "@/modules/forgetPasswordModule/components/verifyPhoneNumber/VerifyPhoneNumber";
import {useState} from "react";

const ForgetPasswordModule = () => {
    const [phone, setPhone] = useState({
        value: "",
        isValid: false
    });

    const handlePhoneChange = (value, isValid) => {
        setPhone({ value, isValid });
    };
    return (
        <div className="h-[calc(100vh-64px)] pt-14 px-[20px] md:pt-[75px] md:px-[95px] bg-white">
            {
                !phone.isValid && <EnterPhoneNumber onPhoneChange={handlePhoneChange} />
            }
            {
                phone.isValid && <VerifyPhoneNumber phone={phone.value} isValidPhone={phone.isValid} />
            }
        </div>
    );
}

export default ForgetPasswordModule;
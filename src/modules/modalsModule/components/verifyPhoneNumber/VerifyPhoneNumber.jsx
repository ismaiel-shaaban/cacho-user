import Image from "next/image";
import { useEffect, useState } from "react";
import ForgetHeader from "@/modules/modalsModule/components/forgetHeader/ForgetHeader";
import EmailImage from "../../../../../public/Email-1.svg";
import { Button} from "@nextui-org/react";
import CodeVerifyInputs from "@/components/sheared/codeVerifyInputs/CodeVerifyInputs";

const VerifyPhoneNumber = ({ phone, isValidPhone, setIsCodeValid }) => {
    const [code, setCode] = useState(Array.from({ length: 6 }, () => ""));
    const [verificationCode, setVerificationCode] = useState("");
    useEffect(() => {
        if (isValidPhone) {
            console.log("Phone number is valid:", phone);
        }
    }, [phone, isValidPhone]);

    useEffect(() => {
        setVerificationCode(code.join(""));
    }, [code]);

    const handleVerify = () => {
        if (verificationCode.length === 6) {
            setIsCodeValid(true);
        } else {
            setIsCodeValid(false);
        }
    }


    return (<div>
        <div className="flex justify-between w-2/3 sm:w-full p-9">
            <div>
                <ForgetHeader />
                <p className="text-[--primary-color]">+20 {phone}</p>
            </div>
            <div className="w-1/2 h-[282px] hidden sm:block">
                <Image src={EmailImage} alt={"Email"}
                    className="object-contain w-full h-full" />
            </div>
        </div>
        <div className="flex justify-center">
            <form className="mt-8">
                <CodeVerifyInputs setCode={setCode} />
                <Button size={"lg"} isDisabled={verificationCode.length !== 6} onClick={handleVerify}
                    className="w-full bg-[--primary-color] text-white mt-8">Verify</Button>
            </form>
        </div>
    </div>);
}

export default VerifyPhoneNumber;
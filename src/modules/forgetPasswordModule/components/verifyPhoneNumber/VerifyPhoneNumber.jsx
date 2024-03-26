import Image from "next/image";
import {useEffect, useState} from "react";
import ForgetHeader from "@/modules/forgetPasswordModule/components/forgetHeader/ForgetHeader";
import EmailImage from "../../../../../public/Email-1.svg";
import {Button, Input} from "@nextui-org/react";
import CodeVerifyInputs from "@/components/sheared/codeVerifyInputs/CodeVerifyInputs";

const VerifyPhoneNumber = ({phone, isValidPhone}) => {
    const [code, setCode] = useState(Array.from({ length: 6 }, () => ""));
    useEffect(() => {
        if (isValidPhone) {
            // Phone number is valid, you can proceed with verification
            console.log("Phone number is valid:", phone);
        }
    }, [phone, isValidPhone]);

    console.log("Code:", code)


    return (<div>
        <div className="flex justify-between">
            <div>
                <ForgetHeader/>
                <p className="text-[--primary-color]">+20 {phone}</p>
            </div>
            <div className="w-1/2 h-[282px] hidden sm:block">
                <Image src={EmailImage} alt={"Email"}
                       className="object-contain w-full h-full"/>
            </div>
        </div>
        <div className="flex justify-center">
            <form className="mt-8">
                <CodeVerifyInputs setCode={setCode} />
                <Button size={"lg"} className="w-full bg-[--primary-color] text-white mt-8">Verify</Button>
            </form>
        </div>
    </div>);
}

export default VerifyPhoneNumber;
import Image from "next/image";
import { useEffect, useState } from "react";
import ForgetHeader from "@/modules/modalsModule/components/forgetHeader/ForgetHeader";
import EmailImage from "../../../../../public/Email-1.svg";
import { Button} from "@nextui-org/react";
import CodeVerifyInputs from "@/components/sheared/codeVerifyInputs/CodeVerifyInputs";
import {fetchUserData} from "@/utilis/getUserData";
import {useRouter} from "next/router";
import {strings} from "@/utilis/Localization";

const VerifyPhoneNumber = ({ email ,isChangePassword ,passIsValidCode }) => {
    const router = useRouter();
    const [code, setCode] = useState(Array.from({ length: 6 }, () => ""));
    const [verificationCode, setVerificationCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setVerificationCode(code.join(""));
    }, [code]);

    const handleVerifyEmail = async (e) => {
        e.preventDefault()
        if (verificationCode.length === 6) {
            setIsLoading(true)
            const verify = await fetch("https://caco-dev.mimusoft.com/api/customer/auth/verify" ,{
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "username":email,
                    "code":verificationCode,
                })
            })
            if (verify.ok) {
                const response = await verify.json();
                if (response.code === 200) {
                    if(isChangePassword){
                        setIsLoading(false)
                        passIsValidCode(true ,verificationCode)
                    } else {
                        await router.push('/');
                    }
                }
            } else {
                const errorResponse = await verify.json();
                console.error("Verification failed", errorResponse);
                // Handle verification failure here
            }
        }
    }


    return (<div>
        <div className="flex justify-between p-2 w-full md:p-9" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
            <div>
                <ForgetHeader />
                <p className="text-[--primary-color]">{email}</p>
            </div>
            <div className="w-1/2 h-[282px] hidden sm:block">
                <Image src={EmailImage} alt={"Email"}
                    className="object-contain w-full h-full" />
            </div>
        </div>
        <div className="flex justify-center">
            <form className="mt-8" >
                <CodeVerifyInputs setCode={setCode} />
                <Button isLoading={isLoading} size={"lg"} isDisabled={verificationCode.length !== 6} onClick={handleVerifyEmail}
                    className="w-full bg-[--primary-color] text-white mt-8">{strings.Continue}</Button>
            </form>
        </div>
    </div>);
}

export default VerifyPhoneNumber;
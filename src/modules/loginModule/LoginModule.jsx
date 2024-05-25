import {useState} from "react";
import {strings} from "@/utilis/Localization";
import {useRouter} from "next/router";
import {Button, useDisclosure} from "@nextui-org/react";
import {setCookie} from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import InputPhone from "@/components/sheared/inputPhone/InputPhone";
import InputPassword from "@/components/sheared/inputPassword/InputPassword";
import ForgetPasswordModal from "@/modules/modalsModule/ForgetPasswordModal";
import {loginUser} from "@/modules/loginModule/loginUser";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {fetchUserData} from "@/utilis/getUserData";
import LogoImage from "../../../public/logo.svg";
import classes from "./LoginModule.module.css";

const LoginModule = () => {
    const router = useRouter()
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [phone, setPhone] = useState({value: "", isValid: false});
    const [password, setPassword] = useState({value: "", isValid: false})
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!phone.isValid || !password.isValid) {
            setError("Please enter a valid phone number and password.");
            return;
        }

        try {
            setIsLoading(true);
            const { token, code } = await loginUser("+966" + phone.value, password.value);

            if (code === 200) {
                const userData = await fetchUserData(token);
                if (userData) {
                    // Save user data to localStorage
                    localStorage.setItem("userData", JSON.stringify(userData));
                    setCookie("token", token);
                    setIsLoading(false);
                    await router.push('/');
                } else {
                    setIsLoading(false);
                    setError("Failed to fetch user data.");
                }
            } else {
                setIsLoading(false);
                setError("Invalid phone number or password.");
            }
        } catch (error) {
            setError("An error occurred during login. Please try again.");
            setIsLoading(false);
            console.error("Login failed:", error.message);
        }
    };

    const textInEnglish = () => {
        return (
            <>
                The
                <span
                    className="text-[--primary-color] bg-white inline-block px-1 h-fit">Marketing</span> Commercial
                <span className="text-[--primary-color] bg-white inline-block px-1 h-fit">Directory</span>
            </>
        )
    }

    const textInArabic = () => {
        return (
            <>
                <span
                    className="text-[--primary-color] bg-white inline-block px-1 h-fit">الدليل</span> التجاري
                <span className="text-[--primary-color] bg-white inline-block px-1 h-fit">التسويقي</span>
            </>
        )
    }


    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
                <div
                    className={`${classes["login-banner"]} z-10 h-[calc(100dvh-64px)] relative bg-gradient-to-b from-[#50489E] to-[#3F3D4D] hidden md:flex flex-col justify-between`}>
                    <div className="pt-20 ps-10 flex flex-col gap-14">
                        <h2 className="text-[56px] font-bold mb-[20px]">{
                            strings.getLanguage() === 'ar' ? textInArabic() : textInEnglish()
                        }</h2>
                        <Button as={Link} href={"/signup"}
                                className="w-fit rounded-md text-white text-[20px] leading-6 tracking-wide font-[700] bg-[--primary-color] flex items-center mt-[24px]">
                            {strings.SignUpFree} {strings.getLanguage() === 'ar' ? <FaArrowLeft size={20} className="ms-2"/> : <FaArrowRight size={20} className="ms-2"/>}
                        </Button>
                    </div>
                    <div className="flex justify-center p-3">
                        <Image src={LogoImage} alt={"Join Now"} className="block w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className="h-[calc(100dvh-64px)] bg-white flex flex-col justify-center items-center px-8 md:px-[57px]">
                    <div className="text-[3rem] font-bold mb-[30px] text-black w-[200px]">
                        <Image src={LogoImage} alt={"Cachoo"}/>
                    </div>
                    <span className="text-[24px] text-[#3F3D4D] font-[600] my-10 place-self-start w-full" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>{strings.WelcomeBack}</span>
                    <form className="w-full" onSubmit={handleLogin}>
                        <div className="mb-[20px]">
                            <InputPhone onPhoneChange={(value, isValid) => setPhone({value, isValid})}/>
                        </div>
                        <div className="mt-[45px]">
                            <InputPassword label={strings.Password} placeholder={strings.Password}
                                           onPasswordChange={(value, isValid) => setPassword({value, isValid})}/>
                            <div className="flex justify-between items-center flex-wrap">
                                <div className="text-[15px]">
                                    {strings.DontHaveAnAccount} <Link href={"/signup"} className="underline text-[--primary-color] font-bold">{strings.Register}</Link>
                                </div>
                                <Button onPress={onOpen} variant={"light"}
                                        className="text-[--rate-color] text-[14px]">{strings.ForgotPassword}</Button>
                            </div>
                            <ForgetPasswordModal isOpen={isOpen} onOpenChange={onOpenChange}/>
                        </div>
                        <Button
                            className="w-full rounded-md text-white text-[20px] leading-6 tracking-wide font-[700] bg-[--primary-color] flex items-center mt-[24px]"
                            isDisabled={!phone.isValid || !password.isValid}
                            isLoading={isLoading}
                            type={"submit"}
                        >
                            {strings.LogIn}
                        </Button>
                        {
                            error && <div className="text-[14px] text-red-500 mt-[10px]">{error}</div>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginModule;
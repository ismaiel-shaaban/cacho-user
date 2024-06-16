import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { setCookie } from "cookies-next";
import { fetchUserData } from "@/utilis/getUserData";
import InputPhone from "@/components/sheared/inputPhone/InputPhone";
import InputPassword from "@/components/sheared/inputPassword/InputPassword";
import { Button, Input, useDisclosure } from "@nextui-org/react";
import ImageUpload from "@/components/sheared/imageUpload/ImageUpload";
import ConfirmPhoneModal from "@/modules/modalsModule/ConfirmPhoneModal";
import { signupUser } from "@/modules/signupModule/signupUser";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import LogoImage from "../../../public/logo.svg";
import classes from "./SignupModule.module.css";
import { strings } from "@/utilis/Localization";
import { Checkbox } from "@nextui-org/checkbox";
import LogoImage2 from "../../../public/logo-w.svg";

const SignupModule = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: { value: "", isValid: false },
        password: { value: "", isValid: false },
        confirmPassword: { value: "", isValid: false },
        userImage: null,
        privacyPolicyAndTermsOfUseChecked: false
    });

    const handleImageChange = (file) => {
        setFormData({ ...formData, userImage: file });
    };

    const handleChange = (key, value) => {
        setFormData({
            ...formData, [key]: value,
        });
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (formData.password.value !== formData.confirmPassword.value) {
            setError("Passwords do not match.");
            return;
        }
        try {
            const {
                code, token
            } = await signupUser(formData.name, formData.email, "+966" + formData.phone.value, formData.password.value, formData.confirmPassword.value, formData.userImage);
            if (code === 200) {
                const userData = await fetchUserData(token);
                localStorage.setItem("userData", JSON.stringify(userData));
                setCookie("token", token);
                if (userData?.needVerification === true) {
                    const sendCode = await fetch("https://management.cachooapp.com/api/customer/auth/code/send", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            "username": userData.email
                        })
                    });
                    if (sendCode.status === 200) {
                        onOpen();
                    }
                }
                else {
                    setIsLoading(false);
                    setError("Failed to fetch user data.");
                }
            } else {
                setIsLoading(false);
                setError("Invalid phone number or password.");
            }
        } catch (error) {
            setError(error.message);
            setIsLoading(false)
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

    return (<div className="grid grid-cols-1 md:grid-cols-2">
        <div dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
            <div
                className={`${classes["signup-banner"]} z-10 min-h-[calc(100dvh-64px)] relative bg-gradient-to-b from-[#50489E] to-[#3F3D4D] hidden md:flex flex-col justify-around`}>
                <div className="pt-20 ps-10 flex flex-col gap-14">
                    <h2 className="text-[56px] font-bold mb-[20px]">{strings.getLanguage() === 'ar' ? textInArabic() : textInEnglish()}</h2>
                    <Button as={Link} href={"/login"}
                        className="w-fit rounded-md text-white text-[20px] leading-6 tracking-wide font-[700] bg-[#095DA8] flex items-center mt-[24px]">
                        {strings.LogIn} {strings.getLanguage() === 'ar' ? <FaArrowLeft size={20} className="ms-2" /> :
                            <FaArrowRight size={20} className="ms-2" />}
                    </Button>
                </div>
                <div className="flex justify-center p-3">
                    <Image src={LogoImage2} alt={"Join Now"} className="block w-[60%] h-full object-cover" />
                </div>
            </div>
        </div>
        <div>
            <form onSubmit={handleSignUp}>
                <div
                    className=" min-h-[calc(100dvh-64px)] bg-white flex flex-col justify-center items-center px-8 md:px-[57px]">
                    <div className="flex flex-col items-center justify-evenly w-full h-full py-8">
                        <div dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}
                            className="flex justify-between w-full">
                            <h2 className="text-[24px] font-[600] mt-[20px]">{strings.CreateNewAccount}</h2>
                            <div>
                                <Link href={"/"} className={"flex justify-center items-center"}><Image src={LogoImage} className={"w-[70%] h-full object-contain"} alt={"Logo"} /></Link>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex justify-center mb-[49px]">
                                <ImageUpload onChange={handleImageChange} />
                            </div>
                            <div className="mt-4 w-full grid grid-cols-1 gap-3 md:grid-cols-2">
                                <Input
                                    type="text"
                                    label={strings.Name}
                                    labelPlacement="outside"
                                    placeholder={strings.Name}
                                    classNames={{ label: "!text-[--gray-2]" }}
                                    onChange={(e) => handleChange("name", e.target.value)}
                                    isRequired={true}
                                    size="lg"
                                    isInvalid={formData.name.length < 3}
                                    className="w-full"
                                />
                                <Input type="email" label={strings.Email} placeholder={strings.EnterYourEmail}
                                    onChange={(e) => handleChange("email", e.target.value)}
                                    classNames={{ label: "!text-[--gray-2]" }}
                                    isRequired={true}
                                    labelPlacement="outside" size={"lg"} />
                                <div className={"md:col-span-2"}><InputPhone
                                    onPhoneChange={(value, isValid) => handleChange("phone", { value, isValid })} /></div>
                                <InputPassword label={strings.Password} placeholder={strings.Password}
                                    onPasswordChange={(value, isValid) => handleChange("password", {
                                        value, isValid
                                    })} />
                                <InputPassword label={strings.ConfirmPassword} placeholder={strings.ConfirmPassword}
                                    onPasswordChange={(value, isValid) => handleChange("confirmPassword", {
                                        value, isValid
                                    })} />
                            </div>
                            <div className="text-[15px] mt-4 flex gap-2 justify-between flex-col" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
                                <div>{strings.AlreadyHaveAnAccount} <Link href={"/login"}
                                    className="underline text-[--primary-color] font-bold">{strings.LogIn}</Link>
                                </div>
                                <div className={"flex gap-2 flex-wrap font-semibold text-[--primary-color]"}>
                                    {strings.YouAgreeToOur}
                                    <Link className={"underline"} href={"/privacy-policy"}>{strings.PrivacyPolicy}</Link>
                                    {strings.And}
                                    <Link href={"/terms-of-use"} className={"underline"}>{strings.TermsOfUse}</Link>
                                    {strings.ByCheckingTheBox}
                                    <Checkbox isSelected={formData.privacyPolicyAndTermsOfUseChecked} onChange={
                                        (e) => handleChange("privacyPolicyAndTermsOfUseChecked", e.target.checked)
                                    } />
                                </div>
                            </div>
                        </div>
                        {error && <div className="text-[14px] text-red-500 mt-[10px]">{error}</div>}
                        <div className="w-full mt-5">
                            <Button
                                isDisabled={!formData.phone.isValid || !formData.password.isValid || !formData.confirmPassword.isValid || formData.name.length < 3 || formData.privacyPolicyAndTermsOfUseChecked === false}
                                className="w-full bg-[#095FAC] text-white"
                                isLoading={isLoading}
                                // onPress={onOpen}
                                size="lg" type="submit">
                                {strings.SignUp}
                            </Button>
                            <ConfirmPhoneModal email={formData.email} isOpen={isOpen} onOpenChange={onOpenChange} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>);
};

export default SignupModule;

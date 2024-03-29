import Image from "next/image";
import {useState} from "react";
import InputPhone from "@/components/sheared/inputPhone/InputPhone";
import InputPassword from "@/components/sheared/inputPassword/InputPassword";
import Link from "next/link";
import {Button, Input, useDisclosure} from "@nextui-org/react";
import {FaArrowRight} from "react-icons/fa";
import LogoImage from "../../../public/logo-2.svg";
import bannerImage from "../../../public/bannerJoin/img-1.png";
import cameraImage from "../../../public/camera1.svg";
import classes from "./SignupModule.module.css";
import ConfirmPhoneModal from "@/modules/modalsModule/ConfirmPhoneModal";

const SignupModule = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [formData, setFormData] = useState({
        name: "",
        phone: {value: "", isValid: false},
        password: {value: "", isValid: false},
        confirmPassword: {value: "", isValid: false},
        userImage: null,
    });

    const handleFileChange = (e) => {
        setFormData({
            ...formData, userImage: URL.createObjectURL(e.target.files[0]),
        });
    };

    const handleChange = (key, value) => {
        setFormData({
            ...formData, [key]: value,
        });
    };

    // Function to check if the form is valid

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (<div className="grid grid-cols-1 md:grid-cols-2">
        <div>
            <div
                className={`${classes["signup-banner"]} z-10 h-[calc(100dvh-64px)] relative bg-gradient-to-b from-[#50489E] to-[#3F3D4D] hidden md:flex flex-col justify-between`}>
                <div className="pt-20 ps-10 flex flex-col gap-14">
                    <h2 className="text-[3rem] font-bold mb-[20px] text-white">
                        <span className="text-[--primary-color] bg-white inline-block px-1 h-fit">Need</span> to
                        market your products or open new <span
                        className="text-[--primary-color] bg-white inline-block px-1 h-fit">Business</span>
                    </h2>
                    <Button as={Link} href={"/login"}
                            className="w-fit rounded-md text-white text-[20px] leading-6 tracking-wide font-[700] bg-[#095DA8] flex items-center mt-[24px]">
                        Login<FaArrowRight size={20} className="ms-2"/>
                    </Button>
                </div>
                <div className="h-3/5 flex justify-end absolute bottom-0 end-0">
                    <Image src={bannerImage} alt={"Join Now"} className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="h-[calc(100dvh-64px)] bg-white flex flex-col justify-center items-center px-8 md:px-[57px]">
                    <div className="flex flex-col items-center justify-evenly w-full h-full py-8">
                        <div className="flex justify-between w-full">
                            <h2 className="text-[24px] font-[600] mt-[20px]">Create New Account!!</h2>
                            <div>
                                <Link href={"/"}><Image src={LogoImage} alt={"Logo"}/></Link>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex justify-center mb-[49px]">
                                <input type="file" className="hidden" id="userImage" onChange={handleFileChange}/>
                                <label htmlFor="userImage"
                                       className="w-[100px] h-[100px] rounded-full bg-[#E5E5E5] flex justify-center items-center cursor-pointer sm:w-[150px] sm:h-[150px]">
                                    {formData.userImage ? (
                                        <img
                                            src={formData.userImage}
                                            className="w-full h-full rounded-full object-cover"
                                            alt={"User Image"}
                                        />
                                    ) : (
                                        <Image
                                            src={cameraImage}
                                            className="w-[50px] h-[50px] sm:w-[95px] sm:h-[95px]"
                                            alt={"Camera Icon"}
                                        />
                                    )}
                                </label>
                            </div>
                            <div className="mt-4 w-full grid grid-cols-1 gap-3 sm:grid-cols-2">
                                <Input
                                    type="text"
                                    label="Name"
                                    labelPlacement="outside"
                                    placeholder="Name"
                                    classNames={{label: "!text-[--gray-2]"}}
                                    onChange={(e) => handleChange("name", e.target.value)}
                                    isRequired={true}
                                    size="lg"
                                    isInvalid={formData.name.length < 3}
                                    className="w-full"
                                />
                                <InputPhone
                                    onPhoneChange={(value, isValid) => handleChange("phone", {value, isValid})}/>
                                <InputPassword label={"Password"} placeholder={"Password"}
                                               onPasswordChange={(value, isValid) => handleChange("password", {
                                                   value, isValid
                                               })}/>
                                <InputPassword label={"Confirm Password"} placeholder={"Confirm Password"}
                                               onPasswordChange={(value, isValid) => handleChange("confirmPassword", {
                                                   value, isValid
                                               })}/>
                            </div>
                        </div>
                        <div className="w-1/2 mt-5">
                            <Button
                                isDisabled={!formData.phone.isValid || !formData.password.isValid || !formData.confirmPassword.isValid || formData.name.length < 3}
                                className="w-full bg-[#095FAC] text-white"
                                onPress={onOpen}
                                size="lg" type="submit">
                                Sign Up
                            </Button>
                            <ConfirmPhoneModal phone={formData.phone} isOpen={isOpen} onOpenChange={onOpenChange}/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>);
};

export default SignupModule;

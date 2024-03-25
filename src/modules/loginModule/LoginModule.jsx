import {Button, Input} from "@nextui-org/react";
import Link from "next/link";
import {FaArrowRight} from "react-icons/fa";
import bannerImage from "../../../public/bannerJoin/img-1.png";
import Image from "next/image";
import LogoImage from "../../../public/logo.svg";
import classes from "./LoginModule.module.css";


const LoginModule = () => {
    return (<div className="grid grid-cols-1 md:grid-cols-2">
        <div>
            <div
                className={`${classes["login-banner"]} z-10 h-[calc(100dvh-64px)] relative bg-gradient-to-b from-[#50489E] to-[#3F3D4D] hidden md:flex flex-col justify-between`}>
                <div className="pt-20 ps-10">
                    <h2 className="text-[3rem] font-bold mb-[20px] text-white"><span
                        className="text-[--primary-color] bg-white inline-block px-1 h-fit">Need</span> to market your
                        products or open new
                        <span className="text-[--primary-color] bg-white inline-block px-1 h-fit">Business</span></h2>
                    <Button as={Link} href={"#"}
                            className="w-fit rounded-md text-white text-[20px] leading-6 tracking-wide font-[700] bg-[--primary-color] flex items-center mt-[24px]">Sign
                        Up Free<FaArrowRight size={20} className="ms-2"/></Button>
                </div>
                <div className="h-3/5 flex justify-end absolute bottom-0 end-0">
                    <Image src={bannerImage} alt={"Join Now"} className="w-full h-full object-cover "/>
                </div>
            </div>
        </div>
        <div>
            <div className="h-[calc(100dvh-64px)] bg-white flex flex-col justify-center items-center container">
                <div className="text-[3rem] font-bold mb-[30px] text-black w-[200px]">
                    <Image src={LogoImage} alt={"Cachoo"}/>
                </div>
                <span className="text-[20px] text-[#3F3D4D] font-[700] my-10 place-self-start">Welcome back!</span>
                <form className="w-full ">
                    <div className="mb-[20px]">
                        <Input size={"lg"} placeholder="Email" type="email" id="email" label={"Email"} name="email"
                               labelPlacement={"outside"}/>
                    </div>
                    <div className="mt-[45px]">
                        <Input size={"lg"} placeholder="Password" type="password" id="password" name="password"
                               label={"Password"} labelPlacement={"outside"}/>
                        <Link href={"#"} className="mt-[10px] text-[--rate-color] text-end w-full block text-[14px]">Forgot Password?</Link>
                    </div>
                    <Button
                        className="w-full rounded-md text-white text-[20px] leading-6 tracking-wide font-[700] bg-[--primary-color] flex items-center mt-[24px]">Login</Button>
                </form>
            </div>
        </div>
    </div>)
}

export default LoginModule
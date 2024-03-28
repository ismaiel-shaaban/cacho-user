import SignupModule from "@/modules/signupModule/SignupModule";
import {Navbar, NavbarBrand} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "../../public/logo-2.svg";

const SignupPage = () => {
    return (
        <>
            <Navbar position={"static"} maxWidth={"2xl"} >
                <NavbarBrand>
                    <Link href={"/"} >
                        <Image src={LogoImage} width={130} alt={"Logo"}/>
                    </Link>
                </NavbarBrand>
            </Navbar>
        <SignupModule/>
        </>
    )
}

export default SignupPage
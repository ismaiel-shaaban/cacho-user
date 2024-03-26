import ForgetPasswordModule from "@/modules/forgetPasswordModule/ForgetPasswordModule";
import {Navbar, NavbarBrand} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "../../public/logo.svg";

const ForgetPasswordPage = () => {
    return (
        <section>
            <Navbar position={"static"} maxWidth={"2xl"} >
                <NavbarBrand>
                    <Link href={"/"} >
                        <Image src={LogoImage} width={130} alt={"Logo"}/>
                    </Link>
                </NavbarBrand>
            </Navbar>
        <ForgetPasswordModule/>
        </section>
    );
}

export default ForgetPasswordPage;
import LoginModule from "@/modules/loginModule/LoginModule";
import { Navbar, NavbarBrand } from "@nextui-org/react";
import Image from "next/image";
import LogoImage from "../../public/logo.svg";
import Link from "next/link";
import Head from "next/head";

const Login = () => {
    return (
        <div>
            <Head>
                <title>Login</title>
            </Head>
            <Navbar position={"static"} maxWidth={"2xl"} >
                <NavbarBrand>
                    <Link href={"/"} >
                        <Image src={LogoImage} width={130} alt={"Logo"} />
                    </Link>
                </NavbarBrand>
            </Navbar>
            <LoginModule />
        </div>
    )
}

export default Login
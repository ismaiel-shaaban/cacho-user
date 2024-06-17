import LoginModule from "@/modules/loginModule/LoginModule";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import LogoImage from "../../public/logo.svg";
import Link from "next/link";
import Head from "next/head";
import SelectLang from "@/modules/layout/navBar/components/selectLang/SelectLang";

const Login = () => {
    return (
        <div>
            <Head>
                <title>Login</title>
            </Head>
            <Navbar position={"static"} maxWidth={"2xl"} >
                <NavbarBrand>
                    <Link href={"/"} >
                        <img lazy src={LogoImage} alt={"Logo"} />
                    </Link>
                </NavbarBrand>
                <NavbarContent justify="end">
                    <SelectLang />
                </NavbarContent>
            </Navbar>
            <LoginModule />
        </div>
    )
}

export default Login
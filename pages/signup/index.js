import SignupModule from "@/modules/signupModule/SignupModule";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import LogoImage from "../../public/logo.svg";
import Head from "next/head";
import SelectLang from "@/modules/layout/navBar/components/selectLang/SelectLang";

const SignupPage = () => {
    return (
        <>
            <Head>
                <title>Signup</title>
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
            <SignupModule />
        </>
    )
}

export default SignupPage
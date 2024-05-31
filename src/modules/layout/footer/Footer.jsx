import Link from "next/link";
import {Button, Divider, Input} from "@nextui-org/react";
import {IoLogoFacebook} from "react-icons/io";
import {FaInstagram, FaYoutube} from "react-icons/fa6";
import Logo from "@/modules/layout/navBar/components/logo";
import {strings} from "@/utilis/Localization";
import {FaXTwitter} from "react-icons/fa6";
import googleLogo from "../../../../public/googlePlay.png";
import appStoreLogo from "../../../../public/download-on-the-app-store-apple-logo-svgrepo-com.png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="container" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
      <div className="flex justify-center py-[40px] relative z-[4]">
        <div className="w-full px-4 py-3 bg-[--primary-color] rounded-[10px] shadow-md z-[3] flex items-center justify-center flex-col md:flex-row gap-5 xl:mx-[202px] md:px-10 md:py-[64px]">
            <span className="font-[300] text-2xl text-white text-center">{strings.Subscribe}</span>
            <span className="w-full xl:w-1/2">
                <Input size={"lg"} placeholder={strings.EnterYourEmail}
                classNames={{
                    inputWrapper: '!rounded-[10px] p-[8px]',
                }}
                       endContent={<Button className="bg-[--rate-color] text-white rounded-md px-[16px]">{strings.SubscribeNow}</Button>}
                />
            </span>
        </div>
      </div>
        <div className="py-10">
            <div className="flex items-center flex-wrap justify-center md:justify-between gap-5">
                <div className="flex gap-5">
                    <Link href="/" className="font-[400] text-lg">{strings.HotOffers}</Link>
                    <Link href="/" className="font-[400] text-lg">{strings.Nearest}</Link>
                    <Link href="/" className="font-[400] text-lg">{strings.New}</Link>
                </div>
                <div className="flex items-center gap-5">
                    <Link href="/" className={"text-[#4267B2]"}>
                        <IoLogoFacebook size={26} />
                    </Link>
                    <Link href="/" className={"text-[#14171A]"}>
                        <FaXTwitter size={24} />
                    </Link>
                    <Link href="/">
                        <FaInstagram size={24} />
                    </Link>
                    <Link href="/" className={"text-[#FF0000]"}>
                        <FaYoutube size={26} />
                    </Link>
                </div>
            </div>
        </div>
        <Divider className="h-[2px] my-2 w-full" />
        <div className="mt-[40px] pb-[20px] grid grid-cols-2 justify-between items-center md:grid-cols-3">
            <p className="text-[#666] my-auto">{strings.CopyRight}</p>
            <div className="flex justify-center">
            <Logo />
            </div>
            <p className="text-end flex gap-3 md:justify-end font-[400] text-[14px]">
                <Link href="/privacy-policy">{strings.PrivacyPolicy}</Link>
                <Link href="/terms-of-use">{strings.TermsOfUse}</Link>
                <Link href={"/about-us"}>{strings.AboutUs}</Link>
            </p>
        </div>
        <div className={"flex justify-center flex-coll items-center gap-4 sm:flex-row md:4/12 lg:w-3/12 mx-auto"}>
            <Link href={"/"}>
                <Image src={googleLogo} width={350} height={150} alt={"Google Store"}/>
            </Link>
            <Link href={"/"}>
                <Image src={appStoreLogo}  width={350} height={150} alt={"appStoreLogo"}/>
            </Link>
        </div>
    </footer>
  )
}

export default Footer
import Link from "next/link";
import {Button, Divider, Input} from "@nextui-org/react";
import {IoLogoFacebook, IoLogoTwitter, IoLogoVimeo} from "react-icons/io";
import {FaYoutube} from "react-icons/fa";
import Logo from "@/modules/layout/navBar/components/logo";
import {strings} from "@/utilis/Localization";
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
                    <Link href="#" className="font-[400] text-lg">{strings.HotOffers}</Link>
                    <Link href="#" className="font-[400] text-lg">{strings.Nearest}</Link>
                    <Link href="#" className="font-[400] text-lg">{strings.New}</Link>
                </div>
                <div className="flex gap-5">
                    <Link href="#">
                        <IoLogoFacebook size={24} />
                    </Link>
                    <Link href="#">
                        <IoLogoTwitter size={24} />
                    </Link>
                    <Link href="#">
                        <IoLogoVimeo size={24} />
                    </Link>
                    <Link href="#">
                        <FaYoutube size={24} />
                    </Link>
                </div>
            </div>
        </div>
        <Divider className="h-[2px] my-2 w-full" />
        <div className="mt-[40px] pb-[20px] grid grid-cols-2 justify-between items-center md:grid-cols-3">
            <p className="text-[#666] text-lg">{strings.CopyRight}</p>
            <div className="flex justify-center">
            <Logo />
            </div>
            <p className="text-end flex gap-3 md:justify-end font-[400] text-[14px]">
                <Link href="#">{strings.PrivacyPolicy}</Link>
                <Link href="#">{strings.TermsOfUse}</Link>
            </p>
        </div>
    </footer>
  )
}

export default Footer
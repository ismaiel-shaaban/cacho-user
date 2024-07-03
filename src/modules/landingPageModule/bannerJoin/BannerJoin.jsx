import Link from "next/link";
import { strings } from "@/utilis/Localization";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import Logo from "../../../../public/logo-w.svg"

const BannerJoin = () => {
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
    return (<section className="banner-join container mt-[46px]" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
        <div
            className="bg-gradient-to-b from-[#50489E] to-[#3F3D4D] rounded-[20px] relative overflow-visible">
            <div className="h-full text-white py-[15px] px-[20px] md:py-[40px] md:px-[55px] md:w-3/5">
                <h2 className="text-[40px] font-bold mb-[20px]">{
                    strings.getLanguage() === 'ar' ? textInArabic() : textInEnglish()
                }</h2>
                <Button as={Link} href={"https://management.cachooapp.com/ar/vendors-hub/auth/login"} className="w-fit rounded-md text-white text-[20px] leading-6 tracking-wide font-[700] bg-[--primary-color] flex items-center mt-[24px]">{strings.SignUpFree}{strings.getLanguage() !== "ar" ? <FaArrowRight size={20} className="ms-2" /> : <FaArrowLeft size={20} className="ms-2" />}</Button>
            </div>
            <div
                className={"h-full flex items-center justify-center py-8 z-10 md:w-2/5 md:pe-5 md:absolute md:end-0 md:bottom-0"}>
                <Image quality={100} src={Logo} alt={"Join Now"} className="h-full w-full" />

            </div>
        </div>
    </section>)
}
export default BannerJoin;
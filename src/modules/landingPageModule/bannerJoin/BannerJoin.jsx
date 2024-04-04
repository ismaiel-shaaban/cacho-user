import Link from "next/link";
import { strings } from "@/utilis/Localization";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import bannerImage from "../../../../public/bannerJoin/img-1.png";

const BannerJoin = () => {
    const textInEnglish = () => {
        return (
            <>
                <span
                    className="text-[--primary-color] bg-white inline-block px-1 h-fit">Need</span> to market your
                products or open new
                <span className="text-[--primary-color] bg-white inline-block px-1 h-fit">Business</span>
            </>
        )
    }

    const textInArabic = () => {
        return (
            <>
                <span
                    className="text-[--primary-color] bg-white inline-block px-1 h-fit">تحتاج</span> إلى تسويق منتجاتك أو فتح
                <span className="text-[--primary-color] bg-white inline-block px-1 h-fit">أعمال</span>
                تجارية جديدة
            </>
        )
    }
    return (<section className="banner-join container mt-[46px]" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
        <div
            className="bg-gradient-to-b from-[#50489E] to-[#3F3D4D] rounded-[20px] relative overflow-visible">
            <div className="h-full text-white py-[20px] px-[30px] md:py-[69px] md:px-[75px] md:w-2/3">
                <h2 className="text-[56px] font-bold mb-[20px]">{
                    strings.getLanguage() === 'ar' ? textInArabic() : textInEnglish()
                }</h2>
                <Button as={Link} href={"#"} className="w-fit rounded-md text-white text-[20px] leading-6 tracking-wide font-[700] bg-[--primary-color] flex items-center mt-[24px]">{strings.SignUpFree}{strings.getLanguage() !== "ar" ? <FaArrowRight size={20} className="ms-2" /> : <FaArrowLeft size={20} className="ms-2" />}</Button>
            </div>
            <div className={"h-[calc(100%+30px)] md:w-1/3 z-10 md:absolute md:end-0 md:bottom-0"}>
                <Image src={bannerImage} alt={"Join Now"} className="h-full" />
            </div>
        </div>
    </section>)
}
export default BannerJoin;
import { useState } from "react";
import { Button, Chip, useDisclosure } from "@nextui-org/react";
import { strings } from "@/utilis/Localization";
import BookMark from "@/utilis/Icons/BookMark";
import TextMessageIcon from "@/utilis/Icons/TextMessageIcon";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { calculateDiscountPercentage } from "@/utilis/calculateDiscountPercentage";
import { getCookie } from "cookies-next";
import { fetchUserData } from "@/utilis/getUserData";
import SuggestLoginModal from "@/modules/modalsModule/SuggestLoginModal";
import { useRouter } from "next/router";
import { formatPhoneNumber } from "@/utilis/formatPhoneNumber";
import ConfirmPhoneModal from "@/modules/modalsModule/ConfirmPhoneModal";

const ProductInfo = ({ info, images }) => {
    const router = useRouter()
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [needVerification, setNeedVerification] = useState(false);
    const [email, setEmail] = useState("");


    const handleChatWithStore = async () => {
        const token = getCookie("token")
        try {
            const userData = await fetchUserData(token)
            if (userData) {
                setEmail(userData.email)
                if (userData.needVerification === true) {
                    setNeedVerification(true)
                    const sendCode = await fetch("https://management.cachooapp.com/api/customer/auth/code/send", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        },
                        body: JSON.stringify({
                            "username": email
                        })
                    });
                    const res = await sendCode.json()
                    if (res.code === 200 || res.code === 401) {
                        onOpen()
                    }
                } else {
                    setNeedVerification(false)
                    const response = await fetch(`https://management.cachooapp.com/api/customer/businesses/${info.business.uuid}/chats`, {
                        method: "POST", headers: {
                            "Authorization": "Bearer " + token, "Content-Type": "application/json"
                        }
                    });
                    const data = await response.json();
                    const chatId = data.response.uuid; // Adjust this based on your API response structure

                    router.push({
                        pathname: "/chat", query: { chatId: chatId },
                    })
                }
            } else {
                onOpen()
            }

        } catch (error) {
            console.error("Failed to start chat:", error);
        }
    };

    const discountPercentage = calculateDiscountPercentage(info?.price, info?.priceAfterDiscount)

    const encodedMessage = encodeURIComponent(info?.name + " " + images[0])

    return (<>
        <div className="col-span-12 lg:col-span-4 md:col-span-6"
            dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
            <p className="text-gray-400">
                {strings.by} <span className="text-[--primary-color]">
                    <Link href={`/Stores/${info?.business?.uuid}`}>{info?.business?.title}</Link>
                </span>
            </p>
            <h3 className="text-[32px] font-[600]">{info?.name}</h3>

            <div className="flex items-center justify-between mt-3">
                <div className="flex items-center text-[32px] gap-3 md:gap-[25px]">
                    {info?.priceAfterDiscount === 0 || info?.priceAfterDiscount === null ? null :
                        <span className="font-[600]">
                            {info?.priceAfterDiscount}
                            <span className="text-[10px] text-gray-400 font-normal leading-5">{strings.egp}</span>
                        </span>}

                    <span
                        className={`font-[600] ${info?.priceAfterDiscount === 0 || info?.priceAfterDiscount === null ? null : "text-gray-400"}`}>
                        <span
                            className={`${info?.priceAfterDiscount === 0 || info?.priceAfterDiscount === null ? "" : "line-through"}`}>{info?.price}</span>
                        <span
                            className="text-[10px] text-gray-400 font-normal leading-5 no-underline">{strings.egp}</span>
                    </span>
                    {info?.priceAfterDiscount === 0 || info?.priceAfterDiscount === null ? null :
                        <Chip size="md" className="bg-[--red] text-white px-3 rounded-[10px]">
                            {discountPercentage}% {strings.off}
                        </Chip>}
                </div>
            </div>
            <div>
                <h3 className="mt-2">{info?.description}</h3>
            </div>
            <div className="flex gap-2 mt-2">
                <div className="w-1/6 h-[54px] flex items-center justify-center border-3 rounded-md">
                    <BookMark isProduct={true} productId={info?.uuid} isSaved={info?.isFavourite} />
                </div>
                <Button onClick={handleChatWithStore}
                    className="w-5/6 py-[16px] px-[10px] bg-[--rate-color] text-white h-[54px]"
                    startContent={<TextMessageIcon />}>
                    Chat
                </Button>
            </div>
            {info.business.whatsapp && <div className={"w-5/6 ms-auto flex gap-2"}>
                <span></span>
                <Button as={Link} target={"_blank"}
                    href={`https://wa.me/${formatPhoneNumber(info.business.whatsapp)}/?text=${encodedMessage}`}
                    size={"lg"}
                    startContent={<FaWhatsapp size={24} />}
                    className={"w-full mt-2 py-[16px] bg-[--green] px-[10px] text-white h-[54px]"}>
                    Whatsapp
                </Button>
            </div>}
            {info?.details && (<div className={"w-full ms-auto flex flex-col gap-2 mt-3"}>
                {Object.keys(info.details).map((key, index) => (<div key={index}>
                    <h2 className="font-[600] text-[16px] text-black mb-2">{strings[key]}</h2>
                    <div className={"flex gap-2 flex-wrap"}>
                        {info.details[key].map((detail, subIndex) => (
                            <Button key={`${key}-${subIndex}`} radius={"sm"} size={"md"} isIconOnly
                                className={`${key !== "colors" && "border-[--rate-color]"} w-fit !p-0 !px-1 h-[33px] text-[--rate-color] cursor-auto`}
                                variant="bordered"
                                style={{ backgroundColor: detail }}>{key !== "colors" && detail}</Button>))}
                    </div>
                </div>))}
            </div>)}


        </div>
        {isOpen && needVerification === false && <SuggestLoginModal isOpen={isOpen} onOpenChange={onOpenChange} />}
        {isOpen && needVerification === true && <ConfirmPhoneModal email={email} isOpen={isOpen} onOpenChange={onOpenChange} />}
    </>);
};

export default ProductInfo;

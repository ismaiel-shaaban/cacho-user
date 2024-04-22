import { useState } from "react";
import {Button, Chip, useDisclosure} from "@nextui-org/react";
import { strings } from "@/utilis/Localization";
import classes from "./ProductInfo.module.css";
import BookMark from "@/utilis/Icons/BookMark";
import TextMessageIcon from "@/utilis/Icons/TextMessageIcon";
import SaveIcon from "@/utilis/Icons/SaveIcon";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import {calculateDiscountPercentage} from "@/utilis/calculateDiscountPercentage";
import {getCookie} from "cookies-next";
import {fetchUserData} from "@/utilis/getUserData";
import SuggestLoginModal from "@/modules/modalsModule/SuggestLoginModal";
import {useRouter} from "next/router";
import {formatPhoneNumber} from "@/utilis/formatPhoneNumber";

const ProductInfo = ({ info ,images }) => {
    const router = useRouter()
    const [selectedAttribute, setSelectedAttribute] = useState({});
    const [selectedPrice, setSelectedPrice] = useState(info?.priceAfterDiscount);
    const [selectedPriceAfterDiscount, setSelectedPriceAfterDiscount] = useState(info?.price)
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const handleSelectAttribute = (group, name, price , priceAfterDiscount) => {
        setSelectedAttribute({ group, name });
        setSelectedPrice(price);
        setSelectedPriceAfterDiscount(priceAfterDiscount);
    };

    const handleChatWithStore = async () => {
        const token = getCookie("token")
        try {
            const userData = await fetchUserData(token)
            if (userData){
                const response = await fetch(`https://caco-dev.mimusoft.com/api/customer/businesses/${info.business.uuid}/chats`, {
                    method: "POST", headers: {
                        "Authorization": "Bearer " + token, "Content-Type": "application/json"
                    }
                });
                const data = await response.json();
                const chatId = data.response.uuid; // Adjust this based on your API response structure

                router.push({
                    pathname: "/chat", query: {chatId: chatId},
                });
            } else {
                onOpen()
            }

        } catch (error) {
            console.error("Failed to start chat:", error);
        }
    };

    const discountPercentage = calculateDiscountPercentage(info?.price , info?.priceAfterDiscount)

    const encodedMessage = encodeURIComponent(info?.name +" "+ images[0])

    return (
        <>
        <div className="col-span-12 lg:col-span-4 md:col-span-6" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
            <p className="text-gray-400">
                By <span className="text-[--primary-color]">
                <Link href={`/Stores/${info?.business?.uuid}`}>{info?.business?.title}</Link>
            </span>
            </p>
            <h3 className="text-[32px] font-[600]">{info?.name}</h3>

            <div className="flex items-center justify-between mt-3">
                <div className="flex gap-[33px] items-center text-[32px]">
                    <span className="font-[600]">
                        {selectedPrice}
                        <span className="text-[10px] text-gray-400 font-normal leading-5">{strings.egp}</span>
                    </span>
                    {info?.price !== info?.priceAfterDiscount && info?.price > info?.priceAfterDiscount && <>
                    <span className="font-[600] text-gray-400">
                        <span className="line-through">{selectedPriceAfterDiscount}</span>
                        <span
                            className="text-[10px] text-gray-400 font-normal leading-5 no-underline">{strings.egp}</span>
                    </span>
                        <Chip size="md" className="bg-[--red] text-white px-3 rounded-[10px]">
                            {discountPercentage}% {strings.off}
                        </Chip>
                    </>
                    }
                </div>
            </div>
            <div className="flex mt-2 gap-2">
                <div className="w-1/6 h-[54px] flex items-center justify-center border-3 rounded-md">
                    <BookMark isProduct={true} productId={info?.uuid} isSaved={info?.isFavourite}/>
                </div>
                <Button onClick={handleChatWithStore}
                        className="w-5/6 py-[16px] px-[10px] bg-[--rate-color] text-white h-[54px]"
                        startContent={<TextMessageIcon/>}>
                    Chat
                </Button>
            </div>
            {info.business.whatsapp && <div className={"w-5/6 ms-auto flex gap-2"}>
                <span></span>
                <Button as={Link} target={"_blank"} href={`https://wa.me/${formatPhoneNumber(info.business.whatsapp)}/?text=${encodedMessage}`} size={"lg"}
                        startContent={<FaWhatsapp size={24}/>}
                        className={"w-full mt-2 py-[16px] bg-[--green] px-[10px] text-white h-[54px]"}>
                    Whatsapp
                </Button>
            </div>}
            {info.attributes.map((attributeGroup) => (
                <div key={attributeGroup.group} className="mb-3">
                    <h4 className="font-[500] mt-3">{attributeGroup.group}</h4>
                    <div className="flex flex-wrap gap-3">
                        {attributeGroup.values.map((value) => (
                            <Button
                                key={value.name}
                                size={"sm"}
                                onClick={() => handleSelectAttribute(attributeGroup.group, value.name, value.priceAfterDiscount , value.price)}
                                // color={selectedAttribute.group === attributeGroup.group && selectedAttribute.name === value.name ? 'primary' : 'default'}
                                variant={"bordered"} className={selectedAttribute.group === attributeGroup.group && selectedAttribute.name === value.name ? 'bg-[--rate-color] text-white border-[--rate-color] ' : 'bg-white border-[--rate-color] '}
                            >
                                {value.name}
                            </Button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    <SuggestLoginModal isOpen={isOpen} onOpenChange={onOpenChange}/>
    </>
    );
};

export default ProductInfo;

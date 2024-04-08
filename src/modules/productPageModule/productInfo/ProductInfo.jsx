import { useState } from "react";
import { Button, Chip } from "@nextui-org/react";
import { strings } from "@/utilis/Localization";
import classes from "./ProductInfo.module.css";
import BookMark from "@/utilis/Icons/BookMark";
import TextMessageIcon from "@/utilis/Icons/TextMessageIcon";
import SaveIcon from "@/utilis/Icons/SaveIcon";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const ProductInfo = ({ info }) => {
    const [selectedAttribute, setSelectedAttribute] = useState({});
    const [selectedPrice, setSelectedPrice] = useState(info?.priceAfterDiscount);
    const [selectedPriceAfterDiscount, setSelectedPriceAfterDiscount] = useState(info?.price)

    const handleSelectAttribute = (group, name, price , priceAfterDiscount) => {
        setSelectedAttribute({ group, name });
        setSelectedPrice(price);
        setSelectedPriceAfterDiscount(priceAfterDiscount);
    };

    const discountPercentage = Math.floor(((selectedPriceAfterDiscount -selectedPrice ) / selectedPrice) * 100);

    return (
        <div className="col-span-12 lg:col-span-4 md:col-span-6">
            <p className="text-gray-400">
                By <span className="text-[--primary-color]">{info?.business?.title}</span>
            </p>
            <h3 className="text-[32px] font-[600]">{info?.name}</h3>

            <div className="flex items-center justify-between mt-3">
                <div className="flex gap-[33px] items-center text-[32px]">
                    <span className="font-[600]">
                        {selectedPrice}
                        <span className="text-[10px] text-gray-400 font-normal leading-5">{strings.egp}</span>
                    </span>
                    <span className="font-[600] text-gray-400">
                        <span className="line-through">{selectedPriceAfterDiscount}</span>
                        <span className="text-[10px] text-gray-400 font-normal leading-5 no-underline">{strings.egp}</span>
                    </span>
                    <Chip size="md" className="bg-[--red] text-white px-3 rounded-[10px]">
                        {discountPercentage}% {strings.off}
                    </Chip>
                </div>
            </div>
            <div className="flex mt-2 gap-2">
                <div className="w-1/6 h-[54px] flex items-center justify-center border-3 rounded-md">
                    <BookMark isProduct={true} productId={info.uuid} isSaved={info.isFavourite} />
                </div>
                <Button className="w-5/6 py-[16px] px-[10px] bg-[--rate-color] text-white h-[54px]" startContent={<TextMessageIcon />}>
                    Chat
                </Button>
            </div>
            {info.business.whatsapp && <div className={"w-5/6 ms-auto flex gap-2"}>
                <span></span>
                <Button as={Link} href={`https://wa.me/${info.business.whatsapp}`} size={"lg"} color={"success"}
                        startContent={<FaWhatsapp size={24}/>}
                        className={"w-full mt-2 py-[16px] px-[10px] text-white h-[54px] "}>
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
    );
};

export default ProductInfo;

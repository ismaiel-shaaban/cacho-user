import { useEffect, useState } from "react";
import { Button, Card, CardBody } from "@nextui-org/react";
import { strings } from "@/utilis/Localization";
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@/utilis/Icons/StarIcon";
import classes from "./productCard.module.css";
import BookMark from "@/utilis/Icons/BookMark";
import Rating from "@/components/sheared/rateing/Rating";

const ProductCard = ({ product }) => {
    const [lang, setLang] = useState("en");

    useEffect(() => {
        if (product) {
            setLang(localStorage.getItem("lang"));
        }
    }, [product]);

    if (!product) return <div>Loading...</div>;

    const { image, discount, marketName, ratingCount, rating, title, price, oldPrice, link} = product;

    const discountLabel = discount ? (lang === "ar" ? `${strings.off} ${discount}` : `${discount} ${strings.off}`) : "New";
    const discountClass = discount ? "bg-[--red]" : "bg-[--primary-color]";

    return (
        <Card dir={lang === "ar" ? "rtl" : "ltr"} className={`shadow-none !transition !duration-300 hover:shadow-xl`}>
            <CardBody className="p-0 overflow-hidden relative">
                <div className="h-[190px]">
                    <Image src={image} alt={title} className="object-cover w-full" style={{ height: "inherit" }} />
                </div>
                <div className={`absolute right-0 top-0 mt-[15px] mr-[15px]`}>
                    <BookMark />
                </div>
                 <div className={`${classes.discount} absolute -rotate-45 ${discountClass} text-white w-[300px] h-[50px] text-center flex items-center justify-center text-[14px]`}>
                    {discountLabel}
                </div>
                <div className="p-[15px]">
                    <div className="flex justify-between items-center mb-[5px]">
                        <span className="text-sm text-gray-400">
                            <span>{strings.by} </span>
                            <span className="text-[--primary-color]">{marketName}</span>
                        </span>
                        <Rating ratingCount={ratingCount} rating={rating}/>
                    </div>
                    <h3 className="text-md font-medium mb-[10px] leading-7">{title}</h3>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <span className="font-[600] text-[20px]">{price}<span className="text-[10px] text-gray-400 font-normal leading-5">{strings.egp}</span></span>
                            {discount && <span className="font-[600] text-[20px] text-gray-400">
                                <span className="line-through">{oldPrice}</span>
                                <span className="text-[10px] text-gray-400 font-normal leading-5 no-underline">{strings.egp}</span>
                            </span>}
                        </div>
                        <Button variant={"ghost"} as={Link} href={link} className="text-[--primary-color] border-[--primary-color] rounded-[10px] hover:!bg-[--primary-color] hover:!text-white">
                            {strings.details}
                        </Button>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default ProductCard;

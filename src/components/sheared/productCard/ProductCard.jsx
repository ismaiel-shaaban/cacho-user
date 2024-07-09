import {useEffect, useState} from "react";
import {Button, Card, CardBody} from "@nextui-org/react";
import {strings} from "@/utilis/Localization";
import Link from "next/link";
import classes from "./productCard.module.css";
import BookMark from "@/utilis/Icons/BookMark";
import Rating from "@/components/sheared/rateing/Rating";
import Image from "next/image";
import {calculateDiscountPercentage} from "@/utilis/calculateDiscountPercentage";

const ProductCard = ({product}) => {
    const [lang, setLang] = useState("en");

    useEffect(() => {
        if (product) {
            setLang(localStorage.getItem("lang"));
        }
    }, [product]);

    if (!product) return <div>Loading...</div>;

    const {images, priceAfterDiscount, price, name, uuid} = product;

    const discount = calculateDiscountPercentage(price, priceAfterDiscount);

    const discountLabel = priceAfterDiscount
        ? lang === "ar"
            ? `${strings.off} % ${parseInt(discount)}`
            : `${parseInt(discount)} % ${strings.off}`
        : null;
    const discountClass = priceAfterDiscount
        ? "bg-[--red]"
        : "bg-[--primary-color]";

    return (
        <Card
            dir={strings.getLanguage() === "ar" ? "rtl" : "ltr" }
            className={`shadow-none !transition !duration-300 hover:shadow-xl`}
        >
            <CardBody className='relative p-0 overflow-hidden'>
                <Link href={`/product/${uuid}`} className='h-[190px]' passHref>
                    <Image
                        quality={100}
                        width={292}
                        height={190}
                        src={images[0]}
                        priority
                        alt={name}
                        className='object-cover w-full h-full'
                        style={{height: "inherit"}}
                    />
                </Link>
                <div className={`absolute right-0 top-0 mt-[15px] mr-[15px]`}>
                    <BookMark
                        productId={uuid}
                        isProduct={true}
                        isSaved={product.isFavourite}
                    />
                </div>
                {priceAfterDiscount === 0 || priceAfterDiscount === null  ? null : (
                    <div
                        className={`${classes.discount} absolute -rotate-45 ${discountClass} text-white w-[300px] h-[50px] text-center flex items-center justify-center text-[14px]`}
                    >
                        {discountLabel}
                    </div>
                )}
                <Link href={`/product/${uuid}`} className='p-[15px] h-full flex flex-col justify-between'>
                    <div>
                        <div className='flex justify-between items-center mb-[5px]'>
                        <span className='text-sm text-gray-400'>
                            <span>{strings.by} </span>
                            <span className='text-[--primary-color]'>
                                <Link href={`/Stores/${product?.business?.uuid}`}>
                                    {product?.business?.title}
                                </Link>
                            </span>
                        </span>
                            <Rating
                                ratingCount={product.reviewsCount}
                                rating={product.rating}
                            />
                        </div>
                        <h3 className='text-md font-medium mb-[10px] leading-7 text-start' dir={strings.getLanguage() === "ar" ? "rtl" : "ltr" }>{name}</h3>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            {
                                priceAfterDiscount === 0 || priceAfterDiscount === null ? null :
                                    <span className='font-[600] text-[24px]'>
                                {priceAfterDiscount}
                                        <span className='text-[10px] text-gray-400 font-normal leading-5'>
                                    {strings.egp}
                                </span>
                            </span>
                            }

                            <span
                                className={`font-[600] text-[20px] ${priceAfterDiscount === 0 || priceAfterDiscount === null ? "" : "text-red-500"}`}>
                                <span className={`${ priceAfterDiscount === 0 || priceAfterDiscount === null ? "" : "line-through"}`}>{price}</span>
                                <span className='text-[10px] font-normal leading-5 no-underline'>
                                    {strings.egp}
                                </span>
                            </span>
                        </div>
                        <Button
                            variant={"ghost"}
                            as={Link}
                            href={`/product/${uuid}`}
                            className='text-[--primary-color] border-[--primary-color] rounded-[10px] hover:!bg-[--primary-color] hover:!text-white'
                        >
                            {strings.details}
                        </Button>
                    </div>
                </Link>
            </CardBody>
        </Card>
    );
};

export default ProductCard;

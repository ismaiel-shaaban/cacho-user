import {useEffect, useState} from "react";
import {Button, Card, CardBody} from "@nextui-org/react";
import {strings} from "@/utilis/Localization";
import Image from "next/image";
import Link from "next/link";
import {StarIcon} from "@/utilis/Icons/StarIcon";
import classes from "./productCard.module.css"

const ProductCard = ({product}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        product && setData(product);
    }, []);
    if (data.length === 0) return (<div>Loading...</div>)
    return (<Card className="shadow-none !transition !duration-300 hover:shadow-xl">
        <CardBody className="p-0 overflow-hidden relative">
            <div className="h-[190px]">
                <Image src={data.image} alt={data.image} className="object-cover w-full" style={{
                    height: "inherit",
                }}/>
            </div>
            <div
                className={`${classes.discount} absolute -rotate-45 bg-[--red] text-white w-[300px] h-[50px] text-center flex items-center justify-center text-[14px]`}>{data.discount} OFF
            </div>
            <div className="p-[15px]">
                <div className="flex justify-between items-center mb-[5px]">
                        <span className="text-sm text-gray-400">
                        by <span className="text-[--primary-color]">{data.marketName}</span>
                        </span>
                    <span className="text-sm text-gray-400 flex gap-2">
                            <span className="text-[--gray-2]">({data.ratingCount})</span>
                            <span className="text-sm text-[--rate-color] flex gap-1 items-center">{data.rating}
                                <StarIcon/></span>
                        </span>
                </div>
                <h3 className="text-md font-medium mb-[10px]">{data.title}</h3>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <span className="font-[600] text-[20px]">{data.price}<span
                            className="text-[8px] text-gray-400 font-normal leading-5">EGP</span>
                        </span>
                        <span className="font-[600] text-[20px] text-gray-400">
                            <span className="line-through">{data.oldPrice}</span>
                            <span
                                className="text-[8px] text-gray-400 font-normal leading-5 no-underline">EGP</span></span>
                    </div>
                    <Button variant={"ghost"} as={Link} href={data.link}
                            className="text-[--primary-color] border-[--primary-color] rounded-[10px] hover:!bg-[--primary-color] hover:!text-white">{strings.details}</Button>
                </div>
            </div>
        </CardBody>
    </Card>);
}

export default ProductCard;
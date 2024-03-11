import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { StarIcon } from "@/utilis/Icons/StarIcon";
import Link from "next/link";
import BookMark from "@/utilis/Icons/BookMark";
import Rating from "@/components/sheared/rateing/Rating";

const ShopsCard = ({ store }) => {
    const { storeName, storeImage, storeLogo, storeLink, category, rating, ratingCount, status } = store;
    const statusColor = status === "Open Now" ? "bg-[--green]" : "bg-[--red]";

    return (
        <Card className="shadow-none !transition !duration-300 hover:shadow-xl">
            <CardBody className="p-0 overflow-hidden relative">
                <div className="h-[190px] relative">
                    <Image src={storeImage} alt={storeName} className="object-cover w-full" style={{ height: "inherit" }} />
                    <div className="absolute bottom-[15px] right-1/2 translate-x-1/2 w-full px-3 bg-white">
                        {category.map((cat, index) => (
                            <span key={index} className="text-xl me-3">
                                {cat}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="absolute right-0 top-0 mt-[15px] me-[15px]">
                    <BookMark />
                </div>
                <div className={`absolute top-0 left-0 mt-[15px] ms-[15px] text-center flex items-center justify-center text-[14px] px-2 py-1 ${statusColor} text-white rounded-full`}>
                    {status}
                </div>
                <div className="p-[15px] flex items-center gap-3">
                    <Link href={storeLink}>
                        <Image src={storeLogo} alt={storeName} className="block w-[80px] object-cover h-[80px] rounded-md overflow-hidden" />
                    </Link>
                    <div>
                        <h3 className="text-md font-medium mb-[10px] leading-7">
                            <Link href={storeLink}>{storeName}</Link>
                        </h3>
                        <Rating ratingCount={ratingCount} rating={rating}/>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default ShopsCard;
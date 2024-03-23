import { Card, CardBody } from "@nextui-org/react";
import { StarIcon } from "@/utilis/Icons/StarIcon";
import Link from "next/link";
import BookMark from "@/utilis/Icons/BookMark";
import Rating from "@/components/sheared/rateing/Rating";
import StoreImage from "@/components/sheared/storeImage/StoreImage";
import { FreeMode ,Autoplay } from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules

const StoresCard = ({ store }) => {
    const statusColor = store.status === "active" ? "bg-[--green]" : "bg-[--red]";

    return (
        <Card className="shadow-none !transition !duration-300 hover:shadow-xl">
            <CardBody className="p-0 overflow-hidden relative">
                <div className="h-[190px] relative">
                    <img src={store.image} alt={store.title} className="object-cover w-full" style={{ height: "inherit" }} />
                    <div className="absolute bottom-[15px] right-1/2 translate-x-1/2 w-full px-3 bg-white">
                        <span className="text-xl me-3 text-nowrap">{store.businessType.name}</span>
                    </div>
                </div>
                <div className="absolute right-0 top-0 mt-[15px] mr-[15px]">
                    <BookMark />
                </div>
                <div className={`absolute top-0 left-0 mt-[15px] ml-[15px] text-center flex items-center justify-center text-[14px] px-2 py-1 ${statusColor} text-white rounded-full`}>
                    {store.status}
                </div>
                <div className="p-[15px] flex items-center gap-3">
                    <Link href={`/Stores/${store.uuid}`}>
                        <StoreImage image={store.image} alt={store.title}/>
                    </Link>
                    <div>
                        <h3 className="text-md font-medium mb-[10px] leading-7">
                            <Link href={`/Stores/${store.uuid}`}>{store.title}</Link>
                        </h3>
                        <Rating ratingCount={store.reviewsCount} rating={store.rating}/>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default StoresCard;
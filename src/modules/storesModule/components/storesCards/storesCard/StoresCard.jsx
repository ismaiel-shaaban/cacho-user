import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import BookMark from "@/utilis/Icons/BookMark";
import Rating from "@/components/sheared/rateing/Rating";
import StoreImage from "@/components/sheared/storeImage/StoreImage";
import {strings} from "@/utilis/Localization";
import Image from "next/image";

const StoresCard = ({ store }) => {
    const statusColor = store.isOpen ? "bg-[--green]" : "bg-[--red]";

    return (
        <Card as={Link} href={`/Stores/${store.uuid}`} dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"} className="shadow-none !transition !duration-300 hover:shadow-xl">
            <CardBody className="p-0 overflow-hidden relative">
                <div className="h-[190px] relative">
                    <Image fill src={store.image} alt={store.title} className="object-cover w-full h-full" />
                    <div className="absolute bottom-[15px] right-1/2 translate-x-1/2 w-full px-3 bg-white">
                        {store?.businessType &&
                            <span className="text-xl me-3 text-nowrap">{store?.businessType?.name}</span>}
                    </div>
                </div>
                <div className="absolute right-0 top-0 mt-[15px] mr-[15px]">
                    <BookMark productId={store.uuid} isProduct={false}  isSaved={store.isFavourite} />
                </div>
                <div className={`absolute top-0 left-0 mt-[15px] ml-[15px] text-center flex items-center justify-center text-[14px] px-2 py-1 ${statusColor} text-white rounded-full`}>
                    {store.isOpen ? strings.Open: strings.Closed}
                </div>
                <div className={`p-[15px] flex items-center ${strings.getLanguage() === "ar" && "justify-between"} gap-3`}>
                    <Link href={`/Stores/${store.uuid}`}>
                        <StoreImage image={store?.logo} alt={store.title}/>
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
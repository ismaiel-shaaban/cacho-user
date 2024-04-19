import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Card, CardBody } from "@nextui-org/react";
import { strings } from "@/utilis/Localization";
import classes from "./offerCard.module.css";
import Image from "next/image";

const OfferCard = ({ offer }) => {
    const [lang, setLang] = useState("en");

    useEffect(() => {
        if (offer) {
            setLang(localStorage.getItem("lang"));
        }
    }, [offer]);

    const discountLabel = offer.discountType ? (lang === "ar" ? `${strings.off} ${offer.discount}` : `${offer.discount} ${strings.off}`) : null;
    return (
        <Card dir={lang === "ar" ? "rtl" : "ltr"} className={`shadow-none !transition !duration-300 hover:shadow-xl`}>
            <CardBody className="p-0 overflow-hidden relative">
                <div className="h-[190px]">
                    <Image width={292} height={190} src={offer.business.image} alt={offer.title} className="object-cover w-full"
                        style={{ height: "inherit" }} />
                </div>
                {discountLabel && <div
                    className={`${classes.discount} absolute -rotate-45 bg-[--red] text-white w-[300px] h-[50px] text-center flex items-center justify-center text-[14px]`}>{discountLabel}</div>}
                <div className="p-[15px]">
                    <div>
                        <div className="flex justify-between items-center">
                            <div className="flex justify-between flex-col mb-[5px]">
                                <span className="text-sm text-gray-400">
                                    <span>{strings.by} </span>
                                    <span className="text-[--primary-color]">{offer.business.title}</span>
                                </span>
                                <h3 className="text-md font-medium mb-[10px] leading-7">{offer.title}</h3>
                            </div>
                            <span className="text-sm">
                                <div>
                                    <div>{strings.from} <span
                                        className="text-[--primary-color]">{offer.startDate}</span> </div>
                                    <div>{strings.to} <span
                                        className="text-[--primary-color]">{offer.endDate}</span></div>
                                </div>
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-end items-center">
                        <Button variant={"ghost"} as={Link} href={`/offers/${offer.uuid}`}
                            className="text-[--primary-color] border-[--primary-color] rounded-[10px] hover:!bg-[--primary-color] hover:!text-white">
                            {strings.details}
                        </Button>
                    </div>
                </div>
            </CardBody>
        </Card>);
}

export default OfferCard;
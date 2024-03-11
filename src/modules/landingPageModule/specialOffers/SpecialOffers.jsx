import Image from "next/image";
import {useEffect, useState} from "react";
import SectionTitle from "@/modules/landingPageModule/components/sectionTitle/SectionTitle";
import {strings} from "@/utilis/Localization";

const SpecialOffers = ({specialOffersData}) => {
    if (!specialOffersData) return <div className="text-center">Loading...</div>;
    return (
        <section className="container mt-[40px]">
            <SectionTitle title={strings.SpecialOffers} />
            <div className="flex flex-col md:grid md:grid-cols-2 gap-3 md:h-[570px] mt-[40px]">
                <div className="rounded-md overflow-hidden md:h-auto h-[calc(570px/2)]">
                    <Image src={specialOffersData[0].image} alt={"Special Offers"} className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-col md:grid md:grid-rows-2 md:h-[570px] gap-3">
                    <div className="rounded-md overflow-hidden">
                        <Image src={specialOffersData[1].image} alt={"Special Offers"} className="object-cover w-full h-full" />
                    </div>
                    <div className="rounded-md overflow-hidden">
                    <Image src={specialOffersData[2].image} alt={"Special Offers"}  className="object-cover w-full h-full"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecialOffers
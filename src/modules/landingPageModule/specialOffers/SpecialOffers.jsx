import Image from "next/image";
import { useEffect, useState } from "react";
import SectionTitle from "@/modules/landingPageModule/components/sectionTitle/SectionTitle";
import { strings } from "@/utilis/Localization";
import useSWR from "swr";
import {fetcher} from "@/utilis/fetcherFUN";
import {useRouter} from "next/router";

const SpecialOffers = () => {
    const router = useRouter()
    const {data , isLoading , error} = useSWR("https://caco-dev.mimusoft.com/api/customer/offers?isSpecial=1&with=business" ,fetcher ,{
        revalidateOnFocus : false,
    })


    return (
        <section className="container mt-[30px]">
            <SectionTitle title={strings.SpecialOffers}/>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-[20px] md:h-[570px] mt-[25px]">
                {data?.response?.data.slice(0, 3).map((offer, index) => (
                    <div key={index} className="rounded-md overflow-hidden cursor-pointer"
                         onClick={() => router.push(`/Stores/${offer?.business?.uuid}`)}>
                        <img src={offer?.image} alt={"Special Offers"} className="object-cover w-full h-full"/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SpecialOffers
import Image from "next/image";
import { useEffect, useState } from "react";
import SectionTitle from "@/modules/landingPageModule/components/sectionTitle/SectionTitle";
import { strings } from "@/utilis/Localization";
import useSWR from "swr";
import {fetcher} from "@/utilis/fetcherFUN";
import {useRouter} from "next/router";

const SpecialOffers = () => {
    const router = useRouter()
    const {data , isLoading , error} = useSWR("https://caco-dev.mimusoft.com/api/customer/offers?isSpecial=1&with=business" ,fetcher)

    return (
        <section className="container mt-[40px]">
            <SectionTitle title={strings.SpecialOffers} />
            <div className="flex flex-col md:grid md:grid-cols-2 gap-[20px] md:h-[570px] mt-[40px]">
                <div className="rounded-md overflow-hidden md:h-auto h-[calc(570px/2)] cursor-pointer" onClick={
                    () => router.push(`/Stores/${data?.response?.data[0]?.business.uuid}`)
                }>
                    <img src={data?.response?.data[0]?.business.image} alt={"Special Offers"} className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-col md:grid md:grid-rows-2 md:h-[570px] gap-[20px]">
                    <div className="rounded-md overflow-hidden" onClick={
                        () => router.push(`/Stores/${data?.response?.data[1]?.business.uuid}`)
                    }>
                        <img  src={data?.response?.data[1]?.business.image} alt={"Special Offers"} className="object-cover w-full h-full" />
                    </div>
                    <div className="rounded-md overflow-hidden" onClick={
                        () => router.push(`/Stores/${data?.response?.data[2]?.business.uuid}`)
                    }>
                        <img  src={data?.response?.data[2]?.business.image} alt={"Special Offers"} className="object-cover w-full h-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecialOffers
import Image from "next/image";
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

    const renderImages = () => {
        const numImages = data?.response?.data.length;
        console.log("numImages" ,numImages)
        if (numImages === 1) {
            return (
                <div className="w-full h-full rounded-md overflow-hidden cursor-pointer"
                     onClick={() => router.push(`/Stores/${data?.response?.data[0]?.business?.uuid}`)}>
                    <Image width={400} height={400} src={data?.response?.data[0]?.image} alt={"Special Offers"} className="object-cover w-full h-full" quality={100}/>
                </div>
            );
        } else if (numImages === 2) {
            return data?.response?.data.map((offer, index) => (
                <div key={index} className="w-full h-[50%] md:w-[50%] rounded-md overflow-hidden cursor-pointer"
                     onClick={() => router.push(`/Stores/${offer?.business?.uuid}`)}>
                    <Image width={200} height={200} src={offer?.image} alt={"Special Offers"} className="object-cover w-full h-full" quality={100}/>
                </div>
            ));
        } else if (numImages === 3) {
            return (
                <>
                    <div className="w-[66.67%] h-full md:w-[50%] rounded-md overflow-hidden cursor-pointer"
                         onClick={() => router.push(`/Stores/${data?.response?.data[0]?.business?.uuid}`)}>
                        <Image width={200} height={200} src={data?.response?.data[0]?.image} alt={"Special Offers"} className="object-cover w-full h-full" quality={100}/>
                    </div>
                    <div className="w-[33.33%] h-[50%] md:w-[50%] rounded-md overflow-hidden cursor-pointer"
                         onClick={() => router.push(`/Stores/${data?.response?.data[1]?.business?.uuid}`)}>
                        <Image width={200} height={200} src={data?.response?.data[1]?.image} alt={"Special Offers"} className="object-cover w-full h-full" quality={100}/>
                    </div>
                    <div className="w-[33.33%] h-[50%] md:w-[50%] rounded-md overflow-hidden cursor-pointer"
                         onClick={() => router.push(`/Stores/${data?.response?.data[2]?.business?.uuid}`)}>
                        <Image width={200} height={200} src={data?.response?.data[2]?.image} alt={"Special Offers"} className="object-cover w-full h-full" quality={100}/>
                    </div>
                </>
            );
        } else if (numImages === 4) {
            return data?.response?.data.map((offer, index) => (
                <div key={index} className="w-[50%] h-[50%] md:w-[25%] rounded-md overflow-hidden cursor-pointer"
                     onClick={() => router.push(`/Stores/${offer?.business?.uuid}`)}>
                    <Image width={200} height={200} src={offer?.image} alt={"Special Offers"} className="object-cover w-full h-full" quality={100}/>
                </div>
            ));
        }
    };

    return (
        <section className="container mt-[30px]">
            <SectionTitle title={strings.SpecialOffers}/>
            <div className=" w-full h-[calc(100dvh-180px)] gap-[20px] mt-[25px]">
                {renderImages()}
            </div>
        </section>
    )
}

export default SpecialOffers;

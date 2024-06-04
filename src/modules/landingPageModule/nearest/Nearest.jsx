import {strings} from "@/utilis/Localization";
import SectionTitle from "@/modules/landingPageModule/components/sectionTitle/SectionTitle";
import StoresCard from "@/modules/storesModule/components/storesCards/storesCard/StoresCard";
import useSWR from "swr";
import SkeletonProducts from "@/components/sheared/skeletonProducts/SkeletonProducts";
import ErrorFetch from "@/components/sheared/erorrFetch/ErrorFetch";
import {fetcher} from "@/utilis/fetcherFUN";
import {useEffect, useState} from "react";

const Nearest = () => {
    const [location, setLocation] = useState({});
    useEffect(() => {
        const lat = localStorage.getItem('latitude');
        const long = localStorage.getItem('longitude');
        if (lat && long) {
            setLocation({
                lat: lat,
                long: long
            });
        }
    }, []);
    const {
        data, error, isLoading
    } = useSWR(`https://caco-dev.mimusoft.com/api/customer/businesses?with=businessType&location[lat]=${location.lat}&location[lng]=${location.long}`, fetcher, {
        revalidateOnFocus: true,revalidateOnMount:true ,revalidateIfStale:true
    })
    if (isLoading) return <div className="container mt-[40px]">
        <SkeletonProducts col={4}/>
    </div>;
    if (error) return <ErrorFetch/>
    console.log("data" ,data)
    return (
        <section className="container mt-[30px]"  dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
            <SectionTitle title={strings.Nearest} link={"/Stores?nearest=1&page=1"} select={true}/>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-[20px] gap-2 mt-[25px]">
                { data?.response?.data.map((store) => (
                    <StoresCard key={store?.uuid} store={store}/>
                ))}
            </div>
        </section>
    );
}

export default Nearest;
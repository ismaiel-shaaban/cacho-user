import useSWR from "swr";
import {fetcher} from "@/utilis/fetcherFUN";
import {useEffect, useState} from "react";
import StoresCard from "@/modules/storesModule/components/storesCards/storesCard/StoresCard";

const BusinessTypesTab = () => {
    const [stores , setStores] = useState([]);
    const {data , isLoading , error} = useSWR(`https://caco-dev.mimusoft.com/api/customer/favourites?with=business`, fetcher);
    console.log("stores" ,stores)
    useEffect(() => {
        if (data) {
            setStores(data?.response?.data.filter(item => item.favouriteable === "business"));
        }
    }, [data]);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Failed to load</div>;
    return (
        <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 md:gap-[24px] gap-2 mt-[40px]">
                {
                    stores.map((item) => (
                        <StoresCard key={item.business.uuid} store={item.business} />
                    ))
                }
                {
                    data?.response?.data.length === 0 && <div
                        className="text-[--primary-color] text-[20px] font-bold text-center w-full"
                    >No products found</div>
                }
            </div>
        </div>
    );
}

export default BusinessTypesTab;
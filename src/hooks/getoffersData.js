import useSWR from "swr";
import { fetcher } from "@/utilis/fetcherFUN";

const useGetOffersData = (page, isSpecial) => {
    let lat, long;
    
    if (typeof window !== "undefined") {
        lat = localStorage.getItem('latitude');
        long = localStorage.getItem('longitude');
    }
    
    let url = `https://management.cachooapp.com/api/customer/offers?with=business${page ? `&page=${page}` : ""}${isSpecial ? `&isSpecial=1` : `&isSpecial=0`}`;
    
    if (lat && long) {
        url += `&location[lat]=${lat}&location[lng]=${long}`;
    }

    const { data, error, isLoading } = useSWR(url, fetcher, {
        revalidateOnFocus: false,
        revalidateIfStale: false
    });

    return {
        data,
        error,
        isLoading
    };
}

export default useGetOffersData;

import useSWR from "swr";
import { fetcher } from "@/utilis/fetcherFUN";


const useGetOffersData = (page, isSpecial) => {
    const { data, error, isLoading } = useSWR(`https://cachooapp.com/api/customer/offers?with=business${page ? `&page=${page}` : ""}${isSpecial ? `&isSpecial=1` : `&isSpecial=0`}`, fetcher, {
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
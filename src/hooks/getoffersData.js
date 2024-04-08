import useSWR from "swr";
import {fetcher} from "@/utilis/fetcherFUN";


const useGetOffersData = (page) => {
    const { data, error , isLoading } = useSWR(`https://caco-dev.mimusoft.com/api/customer/offers?with=business${page ? `&page=${page}` : ""}`, fetcher ,{
        revalidateOnFocus:false,
        revalidateIfStale:false
    });
    return {
        data,
        error,
        isLoading
    };
}

export default useGetOffersData;
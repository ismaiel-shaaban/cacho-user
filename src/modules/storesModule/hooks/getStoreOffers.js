import useSWR from "swr";
import {fetcher} from "@/utilis/fetcherFUN";


export const useStoreOffersData = (id) => {
    const url = id && `https://caco-dev.mimusoft.com/api/customer/businesses/${id}/offers`;

    const { data, error, isLoading } = useSWR(url, fetcher, {
        revalidateOnFocus: false,
        dedupingInterval: 60000, // 1 minute
    });

    return {
        data,
        error,
        isLoading
    };
};

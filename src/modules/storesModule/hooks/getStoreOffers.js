import useSWR from "swr";
import { fetcher } from "@/utilis/fetcherFUN";


export const useStoreOffersData = (id) => {
    const url = id && `https://management.cachooapp.com/api/customer/businesses/${id}/offers?isSpecial=0`;

    const { data, error, isLoading } = useSWR(url, fetcher, {
        revalidateOnFocus: true,
        dedupingInterval: 60000, // 1 minute
    });

    return {
        data,
        error,
        isLoading
    };
};

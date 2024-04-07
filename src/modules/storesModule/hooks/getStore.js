import useSWR from "swr";
import {fetcher} from "@/utilis/fetcherFUN";


export const useStoreData = (id) => {
    const url = id && `https://caco-dev.mimusoft.com/api/customer/businesses/${id}?with=categories`;

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

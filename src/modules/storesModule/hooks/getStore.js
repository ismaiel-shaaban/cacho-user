import useSWR from "swr";
import { fetcher } from "@/utilis/fetcherFUN";


export const useStoreData = (id) => {
    const url = id && `https://cachooapp.com/api/customer/businesses/${id}?with=categories,deliveryCompanies`;

    const { data, error, isLoading } = useSWR(url, fetcher, {
        revalidateOnFocus: false,
        revalidateIfStale: false
    });

    return {
        data,
        error,
        isLoading
    };
};

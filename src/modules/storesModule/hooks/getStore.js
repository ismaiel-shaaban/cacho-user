import useSWR from "swr";
import { fetcher } from "@/utilis/fetcherFUN";


export const useStoreData = (id) => {
    // Construct URL only if id is valid
    const url = id ? `https://management.cachooapp.com/api/customer/businesses/${id}?with=categories,deliveryCompanies` : null;

    // Use SWR to fetch data
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

import useSWR from "swr";
import {fetcher} from "@/utilis/fetcherFUN";


export const useStoreData = (id) => {
    const url = id && `https://caco-dev.mimusoft.com/api/customer/businesses/${id}?with=businessType.categories,deliveryCompanies`;

    const { data, error, isLoading } = useSWR(url, fetcher, {
        revalidateOnFocus:false,
        revalidateIfStale:false
    });

    return {
        data,
        error,
        isLoading
    };
};

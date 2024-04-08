import useSWR from "swr";
import {fetcher} from "@/utilis/fetcherFUN";


export const useStoresData = (filter, page) => {
    const url = filter
        ? `https://caco-dev.mimusoft.com/api/customer/business-types/${filter}/businesses?with=businessType${page ? `&page=${page}` : ""}`
        : `https://caco-dev.mimusoft.com/api/customer/businesses?with=businessType${page ? `&page=${page}` : ""}`;

    const { data, error , isLoading } = useSWR(url, fetcher, {
        revalidateOnFocus:false,
        revalidateIfStale:false
    });

    return {
        data,
        error,
        isLoading
    };
};

import useSWR from "swr";
import {fetcher} from "@/utilis/fetcherFUN";


export const useStoresData = (filter, page ,sort) => {
    const url = filter
        ? `https://caco-dev.mimusoft.com/api/customer/business-types/${filter}/businesses?with=businessType${page ? `&page=${page}` : ""}${sort ? `&sort=${sort}` : ""}`
        : `https://caco-dev.mimusoft.com/api/customer/businesses?with=businessType${page ? `&page=${page}` : ""}${sort ? `&sort=${sort}` : ""}`;

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

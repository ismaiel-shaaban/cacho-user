import useSWR from "swr";
import { getCookie } from "cookies-next";
import { fetcher } from "@/utilis/fetcherFUN";

const useGetOffersProducts = (id, page) => {
    const { data, error, isLoading } = useSWR(`https://cachooapp.com/api/customer/offers/${id}/products${page && `?page=${page}`}&with=business`, fetcher, {
        revalidateOnFocus: false,
        revalidateIfStale: false
    });
    return {
        data,
        error,
        isLoading
    };
}

export default useGetOffersProducts;
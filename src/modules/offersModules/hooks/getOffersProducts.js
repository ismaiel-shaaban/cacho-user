import useSWR from "swr";
import {getCookie} from "cookies-next";

const fetcher = (url) => fetch(url ,{
    headers: {
        Authorization: `Bearer ${getCookie('token')}`,
    }
}).then((res) => res.json());

const useGetOffersProducts = (id , page) => {
    const { data, error , isLoading } = useSWR(`https://caco-dev.mimusoft.com/api/customer/offers/${id}/products${page && `?page=${page}`}&with=business`, fetcher);
    return {
        data,
        error,
        isLoading
    };
}

export default useGetOffersProducts;
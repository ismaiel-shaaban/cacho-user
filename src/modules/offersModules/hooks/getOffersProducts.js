import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const useGetOffersProducts = (id , page) => {
    const { data, error , isLoading } = useSWR(`https://caco-dev.mimusoft.com/api/customer/offers/${id}/products${page && `?page=${page}`}&with=business`, fetcher);
    return {
        data,
        error,
        isLoading
    };
}

export default useGetOffersProducts;
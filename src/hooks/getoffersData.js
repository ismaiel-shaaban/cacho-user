import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const useGetOffersData = (page) => {
    const { data, error , isLoading } = useSWR(`https://caco-dev.mimusoft.com/api/customer/offers?with=business${page ? `&page=${page}` : ""}`, fetcher);
    return {
        data,
        error,
        isLoading
    };
}

export default useGetOffersData;
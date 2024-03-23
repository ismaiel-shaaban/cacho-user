import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useStoresData = (filter, page) => {
    const url = filter
        ? `https://caco-dev.mimusoft.com/api/customer/business-types/${filter}/businesses?with=businessType${page ? `&page=${page}` : ""}`
        : `https://caco-dev.mimusoft.com/api/customer/businesses?with=businessType${page ? `&page=${page}` : ""}`;

    const { data, error , isLoading } = useSWR(url, fetcher, {
        revalidateOnFocus: false,
        dedupingInterval: 60000, // 1 minute
    });

    return {
        data,
        error,
        isLoading
    };
};

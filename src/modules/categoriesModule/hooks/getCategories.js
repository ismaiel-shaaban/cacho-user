import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useCategoriesData = () => {
    const url = `https://caco-dev.mimusoft.com/api/customer/business-types`;

    const { data, error , isLoading } = useSWR(url, fetcher, {
        revalidateOnFocus: true,
        dedupingInterval: 60000, // 1 minute
    });

    return {
        data,
        error,
        isLoading
    };
};

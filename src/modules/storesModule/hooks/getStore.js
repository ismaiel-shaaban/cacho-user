import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useStoreData = (id, types) => {
    const withTypes = types && types.length > 0 ? types.join(',') : null;
    const url = id ? `https://caco-dev.mimusoft.com/api/customer/businesses/${id}${withTypes ? `?withTypes=${withTypes}` : ''}` : null;

    const { data, error, isLoading } = useSWR(url, fetcher, {
        revalidateOnFocus: false,
        dedupingInterval: 60000, // 1 minute
    });

    return {
        data,
        error,
        isLoading
    };
};

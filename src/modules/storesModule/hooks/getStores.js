import useSWR from "swr";
import { fetcher } from "@/utilis/fetcherFUN";


export const useStoresData = (filter, page, sort, nearest) => {
    console.log(nearest)
    const url = filter
        ? `https://cachooapp.com/api/customer/business-types/${filter}/businesses?with=businessType${page ? `&page=${page}` : ""}${sort ? `&sort=${sort}` : ""}${nearest === "1" ? `&location[lat]=${localStorage.getItem("latitude")}&location[lat]=${localStorage.getItem("longitude")}` : ""}`
        : `https://cachooapp.com/api/customer/businesses?with=businessType${page ? `&page=${page}` : ""}${sort ? `&sort=${sort}` : ""}${nearest === "1" ? `&location[lat]=${localStorage.getItem("latitude")}&location[lng]=${localStorage.getItem("longitude")}` : ""}`;

    const { data, error, isLoading } = useSWR(url, fetcher, {
        revalidateOnFocus: false,
        revalidateIfStale: false
    });

    return {
        data,
        error,
        isLoading
    };
};

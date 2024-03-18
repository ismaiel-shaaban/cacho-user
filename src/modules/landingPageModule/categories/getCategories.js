import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())
export const getAllCategories = ()=>{
    const { data, error, isLoading } = useSWR("https://caco-dev.mimusoft.com/api/customer/business-types", fetcher);
    return { data, error, isLoading }
}
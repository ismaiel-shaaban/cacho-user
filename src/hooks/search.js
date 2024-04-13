import useSWR from "swr";
import { fetcher } from "@/utilis/fetcherFUN";

const useSearch = (search, type) => {
    let url;

    switch (type) {
        case "stores":
            url = `https://caco-dev.mimusoft.com/api/customer/businesses?businesses_search=${search}`;
            break;
        case "products":
            url = `https://caco-dev.mimusoft.com/api/customer/products?products_search=${search}&isService=0`;
            break;
        case "categories":
            url = `https://caco-dev.mimusoft.com/api/customer/business-types?business_types_search=${search}`;
            break;
            case "service":
            url = `https://caco-dev.mimusoft.com/api/customer/products?products_search=${search}&isService=1`;
            break;
        default:
            // Handle default case or throw an error
            break;
    }

    const { data, error, isLoading } = useSWR(url, fetcher ,{
        revalidateOnFocus:false,
        revalidateIfStale:false
    });

    return {
        data,
        error,
        isLoading
    };
};

export default useSearch;

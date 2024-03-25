import useSWR from "swr";
import {Spinner} from "@nextui-org/react";
import ProductCard from "@/components/sheared/productCard/ProductCard";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const ProductOfferTab = ({offerId}) => {
    const {data, error, isLoading} = useSWR(`https://caco-dev.mimusoft.com/api/customer/offers/${offerId}/products`, fetcher, {
        revalidateOnFocus: false, dedupingInterval: 60000, // 1 minute
    });
    if (isLoading) return <div><Spinner/></div>;
    if (error) return <div>Error</div>;
    return (<div className={"grid col-span-12 h-fit md:col-span-9 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:gap-[20px] gap-2 mt-[34px]"}>
        {
            data?.response?.data.map((product, index) => (
                <ProductCard key={index} product={product}/>
            ))
        }
    </div>)
}

export default ProductOfferTab;
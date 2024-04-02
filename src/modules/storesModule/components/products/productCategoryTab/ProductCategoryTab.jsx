import useSWR from "swr";
import {useRouter} from "next/router";
import ProductCard from "@/components/sheared/productCard/ProductCard";
import {Spinner} from "@nextui-org/react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ProductCategoryTab = ({categoryId}) => {
    const router = useRouter();
    const {id} = router.query;
    const {data, error , isLoading} = useSWR(`https://caco-dev.mimusoft.com/api/customer/businesses/${id}/categories/${categoryId}/products`, fetcher, {
        revalidateOnFocus: false,
        dedupingInterval: 60000, // 1 minute
    });

    if (isLoading) return <div><Spinner/></div>
    if (error) return <div>Error</div>
return (
        <div
            className={"grid col-span-12 h-fit md:col-span-9 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:gap-[20px] gap-2 mt-[34px]"}>
            {
                data?.response?.data.map((product, index) => (<ProductCard key={index} product={product}/>))}
        </div>
)
}

export default ProductCategoryTab;
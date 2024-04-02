// ProductsList.js
import {useState, useEffect} from "react";
import useSWR from "swr";
import ProductCard from "@/components/sheared/productCard/ProductCard";
import SkeletonProducts from "@/components/sheared/skeletonProducts/SkeletonProducts";
import NotFound from "@/components/sheared/NotFound";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ProductsStoreList = ({storeId,page, search ,passMeta}) => {
    const [url, setUrl] = useState("")

    useEffect(() => {
        if (storeId) {
            setUrl(`https://caco-dev.mimusoft.com/api/customer/businesses/${storeId}/products?page=${page}&products_search=${search}`)
        }
    }, [storeId, page, search]);

    const {data, error, isLoading} = useSWR(url, fetcher, {
        revalidateOnFocus: false,
        dedupingInterval: 60000, // 1 minute
    });

    useEffect(() => {
        if (data && data.response.meta) {
            passMeta(data.response.meta);
        }
    }, [data]);

    if (isLoading) return <SkeletonProducts/>
    if (error) return <div>Error</div>;
    if (data?.response?.data.length === 0) return <NotFound title={"No Products Found"}/>;
    return (
        <div className={"grid col-span-12 h-fit md:col-span-9 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:gap-[20px] gap-2 mt-[34px]"}>
            {data?.response?.data.map((product, index) => (<ProductCard key={index} product={product}/>))}
        </div>
    );
};

export default ProductsStoreList;

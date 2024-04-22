// ProductsList.js
import {useState, useEffect} from "react";
import useSWR from "swr";
import ProductCard from "@/components/sheared/productCard/ProductCard";
import SkeletonProducts from "@/components/sheared/skeletonProducts/SkeletonProducts";
import NotFound from "@/components/sheared/NotFound";
import {fetcher} from "@/utilis/fetcherFUN";
import {strings} from "@/utilis/Localization";


const ProductsStoreList = ({fetchUrl ,passMeta}) => {
    const [url, setUrl] = useState("")

    useEffect(() => {
        if (fetchUrl) {
            setUrl(fetchUrl)
        }
    }, [fetchUrl]);

    const {data, error, isLoading} = useSWR(url, fetcher, {
        revalidateOnFocus: false,
        dedupingInterval: 60000, // 1 minute
    });

    useEffect(() => {
        if (data && data.response.meta) {
            passMeta(data.response.meta);
        }
    }, [data]);

    if (isLoading) return <SkeletonProducts col={4}/>
    if (error) return <div>Error</div>;
    if (data?.response?.data.length === 0) return <NotFound title={strings.NoItemsFound}/>;
    return (
        <div className={"grid col-span-12 h-fit md:col-span-9 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:gap-[20px] gap-2 mt-[34px]"}>
            {data?.response?.data.map((product, index) => (<ProductCard key={index} product={product}/>))}
        </div>
    );
};

export default ProductsStoreList;

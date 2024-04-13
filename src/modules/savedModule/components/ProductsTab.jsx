import useSWR from "swr";
import {getCookie} from "cookies-next";
import ProductCard from "@/components/sheared/productCard/ProductCard";
import {fetcher} from "@/utilis/fetcherFUN";
import {useEffect, useState} from "react";


export const ProductsTab = () => {
    const [products , setProducts] = useState([]);
    const {data , isLoading , error} = useSWR(`https://caco-dev.mimusoft.com/api/customer/favourites?with=business`, fetcher , {
        revalidateOnFocus:false,
    });
    useEffect(() => {
        if (data) {
            setProducts(data?.response?.data.filter(item => item.favouriteable === "product"));
        }
    }, [data]);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Failed to load</div>;
    return (
        <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 md:gap-[24px] gap-2 mt-[40px]">
                {
                    products.map((item) => (
                        <ProductCard key={item.product.uuid + Math.random().toFixed(2)} product={item.product} />
                    ))
                }
                {
                    data?.response?.data.length === 0 && <div
                    className="text-[--primary-color] text-[20px] font-bold text-center w-full"
                    >No products found</div>
                }
            </div>
        </div>
    );
}
import {useRouter} from "next/router";
import useSWR from "swr";
import {useEffect, useState} from "react";
import {Spinner} from "@nextui-org/react";
import ProductCard from "@/components/sheared/productCard/ProductCard";
import PaginationPages from "@/components/sheared/paginationPage/PaginationPage";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const AllProductsTab = () => {
    const [url, setUrl] = useState("")
    const router = useRouter()
    const storeId = router.query.id
    const [page, setPage] = useState(1);
    useEffect(() => {
        if (storeId) {
            setUrl(`https://caco-dev.mimusoft.com/api/customer/businesses/${storeId}/products?page=${page}`)
        }
    }, [storeId ,page]);
    const {data, error, isLoading} = useSWR(url, fetcher, {
        revalidateOnFocus: false, dedupingInterval: 60000, // 1 minute
    })

    const handlePageChange = (page) => {
        setPage(page)
    }


    if (isLoading) return <div><Spinner/></div>
    if (error) return <div>Error</div>
    return (<>
            <div
                className={"grid col-span-12 h-fit md:col-span-9 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:gap-[20px] gap-2 mt-[34px]"}>
                {data?.response?.data.map((product, index) => (<ProductCard key={index} product={product}/>))}
            </div>
            {data?.response?.meta["last_page"] > 1 && (
                <PaginationPages total={data.response.meta["last_page"]} current={data.response.meta["current_page"]}
                                 onChange={handlePageChange}
                />)}
        </>

    )

}

export default AllProductsTab;
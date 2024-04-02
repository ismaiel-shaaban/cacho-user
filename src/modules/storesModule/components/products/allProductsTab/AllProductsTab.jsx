import {useRouter} from "next/router";
import useSWR from "swr";
import {useEffect, useState} from "react";
import {Spinner} from "@nextui-org/react";
import ProductCard from "@/components/sheared/productCard/ProductCard";
import PaginationPages from "@/components/sheared/paginationPage/PaginationPage";
import SearchProductsInput from "@/components/sheared/searchProductsInput/SearchProductsInput";
import ProductsStoreList from "@/modules/storesModule/components/productsStoreList/ProductsStoreList";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const AllProductsTab = () => {
    const router = useRouter();
    const storeId = router.query.id;
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [meta, setMeta] = useState({});

    const handlePageChange = (page) => {
        setPage(page);
    }

    const handleSearch = (search) => {
        setSearch(search);
    };
    return (<div>
            <div className="flex justify-end">
                <SearchProductsInput searchProducts={handleSearch}/>
            </div>
            <ProductsStoreList storeId={storeId} page={page} search={search} passMeta={(meta) => {
                setMeta(meta);
            }}/>
            {meta?.last_page > 1 &&
                <PaginationPages total={meta.last_page} current={page} onChange={handlePageChange}/>}

        </div>

    )

}

export default AllProductsTab;

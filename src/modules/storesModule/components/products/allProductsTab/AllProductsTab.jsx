import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import PaginationPages from "@/components/sheared/paginationPage/PaginationPage";
import SearchProductsInput from "@/components/sheared/searchProductsInput/SearchProductsInput";
import ProductsStoreList from "@/modules/storesModule/components/productsStoreList/ProductsStoreList";

const AllProductsTab = () => {
    const router = useRouter();
    const storeId = router.query.id;
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [url, setUrl] = useState("");
    const [meta, setMeta] = useState({});

    useEffect(() => {
        if (storeId) {
            setUrl(`https://caco-dev.mimusoft.com/api/customer/businesses/${storeId}/products?page=${page}&products_search=${search}&with=business`);
        }
    }, [page, search, storeId]);

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
        <ProductsStoreList fetchUrl={url} passMeta={(meta) => {
            setMeta(meta);
        }}/>
        {meta?.last_page > 1 &&
            <PaginationPages total={meta.last_page} current={page} onChange={handlePageChange}/>}
    </div>)
}

export default AllProductsTab;

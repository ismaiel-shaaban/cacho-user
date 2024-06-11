import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SearchProductsInput from "@/components/sheared/searchProductsInput/SearchProductsInput";
import ProductsStoreList from "@/modules/storesModule/components/productsStoreList/ProductsStoreList";
import PaginationPages from "@/components/sheared/paginationPage/PaginationPage";

const ProductCategoryTab = ({ categoryId }) => {
    const router = useRouter();
    const { id } = router.query;
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [url, setUrl] = useState("");
    const [meta, setMeta] = useState({});
    useEffect(() => {
        if (id) {
            setUrl(`https://cachooapp.com/api/customer/businesses/${id}/categories/${categoryId}/products?page=${page}&products_search=${search}&with=business`);
        }
    }, [page, search, id, categoryId]);
    const handlePageChange = (page) => {
        setPage(page);
    }

    const handleSearch = (search) => {
        setSearch(search);
    };
    return (
        <div>
            <div className="flex justify-start">
                <SearchProductsInput searchProducts={handleSearch} />
            </div>
            <ProductsStoreList fetchUrl={url} passMeta={(meta) => {
                setMeta(meta);
            }} />
            {meta?.last_page > 1 &&
                <PaginationPages total={meta.last_page} current={page} onChange={handlePageChange} />}
        </div>
    )
}

export default ProductCategoryTab;
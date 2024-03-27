import {useRouter} from "next/router";
import useGetOffersProducts from "@/modules/offersModules/hooks/getOffersProducts";
import {Spinner} from "@nextui-org/react";
import OfferProductsModule from "@/modules/offersModules/offerProductsModule/OfferProductsModule";
import PaginationPages from "@/components/sheared/paginationPage/PaginationPage";
import {useState} from "react";

const OfferProductPage = () => {
    const [page, setPage] = useState(1);
    const router = useRouter();
    const { id } = router.query;
    const { data, error, isLoading } = useGetOffersProducts(id ,page);

    const handlePageChange = (page) => {
        setPage(page);
    }
    if (isLoading) return <div><Spinner/></div>;
    if (error) return <div>error</div>;
    return (
        <section className="container">
            <OfferProductsModule products={data?.response?.data} />
            {data?.response?.meta["last_page"] > 1 && (
                <PaginationPages total={data.response.meta["last_page"]} current={data.response.meta["current_page"]}
                                 onChange={handlePageChange}
                />)}
        </section>
    )
}
export default OfferProductPage;
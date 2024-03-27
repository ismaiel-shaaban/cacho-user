import React, {lazy, Suspense, useState} from 'react';
import {Spinner} from "@nextui-org/react";
import useGetOffersData from "@/hooks/getoffersData";
import PaginationPages from "@/components/sheared/paginationPage/PaginationPage";

const OffersModules = lazy(() => import("@/modules/offersModules/OffersModules"));

const Offers = () => {
    const [page, setPage] = useState(1);
    const {data , error , isLoading} = useGetOffersData(page);

    const handlePageChange = (page) => {
        setPage(page);
    }
    if(isLoading) return <Spinner/>
    if(error) return <div>{error}</div>
    return (
        <Suspense fallback={<Spinner/>}>
            <OffersModules hotOffers={data?.response?.data} />
            {data?.response?.meta["last_page"] > 1 && (
                <PaginationPages total={data.response.meta["last_page"]} current={data.response.meta["current_page"]}
                                 onChange={handlePageChange}
                />)}
        </Suspense>
    );
}

export default Offers;
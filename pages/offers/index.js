import Head from "next/head";
import { useState} from 'react';
import {Spinner} from "@nextui-org/react";
import useGetOffersData from "@/hooks/getoffersData";
import PaginationPages from "@/components/sheared/paginationPage/PaginationPage";
import OffersModules from "@/modules/offersModules/OffersModules";
import SkeletonProducts from "@/components/sheared/skeletonProducts/SkeletonProducts";


const Offers = () => {
    const [page, setPage] = useState(1);
    const {data , error , isLoading} = useGetOffersData(page);

    const handlePageChange = (page) => {
        setPage(page);
    }
    if(isLoading) return <div className="container">
        <SkeletonProducts col={4}/>
    </div>
    if(error) return <div>{error}</div>
    return (
        <>
            <Head>
                <title>
                    {
                        data?.response?.meta["last_page"] > 1 ? `Offers Page ${data?.response?.meta["current_page"]} of ${data?.response?.meta["last_page"]}` : "Offers Page"
                    }
                </title>
            </Head>
            <OffersModules hotOffers={data?.response?.data} />
            {data?.response?.meta["last_page"] > 1 && (
                <PaginationPages total={data.response.meta["last_page"]} current={data.response.meta["current_page"]}
                                 onChange={handlePageChange}
                />)}
        </>
    );
}

export default Offers;
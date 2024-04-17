import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import StoreVideo from "@/modules/storesModule/components/storeVideo/StoreVideo";
import {useStoreData} from "@/modules/storesModule/hooks/getStore";
import {Spinner} from "@nextui-org/react";
import StoreTabs from "@/modules/storesModule/components/storeTabs/StoreTabs";
import SkeletonProducts from "@/components/sheared/skeletonProducts/SkeletonProducts";
import ErrorFetch from "@/components/sheared/erorrFetch/ErrorFetch";
import {getCookie} from "cookies-next";

const StoreModule = ({passTitle}) => {
    const router = useRouter();
    const [mainData, setMainData] = useState(null);
    const [aboutUs, setAboutUs] = useState(null);
    const {id} = router.query;
    const {data, error, isLoading} = useStoreData(id)

    useEffect(() => {
        if (data) {
            const {
                email, whatsapp, phone, image, title, rating, reviewsCount, status, workingDays, images, about, address ,isOpen
            } = data.response;

            setMainData({email, whatsapp, phone});
            setAboutUs({image, title, rating, reviewsCount, status, workingDays, images, about, address , isOpen});
            passTitle(title);
        }
    }, [data]);
    if (isLoading) return <SkeletonProducts col={4}/>
    if (error) return <ErrorFetch/>;
    return (<section>
        <StoreVideo video={data?.response?.video}/>
        <StoreTabs mainData={mainData} aboutUs={aboutUs} categories={data?.response?.categories} isServiceProvider={data?.response?.isServiceProvider}/>
    </section>);
};

export default StoreModule;


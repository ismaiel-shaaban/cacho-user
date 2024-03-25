import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import StoreVideo from "@/modules/storesModule/components/storeVideo/StoreVideo";
import {useStoreData} from "@/modules/storesModule/hooks/getStore";
import {Spinner} from "@nextui-org/react";
import StoreTabs from "@/modules/storesModule/components/storeTabs/StoreTabs";

const StoreModule = () => {
    const router = useRouter();
    const [mainData, setMainData] = useState(null);
    const [aboutUs, setAboutUs] = useState(null);
    const {id} = router.query;
    const {data, error, isLoading} = useStoreData(id);

    useEffect(() => {
        if (data) {
            const {
                email, whatsapp, phone, image, title, rating, reviewsCount, status, workingDays, images, about, address
            } = data.response;

            setMainData({email, whatsapp, phone});
            setAboutUs({image, title, rating, reviewsCount, status, workingDays, images, about, address});
        }
    }, [data]);

    return (<section>
        {isLoading ? <div><Spinner size="md"/></div> : error ? <div>Error</div> : <>
            <StoreVideo video={data?.response?.video}/>
            <StoreTabs mainData={mainData} aboutUs={aboutUs} categories={data?.response?.categories}/>
        </>}
    </section>);
};

export default StoreModule;


import {useEffect, useState} from "react";
import StoreVideo from "@/modules/storesModule/components/storeVideo/StoreVideo";
import StoreTabs from "@/modules/storesModule/components/storeTabs/StoreTabs";
import {useRouter} from "next/router";
import {useStoreData} from "@/modules/storesModule/hooks/getStore";
import {Spinner} from "@nextui-org/react";

const StoreModule = ({storeData}) => {
    const [aboutUs, setAboutUs] = useState({});
    const router = useRouter();
    const {id} = router.query;
    const {data, error, isLoading} = useStoreData(id);

    useEffect(() => {
        if (storeData) {
            const {storeImage, storeName, rate, reviews, storeLocation, status, open, description, images} = storeData;
            setAboutUs({storeImage, storeName, rate, reviews, storeLocation, status, open, description, images});
        }
    }, [storeData]);

    if (isLoading) return <div><Spinner size={"md"}/></div>;
    if (error) return <div>Error</div>;

    return (<section>
        <StoreVideo video={storeData.videoLink}/>
        <StoreTabs aboutUs={aboutUs} products={storeData.products} offers={storeData.offers}
                   reviews={storeData.reviews}/>
    </section>);
};

export default StoreModule;

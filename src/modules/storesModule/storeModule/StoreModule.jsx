import {useEffect, useState} from "react";
import StoreVideo from "@/modules/storesModule/components/storeVideo/StoreVideo";
import StoreTabs from "@/modules/storesModule/components/storeTabs/StoreTabs";

const StoreModule = ({storeData}) => {
    const [aboutUs, setAboutUs] = useState({});

    useEffect(() => {
        if (storeData) {
            const {storeImage, storeName, rate, reviews, storeLocation, status, open, description, images} = storeData;
            setAboutUs({storeImage, storeName, rate, reviews, storeLocation, status, open, description, images});
        }
    }, [storeData]);

    if (!storeData) return <div>Loading...</div>;

    return (<section>
        <StoreVideo video={storeData.videoLink}/>
        <StoreTabs aboutUs={aboutUs} products={storeData.products} offers={storeData.offers}
                   reviews={storeData.reviews}/>
    </section>);
};

export default StoreModule;

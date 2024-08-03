import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import StoreVideo from "@/modules/storesModule/components/storeVideo/StoreVideo";
import { useStoreData } from "@/modules/storesModule/hooks/getStore";
import StoreTabs from "@/modules/storesModule/components/storeTabs/StoreTabs";
import SkeletonProducts from "@/components/sheared/skeletonProducts/SkeletonProducts";
import ErrorFetch from "@/components/sheared/erorrFetch/ErrorFetch";

// Function to extract ID from URL path
const extractIdFromUrl = (url) => {
    const match = url.match(/\/stores\/([a-zA-Z0-9-]+)\//);
    return match ? match[1] : null;
};

const StoreModule = ({ passTitle }) => {
    const router = useRouter();
    const [mainData, setMainData] = useState(null);
    const [aboutUs, setAboutUs] = useState(null);
    const [id, setId] = useState(null);

    useEffect(() => {
        if (router.asPath) {
            const extractedId = extractIdFromUrl(router.asPath);
            setId(extractedId);
        }
    }, [router.asPath]);

    const { data, error, isLoading } = useStoreData(id);

    useEffect(() => {
        if (data) {
            const {
                email, whatsapp, phone, image, title, rating, reviewsCount, status, workingDays, images, about, address, isOpen, isFavourite, chatEnabled, callEnabled, whatsappEnabled, deliveryCompanies, deliveryCompaniesCount, location, uuid
            } = data.response;

            setMainData({ email, whatsapp, phone, chatEnabled, callEnabled, whatsappEnabled, deliveryCompanies, deliveryCompaniesCount, location });
            setAboutUs({ image, title, rating, reviewsCount, status, workingDays, images, about, address, isOpen, isFavourite, uuid });
            passTitle(title);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    if (!id) return null; // Render nothing if id is not available
    if (isLoading) return <SkeletonProducts col={2} />
    if (error) return <ErrorFetch />;

    return (
        <div>
            <StoreVideo video={data?.response?.video} image={data?.response?.image} />
            <div className="container">
                <StoreTabs mainData={mainData} aboutUs={aboutUs} categories={data?.response?.categories} isServiceProvider={data?.response?.isServiceProvider} />
            </div>
        </div>
    );
};

export default StoreModule;

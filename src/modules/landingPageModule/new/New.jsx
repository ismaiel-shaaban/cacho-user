import useSWR from "swr";
import { Spinner } from "@nextui-org/react";
import StoresCard from "@/modules/storesModule/components/storesCards/storesCard/StoresCard";
import { strings } from "@/utilis/Localization";
import SectionTitle from "@/modules/landingPageModule/components/sectionTitle/SectionTitle";
import ErrorFetch from "@/components/sheared/erorrFetch/ErrorFetch";
import SkeletonProducts from "@/components/sheared/skeletonProducts/SkeletonProducts";
import useMediaQuery from "@/utilis/useMediaQuery";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const NewStores = () => {
    const isSmallScreen = useMediaQuery(640);
    const {
        data, error, isLoading
    } = useSWR(`https://management.cachooapp.com/api/customer/businesses?with=businessType`, fetcher, {
        revalidateOnFocus: true, dedupingInterval: 60000, // 1 minute
    })
    if (isLoading) return <div className="container mt-[40px]">
        <SkeletonProducts col={4} />
    </div>;
    if (error) return <ErrorFetch />
    const itemsToDisplay = isSmallScreen
        ? data.response.data.slice(0, 2)
        : data.response.data;
    return (
        <section className="container mt-[30px]" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
            <SectionTitle title={strings.New} link="/Stores" />
            <div
                className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-[24px] gap-2 mt-[25px]">
                {itemsToDisplay.slice(0, 8).map((store) => (store ? <StoresCard key={store?.uuid} store={store} /> : null))}
            </div>
        </section>

    )
}

export default NewStores;
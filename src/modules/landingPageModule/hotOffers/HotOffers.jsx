import { strings } from "@/utilis/Localization";
import SectionTitle from "@/modules/landingPageModule/components/sectionTitle/SectionTitle";
import HotOfferList from "@/modules/landingPageModule/hotOffers/components/hotOfferList/HotOfferList";
import useGetOffersData from "@/hooks/getoffersData";
import SkeletonProducts from "@/components/sheared/skeletonProducts/SkeletonProducts";
import ErrorFetch from "@/components/sheared/erorrFetch/ErrorFetch";
import useMediaQuery from "@/utilis/useMediaQuery";


const HotOffers = () => {
    const { data, error, isLoading } = useGetOffersData(0, false);
    const isSmallScreen = useMediaQuery(640);

    if (isLoading) return (
        <div className="container">
            <SkeletonProducts col={4} />
        </div>
    );

    if (error) return <ErrorFetch />;

    const itemsToDisplay = isSmallScreen
        ? data.response.data.slice(0, 2)
        : data.response.data;

    return (
        <section className="container mx-auto mt-[30px]" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
            <SectionTitle title={strings.HotOffers} link="/offers" />
            <HotOfferList hotOffers={itemsToDisplay} count={8} />
        </section>
    );
};

export default HotOffers;

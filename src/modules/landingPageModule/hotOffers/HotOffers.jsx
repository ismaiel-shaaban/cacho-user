import {strings} from "@/utilis/Localization";
import SectionTitle from "@/modules/landingPageModule/components/sectionTitle/SectionTitle";
import HotOfferList from "@/modules/landingPageModule/hotOffers/components/hotOfferList/HotOfferList";
import useGetOffersData from "@/hooks/getoffersData";
import SkeletonProducts from "@/components/sheared/skeletonProducts/SkeletonProducts";
import ErrorFetch from "@/components/sheared/erorrFetch/ErrorFetch";


const HotOffers = () => {
    const {data , error , isLoading} = useGetOffersData(0,false);

    if (isLoading) return <div className="container">
        <SkeletonProducts col={4} />
    </div>
    if (error) return <ErrorFetch/>;
    return (
        <section className="container mx-auto mt-[30px]">
            <SectionTitle title={strings.HotOffers} link="/offers"/>
            <HotOfferList hotOffers={data.response.data} count={8}/>
        </section>
    );
}

export default HotOffers;
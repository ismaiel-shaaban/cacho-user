import {strings} from "@/utilis/Localization";
import SectionTitle from "@/modules/landingPageModule/components/sectionTitle/SectionTitle";
import HotOfferList from "@/modules/landingPageModule/hotOffers/components/hotOfferList/HotOfferList";
import useGetOffersData from "@/hooks/getoffersData";
import {Spinner} from "@nextui-org/react";


const HotOffers = () => {
    const {data , error , isLoading} = useGetOffersData();

    if (isLoading) return <Spinner/>;
    if (error) return <p>Error</p>;
    return (
        <section className="container mx-auto mt-[50px]">
            <SectionTitle title={strings.HotOffers} link="/offers"/>
            <HotOfferList hotOffers={data.response.data} count={8}/>
        </section>
    );
}

export default HotOffers;
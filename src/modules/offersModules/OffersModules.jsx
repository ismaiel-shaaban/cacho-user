import HotOfferList from "@/modules/landingPageModule/hotOffers/components/hotOfferList/HotOfferList";


const OffersModules = ({hotOffers}) => {
    return (
        <section className="container mx-auto mt-[30px]">
            <HotOfferList hotOffers={hotOffers} />
        </section>
    );
}

export default OffersModules;
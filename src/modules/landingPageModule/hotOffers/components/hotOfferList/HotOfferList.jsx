import OfferCard from "@/components/sheared/offerCard/OfferCard";

const HotOfferList = ({hotOffers, count}) => {
    return (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {count && hotOffers?.slice(0,count).map((offer, index) => (<OfferCard key={index} offer={offer}/>))}
        {!count && hotOffers?.map((offer, index) => (<OfferCard key={index} offer={offer}/>))}
    </div>);
};

export default HotOfferList;

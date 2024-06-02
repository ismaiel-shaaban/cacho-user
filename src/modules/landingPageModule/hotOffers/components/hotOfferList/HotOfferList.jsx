import OfferCard from "@/components/sheared/offerCard/OfferCard";
import {strings} from "@/utilis/Localization";

const HotOfferList = ({hotOffers, count}) => {
    return (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[25px]" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
        {count && hotOffers?.slice(0,count).map((offer, index) => (<OfferCard key={index} offer={offer}/>))}
        {!count && hotOffers?.map((offer, index) => (<OfferCard key={index} offer={offer}/>))}
    </div>);
};

export default HotOfferList;

import {strings} from "@/utilis/Localization";
import ProductSection from "@/components/sheared/productSection/ProductSection";

const HotOffers = ({offersData}) => {
    return (
        <ProductSection title={strings.HotOffers} data={offersData} link={"#"} />
    );
}

export default HotOffers;
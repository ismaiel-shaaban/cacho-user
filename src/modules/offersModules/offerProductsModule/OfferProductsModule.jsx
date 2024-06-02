import CardsLayout from "@/components/sheared/cardsLayout/CardsLayout";
import ProductCard from "@/components/sheared/productCard/ProductCard";
import {strings} from "@/utilis/Localization";

const OfferProductsModule = ({ products }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:gap-[20px] gap-2 mt-[34px]" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
            {products?.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
}

export default OfferProductsModule;
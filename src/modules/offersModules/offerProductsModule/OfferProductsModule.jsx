import CardsLayout from "@/components/sheared/cardsLayout/CardsLayout";
import ProductCard from "@/components/sheared/productCard/ProductCard";

const OfferProductsModule = ({ products }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:gap-[20px] gap-2 mt-[34px]">
            {products?.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
}

export default OfferProductsModule;
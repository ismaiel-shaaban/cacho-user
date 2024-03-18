import ProductSlider from "@/modules/productPageModule/productSlider/ProductSlider";
import ProductInfo from "@/modules/productPageModule/productInfo/ProductInfo";
import ProductReviews from "@/modules/productPageModule/productReviwes/ProductReviews";

const ProductPage = ({ product }) => {
    return (
        <section className="container">
            <div>
                <ProductSlider />
                <ProductInfo />
                <ProductReviews />
            </div>
        </section>
    );
}

export default ProductPage;
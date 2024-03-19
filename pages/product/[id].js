import ProductSlider from "@/modules/productPageModule/productSlider/ProductSlider";
import ProductInfo from "@/modules/productPageModule/productInfo/ProductInfo";
import ProductReviews from "@/modules/productPageModule/productReviwes/ProductReviews";
import SimilarProducts from "@/modules/productPageModule/similarProducts/SimilarProducts";
import {Divider} from "@nextui-org/react";


const ProductPage = ({ product }) => {
    return (
        <section className="container">
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2  md:gap-[30px] mt-6">
                <ProductSlider />
                <ProductInfo />
                <ProductReviews />
            </div>
            <Divider className="mt-10"/>
            <SimilarProducts/>
        </section>
    );
}

export default ProductPage;
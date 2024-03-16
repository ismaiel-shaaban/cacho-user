import ProductCard from "@/components/sheared/productCard/ProductCard";
import {strings} from "@/utilis/Localization";
import SidebarProducts from "@/components/sheared/sidebarProducts/SidebarProducts";

const Products = ({products}) => {
    return (
        <div className="md:grid md:grid-cols-12 gap-[40px]" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
            <SidebarProducts/>
            <div className="grid col-span-12 h-fit md:col-span-9 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:gap-[20px] gap-2 mt-[34px]">
                {
                    products.map((product, index) => (
                        <ProductCard key={index} product={product}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Products;
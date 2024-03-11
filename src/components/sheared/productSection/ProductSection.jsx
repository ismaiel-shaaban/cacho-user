import { useEffect, useState } from "react";
import ProductCard from "@/components/sheared/productCard/ProductCard";
import SectionTitle from "@/modules/landingPageModule/components/sectionTitle/SectionTitle";

const ProductSection = ({ title, data , link}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (data) {
            setProducts(data);
        }
    }, [data]);

    if (products.length === 0) return <div>Loading...</div>;

    return (
        <section className="container mt-[30px]">
            <SectionTitle title={title} link={link} />
            <div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-[20px] gap-2 mt-[40px]">
                    {products.map((product ,index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
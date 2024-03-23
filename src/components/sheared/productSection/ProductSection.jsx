import { useEffect, useState } from "react";
import ProductCard from "@/components/sheared/productCard/ProductCard";
import SectionTitle from "@/modules/landingPageModule/components/sectionTitle/SectionTitle";
import CardsLayout from "@/components/sheared/cardsLayout/CardsLayout";

const ProductSection = ({ title, data , link}) => {
    return (
        <section className="container mt-[30px]">
            <SectionTitle title={title} link={link} />
            <div>
                <CardsLayout>
                    {data.map((product ,index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </CardsLayout>
            </div>
        </section>
    );
};

export default ProductSection;
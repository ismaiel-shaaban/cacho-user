import {strings} from "@/utilis/Localization";
import {useEffect, useState} from "react";
import ProductCard from "@/components/sheared/productCard/ProductCard";
import SectionTitle from "@/modules/landingPageModule/components/sectionTitle/SectionTitle";

const HotOffers = ({offersData}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        offersData && setData(offersData);
    }, []);
    // make loading
    if (data.length === 0) return <div>Loading...</div>
    return (
        <section className="container mx-auto px-4 mt-[40px]">
            <SectionTitle title={strings.HotOffers} link={"#"}/>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-[20px] gap-2 mt-[40px]">
                {data.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </section>
    );
}

export default HotOffers;
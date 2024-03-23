import {strings} from "@/utilis/Localization";
import ProductSection from "@/components/sheared/productSection/ProductSection";
import {useEffect, useState} from "react";
import useSWR from "swr";


const fetcher = (...args) => fetch(...args).then(res => res.json());
const HotOffers = () => {
    const [offersData, setOffersData] = useState([]);
    const { data, error } = useSWR("https://caco-dev.mimusoft.com/api/customer/offers", fetcher);

    useEffect(() => {
        if (data) {
            setOffersData(data.response.data );
            // console.log(data.response.data);
        }
    }, [data]);

    if (error) return <div>Error loading categories...</div>;
    if (!data) return <div>Loading categories...</div>;
    return <div>Loading categories...</div>;
    return (
        <ProductSection title={strings.HotOffers} data={offersData} link={"#"} />
    );
}

export default HotOffers;
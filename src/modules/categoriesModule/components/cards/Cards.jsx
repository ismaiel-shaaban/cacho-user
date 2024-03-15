import {useEffect, useState} from 'react'
import Card from "@/modules/categoriesModule/components/cards/card/Card";

const Cards = ({businessData}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        if (businessData) {
            setData(businessData);
        }
    }, []);
    if (!data) return <div>Loading...</div>;
    return (
        <div
            className={`grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 md:gap-[20px] gap-2 mt-[34px]`}>
            {data.map((item) => (<Card key={item.id} title={item.title} image={item.image} type={item.type}/>))}
        </div>)
}

export default Cards
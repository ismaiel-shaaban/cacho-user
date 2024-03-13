import {useEffect, useState} from 'react'
import Card from "@/modules/categoriesModule/components/cards/card/Card";
import CardsLayout from "@/components/sheared/cardsLayout/CardsLayout";

const Cards = ({businessData}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        if (businessData) {
            setData(businessData);
        }
    }, []);
    if (!data) return <div>Loading...</div>;
    return (
        <div>
            <CardsLayout>
                {data.map((item) => (
                        <Card key={item.id} title={item.title} image={item.image}/>
                    )
                )}
            </CardsLayout>
        </div>
    )
}

export default Cards
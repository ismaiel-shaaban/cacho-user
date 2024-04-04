import {useEffect, useState} from 'react'
import Card from "@/modules/categoriesModule/components/cards/card/Card";

const Cards = ({businessData}) => {
    return (
        <div
            className={`grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 md:gap-[20px] gap-2 mt-[34px]`}>
            {businessData.map((item) => (<Card item={item} key={item.uuid}/>))}
        </div>)
}

export default Cards
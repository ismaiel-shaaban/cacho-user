import Cards from '@/modules/categoriesModule/components/cards/Cards'
import React from 'react'
import business_1 from "../../public/BusinessTypes/img-1.jpg";
import business_2 from "../../public/BusinessTypes/img-2.jpg";
import business_3 from "../../public/BusinessTypes/img-3.jpg";
import business_4 from "../../public/BusinessTypes/img-4.jpg";
import business_5 from "../../public/BusinessTypes/img-5.jpg";
import business_6 from "../../public/BusinessTypes/img-6.jpg";
import business_7 from "../../public/BusinessTypes/img-7.jpg";
import business_8 from "../../public/BusinessTypes/img-8.jpg";

const businessData = [
  {
    id: 1,
    image: business_1,
    title: "Restaurant",
  },
  {
    id: 2,
    image: business_2,
    title: "Cafe",
  },
  {
    id: 3,
    image: business_3,
    title: "Gym",
  },
  {
    id: 4,
    image: business_4,
    title: "Salon",
  },
  {
    id: 5,
    image: business_5,
    title: "Spa",
  },
  {
    id: 6,
    image: business_6,
    title: "Bakery",
  },
  {
    id: 7,
    image: business_7,
    title: "Bar",
  },
  {
    id: 8,
    image: business_8,
    title: "Hotel",
  }
]

const Categories = ({businessData}) => {
  return (
      <main className="container">
        <Cards businessData={businessData}/>
      </main>
  )
}

export default Categories

export async function getServerSideProps() {
  return {
    props: {
      businessData,
    }
  }
}

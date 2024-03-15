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
import {BreadcrumbItem, Breadcrumbs} from "@nextui-org/react";
import Link from "next/link";
import {strings} from "@/utilis/Localization";

const businessData = [
  {
    id: 1,
    image: business_1,
    title: "Restaurant",
    type: "restaurant"
  },
  {
    id: 2,
    image: business_2,
    title: "Cafe",
    type: "cafe"
  },
  {
    id: 3,
    image: business_3,
    title: "Gym",
    type: "gym"
  },
  {
    id: 4,
    image: business_4,
    title: "Salon",
    type: "salon"
  },
  {
    id: 5,
    image: business_5,
    title: "Spa",
    type: "spa"
  },
  {
    id: 6,
    image: business_6,
    title: "Bakery",
    type: "bakery"
  },
  {
    id: 7,
    image: business_7,
    title: "Bar",
    type: "bar"
  },
  {
    id: 8,
    image: business_8,
    title: "Hotel",
    type: "hotel"
  }
]

const Categories = ({businessData}) => {
  return (
      <main className="container">
        <Breadcrumbs
            className="mt-4"
            separator="/"
            itemClasses={{
              separator: "px-2",
              item: "data-[current=true]:text-[--primary-color] text-[16px] font-[500]",
            }}
            dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}
        >
          <BreadcrumbItem><Link href={"/"}>{strings.Home}</Link> </BreadcrumbItem>
          <BreadcrumbItem className="text-[--primary-color]">{strings.Categories}</BreadcrumbItem>
        </Breadcrumbs>
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

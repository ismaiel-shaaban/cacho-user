import Cards from '@/modules/categoriesModule/components/cards/Cards'
import React, {useEffect, useState} from 'react'
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
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { data, error } = useSWR("https://caco-dev.mimusoft.com/api/customer/business-types", fetcher);

  useEffect(() => {
    if (data) {
      setCategories(data.response.data );
    }
  }, [data]);

  if (error) return <div>Error loading categories...</div>;
  if (!data) return <div>Loading categories...</div>;
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
        <Cards businessData={categories}/>
      </main>
  )
}

export default Categories
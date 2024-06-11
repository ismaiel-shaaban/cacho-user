import Cards from '@/modules/categoriesModule/components/cards/Cards'
import React, { useEffect, useState } from 'react'
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Link from "next/link";
import { strings } from "@/utilis/Localization";
import useSWR from "swr";
import Head from "next/head";
import { fetcher } from "@/utilis/fetcherFUN";


const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { data, error } = useSWR("https://cachooapp.com/api/customer/business-types", fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false
  });

  useEffect(() => {
    if (data) {
      setCategories(data.response.data);
    }
  }, [data]);

  if (error) return <div>Error loading categories...</div>;
  if (!data) return <div>Loading categories...</div>;
  return (
    <main className="container">
      <Head>
        <title>Categories</title>
      </Head>
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
      <Cards businessData={categories} />
    </main>
  )
}

export default Categories
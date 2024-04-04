import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Card from "@/modules/categoriesModule/components/cards/card/Card";
import SectionTitle from "@/modules/landingPageModule/components/sectionTitle/SectionTitle";
import { strings } from "@/utilis/Localization";
import {Fragment, useEffect, useState} from "react";
import CategoriesSkeleton from "@/modules/landingPageModule/categories/components/CategoriesSkeleton";
import ErrorFetch from "@/components/sheared/erorrFetch/ErrorFetch";

const fetcher = (...args) => fetch(...args).then(res => res.json());
const Categories = () => {
    const [categories, setCategories] = useState([]);
    const { data, error , isLoading} = useSWR("https://caco-dev.mimusoft.com/api/customer/business-types", fetcher);

    useEffect(() => {
        if (data) {
            setCategories(data.response.data );
            console.log(data.response.data);
        }
    }, [data]);

    if (error) return <ErrorFetch/>;

    return (
        <section className="business-types container mt-[30px]">
            <SectionTitle title={strings.businessTypes} link="/categories" />
            <div className="w-100 mt-[25px]">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    slidesPerView={7}
                    freeMode={true}
                    spaceBetween={20}
                    centeredSlides={false}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                    }}
                >
                    <>
                        {isLoading ? (
                            [...Array(8)].map((_, index) => (
                                <SwiperSlide key={index}>
                                    <CategoriesSkeleton />
                                </SwiperSlide>
                            ))
                        ) : (
                            [...Array(3)].map((_, index) => (
                                <Fragment key={index}>
                                    {categories.map((item) => (
                                        <SwiperSlide key={item.index}>
                                            <Card key={item.index} item={item} />
                                        </SwiperSlide>
                                    ))}
                                </Fragment>
                            ))

                        )}
                    </>

                </Swiper>
            </div>
        </section>
    );
};

export default Categories;
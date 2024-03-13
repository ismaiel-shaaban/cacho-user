import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Card from "@/modules/categoriesModule/components/cards/card/Card";
import SectionTitle from "@/modules/landingPageModule/components/sectionTitle/SectionTitle";
import { strings } from "@/utilis/Localization";

const Categories = ({ businessData }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (businessData) {
            setData(businessData);
        }
    }, [businessData]);

    return (
        <section className="business-types container mt-[30px]">
            <SectionTitle title={strings.Categories} link="/Categories" />
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
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Card title={item.title} image={item.image} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Categories;
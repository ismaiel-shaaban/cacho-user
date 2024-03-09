import Image from "next/image";
import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, FreeMode} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Card from "@/modules/businessTypesModule/components/cards/card/Card";
import SectionTitle from "@/modules/landingPageModule/components/sectionTitle/SectionTitle";


const BusinessTypes = ({businessData}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        if (businessData) {
            setData(businessData)
        }
    }, [businessData])
    return (
        <section className="business-types container mx-auto px-4 mt-[30px]">
            <SectionTitle title="Business Types" description="Choose your business type"/>
            <div className="w-100 mt-[25px]">
                <Swiper
                    modules={[Autoplay ,FreeMode]}
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
                    {data.map((item) => {
                        return <SwiperSlide key={item.id}>
                            <Card title={item.title} image={item.image}/>
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default BusinessTypes
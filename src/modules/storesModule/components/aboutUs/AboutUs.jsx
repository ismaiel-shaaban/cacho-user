import useSWR from "swr";
import Rating from "@/components/sheared/rateing/Rating";
import { Chip } from "@nextui-org/react";
import { GoDotFill } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import LocationIcon from "@/utilis/Icons/LocationIcon";
import { strings } from "@/utilis/Localization";
import { Fragment, useEffect, useState } from "react";
import { fetcher } from "@/utilis/fetcherFUN";
import CategoriesSkeleton from "@/modules/landingPageModule/categories/components/CategoriesSkeleton";
import Image from "next/image";
// import "./AboutUs.css"

const AboutUs = ({ aboutUs }) => {
    const [productsImages, setProductsImages] = useState([]);
    const {
        data,
        error,
        isLoading
    } = useSWR(`https://cachooapp.com/api/customer/businesses/${aboutUs.uuid}/products`, fetcher)
    useEffect(() => {
        if (data?.response?.data.length > 0) {
            let images = data.response.data.flat().reduce((acc, item) => {
                if (item.images) {
                    acc.push(...item.images);
                }
                return acc;
            }, []);
            setProductsImages(images);
        }
    }, [data]);


    return (<div dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
        <div className="flex items-end flex-wrap gap-2 mt-10 md:mt-10 lg:mt-0 md:gap-[40px]">
            <div className="flex gap-2">
                <Image quality={100} width={60} height={60} src={aboutUs.image} alt={aboutUs.title}
                    className="block w-[60px] object-cover h-[60px] rounded-md overflow-hidden" />
                <span className="flex flex-col justify-between">
                    <span className="text-[20px] font-[500]">{aboutUs.title}</span>
                    <Rating rating={aboutUs.rating} ratingCount={aboutUs.reviewsCount} />
                </span>

            </div>
            <div className="flex items-center gap-[20px]">
                <Chip
                    classNames={{ base: `text-white ${aboutUs.isOpen ? "bg-success" : "bg-[--red]"}` }}
                    endContent={aboutUs.isOpen ?
                        <GoDotFill /> : null}>{aboutUs.isOpen ? strings.Open : strings.Closed}</Chip>
                {aboutUs.workingDays &&
                    <Chip variant="bordered" classNames={{
                        base: "border-[--primary-color] text-[--primary-color]"
                    }}>{aboutUs.workingDays}</Chip>
                }
            </div>
        </div>
        <div>
            <h3 className="text-[20px] font-[600] my-[20px]">{strings.Images}
                <span className="text-[14px] font-[400]"> ({productsImages.length})</span>
            </h3>
            <Swiper
                modules={[Autoplay, FreeMode]}
                className={`about-swiper`}
                slidesPerView={7}
                freeMode={true}
                spaceBetween={10}
                centeredSlides={false}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    319: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    425: {
                        slidesPerView: 3,
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
                {isLoading ? (
                    [...Array(8)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <CategoriesSkeleton />
                        </SwiperSlide>
                    ))
                ) : (
                    <Fragment>
                        {
                            productsImages.map((image, index) => (
                                <SwiperSlide key={`${index}`}>

                                    <Image quality={100} width={150} height={150} src={image} alt="product"
                                        className="object-cover !w-[160px] !h-[160px] rounded" />

                                </SwiperSlide>
                            ))
                        }
                    </Fragment>
                )}
            </Swiper>
        </div>
        {aboutUs.about &&
            <div>
                <h3 className="text-[20px] font-[600] mb-[10px] mt-[24px]">{strings.Description}</h3>
                <p className="text-[18px] font-[500]">{aboutUs.about}</p>
            </div>
        }
        {aboutUs.address && <div>
            <h3 className="text-[20px] font-[600] mb-[10px] mt-[24px]">{strings.Location}</h3>
            <p className="text-[18px] font-[500] text-[--primary-color] flex gap-3">{aboutUs.address}
                <span><LocationIcon /></span></p>
        </div>}
    </div>)
}

export default AboutUs;
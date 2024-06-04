import Image from 'next/image'
import Link from "next/link";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GoArrowUpRight } from "react-icons/go";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import classes from './Panner.module.css'
import useSWR from "swr";
import SkeletonPanner from "@/modules/landingPageModule/pannerModule/components/SkeletonPanner";

const fetcher = (url) => fetch(url).then((res) => res.json())
const Panner = () => {
    const { data, error, isLoading } = useSWR('https://caco-dev.mimusoft.com/api/customer/banners', fetcher, {
        revalidateOnFocus: true,
        revalidateIfStale: false
    })
    if (isLoading) return <div className="container mt-[20px]">
        <SkeletonPanner />
    </div>
    if (error) return <div>{error}</div>

    console.log("data" ,data)
    return (<section className="panner container mt-[20px]">

        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true, el: '.swiper-paginationPage', type: 'bullets' }}
            navigation={{
                nextEl: '.swiper-next', prevEl: '.swiper-prev'
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper">
            {data?.response?.data.map((item) => {
                return <SwiperSlide key={item.uuid}>
                    <div
                        className="relative h-[calc(65dvh-84px)] md:h-[calc(96dvh-84px)] w-full"
                    >
                        <Image  alt="panner" src={item.image} priority={true} quality={100}
                            layout="fill" sizes={"(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"}
                            className="block h-[calc(100dvh-84px)] w-100 object-cover rounded-md" />
                        {/*<div*/}
                        {/*    className="absolute text-center transform md:top-unit-28 md:right-unit-20 right-unit-10 top-unit-14 ">*/}
                        {/*    <h2 className="font-[500] md:text-[8rem] text-[4rem] text-white">{item.discount} <span*/}
                        {/*        className="bg-[#F40000]">OFF</span>*/}
                        {/*    </h2>*/}
                        {/*</div>*/}
                        <div
                            className="absolute flex items-center justify-center gap-3 text-center transform bottom-unit-28 left-unit-10">
                            <div>
                                <h3 className="text-white font-[500] text-2xl mb-2">{item.business.title}</h3>
                                { item.url &&
                                    <Link href={`${item.url}`}
                                          className="flex items-center justify-center gap-1 px-2 bg-white rounded-md w-fit capitalize">
                                        view
                                        <span className="text-white bg-black rounded-md">
                                        <GoArrowUpRight size={18} />
                                    </span>
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            })}

            {/*<SliderBtns/>*/}
            <div className="absolute bottom-0 left-0 z-10 flex items-center w-full px-10 mb-3 w-100">
                <div className={`swiper-pagination flex gap-2 swiper-paginationPage ${classes["swiper-paginationPage"]}`}></div>
                <span className="flex items-center justify-end w-full gap-10 text-white">
                    <div
                        className={`swiper-prev ${classes["swiper-prev"]} border rounded-full !w-[40px] h-[40px] flex items-center justify-center cursor-pointer`}><FaArrowLeftLong
                            size={25} /></div>
                    <div
                        className={`swiper-next ${classes["swiper-next"]} border rounded-full !w-[40px] h-[40px] flex items-center justify-center cursor-pointer`}><FaArrowRightLong
                            size={25} /></div>
                </span>
            </div>
        </Swiper
        >
    </section>)
}

export default Panner
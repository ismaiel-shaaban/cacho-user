import Image from 'next/image'
import Link from "next/link";
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {GoArrowUpRight} from "react-icons/go";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";
import classes from './Panner.module.css'
import StoreImage from "@/components/sheared/storeImage/StoreImage";
import useSWR from "swr";
import {Spinner} from "@nextui-org/react";

const fetcher = (url) => fetch(url).then((res) => res.json())
const Panner = () => {
    const {data , error , isLoading} = useSWR('https://caco-dev.mimusoft.com/api/customer/banners' ,fetcher)
    if (isLoading) return <Spinner/>
    if (error) return <div>{error}</div>
    return (<section className="panner container mt-[20px]">

        <Swiper
            modules={[Navigation, Pagination , Autoplay]}
            pagination={{clickable: true, el: '.swiper-paginationPage', type: 'bullets'}}
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
                        className="relative h-[calc(100dvh-84px)] w-full"
                    >
                        <Image alt="panner" src={item.image} priority={true}
                               width={undefined} height={undefined} layout="fill"
                               className="block h-[calc(100dvh-84px)] w-100 object-cover rounded-md"/>
                        {/*<div*/}
                        {/*    className="absolute md:top-unit-28 md:right-unit-20 right-unit-10 top-unit-14 transform text-center ">*/}
                        {/*    <h2 className="font-[500] md:text-[8rem] text-[4rem] text-white">{item.discount} <span*/}
                        {/*        className="bg-[#F40000]">OFF</span>*/}
                        {/*    </h2>*/}
                        {/*</div>*/}
                        <div
                            className="absolute bottom-unit-28 left-unit-10 transform text-center flex items-center justify-center gap-3">
                            <StoreImage image={item.business.image} alt="storeImage"/>
                            <div>
                                <h3 className="text-white font-[500] text-2xl mb-2">{item.business.title}</h3>
                                <Link href={"/Stores/" + item.business.uuid}
                                      className="flex justify-center items-center gap-1 bg-white w-fit px-2 rounded-md">
                                    view
                                    <span className="text-white bg-black rounded-md">
                                    <GoArrowUpRight size={18}/>
                                </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            })}

            {/*<SliderBtns/>*/}
            <div className="absolute bottom-0 left-0 w-100 z-10 flex items-center justify-between px-10 mb-3 w-full">
                <div className={`swiper-pagination ${classes["swiper-paginationPage"]}`}></div>
                <span className="text-white flex items-center justify-center gap-10">
                    <div
                        className={`swiper-prev ${classes["swiper-prev"]} border rounded-full !w-[40px] h-[40px] flex items-center justify-center cursor-pointer`}><FaArrowLeftLong
                        size={25}/></div>
                    <div
                        className={`swiper-next ${classes["swiper-next"]} border rounded-full !w-[40px] h-[40px] flex items-center justify-center cursor-pointer`}><FaArrowRightLong
                        size={25}/></div>
                </span>
            </div>
        </Swiper
        >
    </section>)
}

export default Panner
import Image from 'next/image'
import Link from "next/link";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import pannerPic from '../../../../public/panner/img-1.jpg'
import pannerPic2 from '../../../../public/panner/img-2.jpg'
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from './Panner.module.css'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Panner = () => {
    return (<div className="container mx-auto px-4">

        <Swiper modules={[Navigation, Pagination]}
            pagination={{ clickable: true, el: '.swiper-pagination', type: 'bullets' }}
            navigation={{
                nextEl: '.swiper-next', prevEl: '.swiper-prev'
            }}
            className="mySwiper">
            <SwiperSlide>
                <div
                    className="relative h-[calc(100vh-64px)] w-full"
                >
                    <Image alt="panner" src={pannerPic}
                        priority={true}
                        className="block h-[calc(100vh-64px)] w-100 object-cover rounded-md" />
                    <div className="absolute top-unit-28 right-unit-20 transform text-center">
                        <h2 className="font-[500] text-[8rem] text-white">50% <span className="bg-[#F40000]">OFF</span>
                        </h2>
                    </div>
                    <div
                        className="absolute bottom-unit-28 left-unit-10 transform text-center flex items-center justify-center gap-3">
                        <Image src={pannerPic2} alt="img-2"
                            className="block w-[80px] object-cover h-[80px] rounded-md overflow-hidden" />
                        <div>
                            <h3 className="text-white font-[500] text-2xl mb-2">Olympic Store</h3>
                            <Link href="#"
                                className="flex justify-center items-center gap-1 bg-white w-fit px-2 rounded-md">
                                view
                                <span className="text-white bg-black rounded-md">
                                    <GoArrowUpRight size={18} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>

                <div
                    className="relative h-[calc(100vh-64px)] w-full rounded-md overflow-hidden"
                >
                    <Image alt="panner" src={pannerPic} className="block h-[calc(100vh-64px)] w-100 object-cover " />
                    <div className="absolute top-unit-28 right-unit-20 transform text-center">
                        <h2 className="font-[500] text-[8rem] text-white">50% <span className="bg-[#F40000]">OFF</span>
                        </h2>
                    </div>
                    <div
                        className="absolute bottom-unit-28 left-unit-10 transform text-center flex items-center justify-center gap-3">
                        <Image src={pannerPic2} alt="img-2"
                            className="block w-[80px] object-cover h-[80px] rounded-md overflow-hidden" />
                        <div>
                            <h3 className="text-white font-[500] text-2xl mb-2">Olympic Store</h3>
                            <Link href="#"
                                className="flex justify-center items-center gap-1 bg-white w-fit px-2 rounded-md">
                                view
                                <span className="text-white bg-black rounded-md">
                                    <GoArrowUpRight size={18} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            {/*<SliderBtns/>*/}
            <div className="absolute bottom-0 left-0 w-100 z-10 flex items-center justify-between px-10 mb-3 w-full">
                <div className={`swiper-pagination ${classes["swiper-pagination"]}`}></div>
                <span className="text-white flex items-center justify-center gap-10">
                    <div className={`swiper-prev ${classes["swiper-prev"]}`}><FaArrowLeftLong size={25} /></div>
                    <div className={`swiper-next ${classes["swiper-next"]}`}><FaArrowRightLong size={25} /></div>
                </span>
            </div>
        </Swiper>
    </div>)
}

export default Panner
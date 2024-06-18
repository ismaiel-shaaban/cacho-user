import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import {strings} from "@/utilis/Localization";

const ProductSlider = ({slides}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (<div className="col-span-12 lg:col-span-4 md:col-span-6">
        <Swiper
            style={{
                '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff',
            }}
            loop={true}
            spaceBetween={10}
            navigation={{
                nextEl: '.swiper-next', prevEl: '.swiper-prev'
            }}
            thumbs={{swiper: thumbsSwiper}}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
        >
            {slides && slides.map((slide ,index) => (<SwiperSlide key={index}>
                <div className="h-[435px] w-[387px] rounded-[10px] overflow-hidden">
                    <Image
                        fill={true}
                        src={slide}
                        alt="Image Alt Text"
                        className="object-cover rounded-[10px]"
                    />
                </div>
            </SwiperSlide>))}
            <div
                className="absolute bottom-0 left-0 w-100 z-10 flex items-center justify-end px-10 mb-3 w-full" dir={"ltr"}>
                <span className={`text-white flex items-center justify-center gap-8`}>
                    <div
                        className={`swiper-prev bg-white text-black border rounded-full !w-[40px] h-[40px] flex items-center justify-center cursor-pointer`}>
                        <MdKeyboardArrowLeft size={25}/></div>
                    <div
                        className={`swiper-next bg-white text-black border rounded-full !w-[40px] h-[40px] flex items-center justify-center cursor-pointer`}>
                        <MdKeyboardArrowRight size={25}/></div>
                </span>
            </div>
        </Swiper>
        <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={`mySwiper mt-2`}
        >
            {slides && slides.map((slide , index) => (<SwiperSlide key={index}>
                <div className="h-[103px] w-[97px]">
                    <Image
                        fill={true}
                        src={slide}
                        alt="Image Alt Text"
                        className="object-cover rounded-[10px]"
                    />
                </div>
            </SwiperSlide>))}
        </Swiper>
    </div>);
}

export default ProductSlider;
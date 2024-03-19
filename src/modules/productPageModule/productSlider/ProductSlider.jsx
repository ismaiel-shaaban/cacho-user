import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
import Image from 'next/image'
import product_1 from '../../../../public/product/img-1.jpg'
import product_2 from '../../../../public/product/img-2.jpeg'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [{
    id: 1, image: product_1
}, {
    id: 2, image: product_2
}, {
    id: 3, image: product_1
}, {
    id: 4, image: product_2
}, {
    id: 5, image: product_1
}, {
    id: 6, image: product_2
}, {
    id: 7, image: product_1
}, {
    id: 8, image: product_2
}, {
    id: 9, image: product_1
}, {
    id: 10, image: product_2
}]

const ProductSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (<div className="product-slide">
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
            {slides.map((slide) => (<SwiperSlide key={slide.id}>
                <div className="h-[435px] w-[387px] rounded-[10px] overflow-hidden">
                    <Image
                        src={slide.image}
                        alt="Image Alt Text"
                        layout="fill"
                        objectFit="cover"
                        className=" rounded-[10px]"
                    />
                </div>
            </SwiperSlide>))}
            <div
                className="absolute bottom-0 left-0 w-100 z-10 flex items-center justify-end px-10 mb-3 w-full">
                <span className="text-white flex items-center justify-center gap-8">
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
            {slides.map((slide) => (<SwiperSlide key={slide.id}>
                <div className="h-[103px] w-[97px]">
                    <Image
                        src={slide.image}
                        alt="Image Alt Text"
                        layout="fill"
                        objectFit="cover"
                        className="object-cover rounded-[10px]"
                    />
                </div>
            </SwiperSlide>))}
        </Swiper>
    </div>);
}

export default ProductSlider;
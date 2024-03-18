import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from "next/image";

const ProductSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    asd;flmasdf;l;,asd;al,sda,slda;
                </SwiperSlide>
                <SwiperSlide>
                    asd;flmasdf;l;,asd;al,sda,slda;
                </SwiperSlide>
                <SwiperSlide>
                    asd;flmasdf;l;,asd;al,sda,slda;
                </SwiperSlide>
                <SwiperSlide>
                    asd;flmasdf;l;,asd;al,sda,slda;
                </SwiperSlide>
                <SwiperSlide>
                    asd;flmasdf;l;,asd;al,sda,slda;
                </SwiperSlide>
                <SwiperSlide>
                    asd;flmasdf;l;,asd;al,sda,slda;
                </SwiperSlide>
                <SwiperSlide>
                    asd;flmasdf;l;,asd;al,sda,slda;
                </SwiperSlide>
                <SwiperSlide>
                    asd;flmasdf;l;,asd;al,sda,slda;
                </SwiperSlide>
                <SwiperSlide>
                    asd;flmasdf;l;,asd;al,sda,slda;
                </SwiperSlide>
                <SwiperSlide>
                    asd;flmasdf;l;,asd;al,sda,slda;
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    asd;flmasdf;l;,asd;al,sda,slda;
                </SwiperSlide>
                <SwiperSlide>
                    asd;flmasdf;l;,asd;al,sda,slda;
                </SwiperSlide>
                <SwiperSlide>
                    asd;flmasdf;l;,asd;al,sda,slda;
                </SwiperSlide>
                <SwiperSlide>
                    asd;flmasdf;l;,asd;al,sda,slda;
                </SwiperSlide>
                <SwiperSlide>
                    asd;flmasdf;l;,asd;al,sda,slda;
                </SwiperSlide>
                <SwiperSlide>
                    asd;flmasdf;l;,asd;al,sda,slda;
                </SwiperSlide>
                <SwiperSlide>
                    asd;flmasdf;l;,asd;al,sda,slda;
                </SwiperSlide>
                <SwiperSlide>
                    asd;flmasdf;l;,asd;al,sda,slda;
                </SwiperSlide>
                <SwiperSlide>
                    asd;flmasdf;l;,asd;al,sda,slda;
                </SwiperSlide>
                <SwiperSlide>
                    asd;flmasdf;l;,asd;al,sda,slda;
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default ProductSlider;
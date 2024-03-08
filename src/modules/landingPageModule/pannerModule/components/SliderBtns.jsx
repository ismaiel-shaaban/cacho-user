import React from 'react';
import { useSwiper } from 'swiper/react';
export const SliderBtns = () => {
    const swiper = useSwiper();
    return (
        <div>
            <span onClick={() => swiper.slideNext()}>Next</span>
            <span onClick={() => swiper.slidePrev()}>Prev</span>
        </div>
    )
}
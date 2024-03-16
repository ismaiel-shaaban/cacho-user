import Image from "next/image";
import Rating from "@/components/sheared/rateing/Rating";
import {Chip} from "@nextui-org/react";
import {GoDotFill} from "react-icons/go";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, FreeMode} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import LocationIcon from "@/utilis/Icons/LocationIcon";

const AboutUs = ({aboutUs}) => {
    return (<div>
        <div className="flex items-end gap-2 md:gap-[40px]">
            <div className="flex gap-2">
                <Image src={aboutUs.storeImage} alt={aboutUs.storeName}
                       className="block w-[60px] object-cover h-[60px] rounded-md overflow-hidden"/>
                <span className="flex flex-col justify-between">
                    <span className="text-[20px] font-[500]">{aboutUs.storeName}</span>
                    <Rating rate={aboutUs.rate} ratingCount={aboutUs.reviews}/>
                </span>

            </div>
            <div className="flex items-center gap-[20px]">
                <Chip color={aboutUs.status === "Open" ? "success" : "danger"}
                      classNames={{base: "text-white"}}
                      endContent={aboutUs.status === "Open" ? <GoDotFill/> : null}>{aboutUs.status}</Chip>
                <Chip variant="bordered" classNames={{
                    base: "border-[--primary-color] text-[--primary-color]"
                }}>{aboutUs.open}</Chip>
            </div>
        </div>
        <div>
            <h3 className="text-[20px] font-[600] my-[20px]">Images
                <span className="text-[14px] font-[400]"> ({aboutUs.images.length})</span>
            </h3>
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
                {aboutUs.images.map((image, index) => (
                    <SwiperSlide>
                        <div key={index} className="">
                            <Image src={image} key={index} alt={aboutUs.storeName} className="object-cover w-full h-full"/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        <div>
            <h3 className="text-[20px] font-[600] mb-[10px] mt-[24px]">Description</h3>
            <p className="text-[18px] font-[500]">{aboutUs.description}</p>
        </div>
        <div>
            <h3 className="text-[20px] font-[600] mb-[10px] mt-[24px]">Location</h3>
            <p className="text-[18px] font-[500] text-[--primary-color] flex gap-3">{aboutUs.storeLocation} <span><LocationIcon/></span></p>
        </div>
    </div>)
}

export default AboutUs;
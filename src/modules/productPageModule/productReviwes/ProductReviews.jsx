import {Card, CardBody, Spinner} from "@nextui-org/react";
import Rating from "@/components/sheared/rateing/Rating";
import ReactStars from "react-rating-stars-component/dist/react-stars";
import StarGrayIcon from "@/utilis/Icons/StarGrayIcon";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import ReviewCard from "@/components/sheared/reviewCard/ReviewCard";
import {useRouter} from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then(res => res.json())
const ProductReviews = () => {
    const router = useRouter()
    const {id} = router.query
    const {data ,error , isLoading} = useSWR(`https://caco-dev.mimusoft.com/api/customer/products/${id}/reviews?with=customer`,fetcher)
    const reviewCount = data?.response?.data.length
    if(isLoading) return <Spinner/>
    if(error) return <div>Error</div>
    return (
        <div className="col-span-12 lg:col-span-4 md:col-span-6">
            <h2>Reviews <Rating ratingCount={reviewCount} rating={4}/></h2>
                <Swiper
                    direction={'vertical'}
                    autoHeight={true}
                    slidesPerView={3}
                    spaceBetween={15}
                    mousewheel={true}
                    className="mySwiper !h-[422px] lg:!h-[440px]  mt-3"
                >
                    {data?.response?.data.map(review => (
                        <SwiperSlide key={review.uuid}>
                            <ReviewCard review={review}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </div>
    );
}

export default ProductReviews;
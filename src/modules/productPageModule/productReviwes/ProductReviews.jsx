import {Card, CardBody} from "@nextui-org/react";
import Rating from "@/components/sheared/rateing/Rating";
import ReactStars from "react-rating-stars-component/dist/react-stars";
import StarGrayIcon from "@/utilis/Icons/StarGrayIcon";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

const ProductReviews = () => {
    const reviews = [
        {
            id: 1,
            user: "John Doe",
            rating: 5,
            date: "2021-12-12",
            description:"faksmdfpasomdfklams;elfm AOPEFKZ MOPEKFC Loplwkefl;maef "
        },
        {
            id: 2,
            user: "Jane Doe",
            rating: 4,
            date: "2021-12-12",
            description:"faksmdfpasomdfklams;elfm AOPEFKZ MOPEKFC Loplwkefl;maef "
        },
        {
            id: 3,
            user: "John Doe",
            rating: 5,
            date: "2021-12-12",
            description:"faksmdfpasomdfklams;elfm AOPEFKZ MOPEKFC Loplwkefl;maef "
        },
        {
            id: 4,
            user: "Jane Doe",
            rating: 4,
            date: "2021-12-12",
            description:"faksmdfpasomdfklams;elfm AOPEFKZ MOPEKFC Loplwkefl;maef "
        },
        {
            id: 5,
            user: "John Doe",
            rating: 5,
            date: "2021-12-12",
            description:"faksmdfpasomdfklams;elfm AOPEFKZ MOPEKFC Loplwkefl;maef "
        },
        {
            id: 6,
            user: "Jane Doe",
            rating: 4,
            date: "2021-12-12",
            description:"faksmdfpasomdfklams;elfm AOPEFKZ MOPEKFC Loplwkefl;maef "
        },
    ]
    return (
        <div className="md:col-span-1 col-span-2">
            <h2>Reviews <Rating ratingCount={7} rating={4}/></h2>
                <Swiper
                    direction={'vertical'}
                    autoHeight={true}
                    slidesPerView={3}
                    spaceBetween={10}
                    mousewheel={true}
                    className="mySwiper h-[422px] lg:!h-[440px]  mt-3"
                >
                    {reviews.map(review => (
                        <SwiperSlide key={review.id}>
                            <Card classNames={{
                                base: "shadow-none rounded-md",
                            }}>
                                <CardBody>
                                    <div className="flex items-center justify-between">
                                        <ReactStars
                                            count={5}
                                            value={review.rating}
                                            emptyIcon={<StarGrayIcon/>}
                                            fullIcon={<StarGrayIcon/>}
                                            isHalf={false}
                                            edit={false}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                        <p className="text-[--gray-2]">{review.date}</p>
                                    </div>

                                    <h3 className="text-[16px] font[600]">{review.user}</h3>
                                    <p className="text-[--gray-2]">{review.description}</p>
                                </CardBody>
                            </Card>
                        </SwiperSlide>

                    ))}
                </Swiper>
        </div>
    );
}

export default ProductReviews;
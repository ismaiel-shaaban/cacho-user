import {Card, CardBody, Spinner, useDisclosure} from "@nextui-org/react";
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
import Image from "next/image";
import messageQuestion from "../../../../public/message-question.svg";
import {strings} from "@/utilis/Localization";
import {getCookie} from "cookies-next";
import {fetchUserData} from "@/utilis/getUserData";
import {useState} from "react";
import AddReviewModal from "@/modules/modalsModule/AddReviewModal";

const fetcher = (url) => fetch(url).then(res => res.json())
const ProductReviews = ({reviewsCount ,rating}) => {
    const router = useRouter()
    const { isOpen, onOpenChange } = useDisclosure();
    const [showLoginModal, setShowLoginModal] = useState(false);
    const {id} = router.query
    const {data ,error , isLoading} = useSWR(`https://caco-dev.mimusoft.com/api/customer/products/${id}/reviews?with=customer`,fetcher)
    const handleAddReview = async () => {
        const token = getCookie('token')
        const userData = await fetchUserData(token)
        if (!userData) {
            setShowLoginModal(true);
        } else {
            onOpenChange(true);
        }
    };
    if(isLoading) return <Spinner/>
    if(error) return <div>Error</div>
    return (
        <>
        <div className="col-span-12 lg:col-span-4 md:col-span-6" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
            <h2>{strings.Reviews} <Rating ratingCount={reviewsCount} rating={rating}/></h2>
                <Swiper
                    direction={'vertical'}
                    autoHeight={true}
                    slidesPerView={3}
                    spaceBetween={15}
                    mousewheel={true}
                    className="mySwiper !h-[422px] lg:!h-[440px]  mt-3"
                >
                    <SwiperSlide key={"add review"}>
                        <div onClick={handleAddReview} className="cursor-pointer">
                            <Card classNames={{
                                base: "h-full shadow-none rounded-md bg-transparent border-2 border-[--gray-2]",
                            }}>
                                <CardBody>
                                    <div className="flex gap-2 items-center mb-3">
                                        <Image src={messageQuestion} alt={"Message Icon"} width={24} height={24}/>
                                        <h3 className="text-[18px] font-[600] text-[gray]">{strings.AddYourReview}</h3>
                                    </div>
                                    <ReactStars
                                        count={5}
                                        value={0}
                                        emptyIcon={<StarGrayIcon/>}
                                        fullIcon={<StarGrayIcon/>}
                                        isHalf={false}
                                        edit={false}
                                        size={24}
                                        activeColor="#ffd700"
                                    />
                                </CardBody>
                            </Card>
                        </div>
                    </SwiperSlide>
                    {data?.response?.data.map(review => (
                        <SwiperSlide key={review.uuid}>
                            <ReviewCard review={review}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </div>
            <AddReviewModal isOpen={isOpen} onOpenChange={onOpenChange} id={id} isProduct={true}/>
        </>
    );
}

export default ProductReviews;
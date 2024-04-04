import { Card, CardBody, useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/router";
import Image from "next/image";
import useSWR from "swr";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "@/components/sheared/reviewCard/ReviewCard";
import AddReviewModal from "@/modules/modalsModule/AddReviewModal";
import ReviewsSkeleton from "@/modules/storesModule/components/reviews/ReviewsSkeleton";
import StarGrayIcon from "@/utilis/Icons/StarGrayIcon";
import messageQuestion from "../../../../../public/message-question.svg"
import { strings } from "@/utilis/Localization";

const fetcher = (...args) => fetch(...args).then(res => res.json());
const Reviews = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const router = useRouter();
    const { id } = router.query;
    const {
        data, error, isLoading
    } = useSWR(`https://caco-dev.mimusoft.com/api/customer/businesses/${id}/reviews?with=customer`, fetcher, {
        revalidateOnFocus: false, dedupingInterval: 60000, // 1 minute
    });
    if (error) return <div>Error</div>;
    return (<>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 sm:grid-cols-2"
            onClick={() => onOpen()}
            dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}
        >
            <div className="cursor-pointer">
                <Card classNames={{
                    base: "h-full shadow-none rounded-md bg-transparent border-2 border-[--gray-2]",
                }}>
                    <CardBody>
                        <div className="flex gap-2 items-center mb-3">
                            <Image src={messageQuestion} alt={"Message Icon"} width={24} height={24} />
                            <h3 className="text-[18px] font-[600] text-[gray]">{strings.AddYourReview}</h3>
                        </div>
                        <ReactStars
                            count={5}
                            value={0}
                            emptyIcon={<StarGrayIcon />}
                            fullIcon={<StarGrayIcon />}
                            isHalf={false}
                            edit={false}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </CardBody>
                </Card>
            </div>
            {
                isLoading ? <ReviewsSkeleton /> : data?.response?.data.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))
            }
        </div>
        <AddReviewModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>)
}

export default Reviews;
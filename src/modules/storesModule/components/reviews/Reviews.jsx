import { Fragment, useState } from "react";
import { Button, Card, CardBody, useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/router";
import Image from "next/image";
import useSWRInfinite from "swr/infinite";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "@/components/sheared/reviewCard/ReviewCard";
import AddReviewModal from "@/modules/modalsModule/AddReviewModal";
import ReviewsSkeleton from "@/modules/storesModule/components/reviews/ReviewsSkeleton";
import StarGrayIcon from "@/utilis/Icons/StarGrayIcon";
import messageQuestion from "../../../../../public/message-question.svg";
import SuggestLoginModal from "@/modules/modalsModule/SuggestLoginModal";
import { strings } from "@/utilis/Localization";
import { getCookie } from "cookies-next";
import { fetchUserData } from "@/utilis/getUserData";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Reviews = () => {
    const { isOpen, onOpenChange } = useDisclosure();
    const [showLoginModal, setShowLoginModal] = useState(false);
    const router = useRouter();
    const { id } = router.query;

    const getKey = (pageIndex, previousPageData) => {
        if (previousPageData && !previousPageData.response.data.length) return null;
        return `https://management.cachooapp.com/api/customer/businesses/${id}/reviews?with=customer&page=${pageIndex + 1}`;
    };

    const {
        data, error, size, setSize, isLoading, isValidating
    } = useSWRInfinite(getKey, fetcher, {
        revalidateOnFocus: true, dedupingInterval: 60000, // 1 minute
    });

    const handleShowMore = () => {
        setSize(size + 1); // Increment SWRInfinite size
    };

    const handleAddReview = async () => {
        const token = getCookie('token')
        const userData = await fetchUserData(token)
        if (!userData) {
            setShowLoginModal(true);
        } else {
            onOpenChange(true);
        }
    };

    if (error) return <div>Error</div>;
    return (
        <>
            <div className="grid grid-cols-1 gap-3 mt-12 md:mt-0 lg:grid-cols-3 sm:grid-cols-2"
                dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}
            >
                <div onClick={handleAddReview} className="cursor-pointer">
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
                    data && data.map((pageData, pageIndex) => (
                        <Fragment key={pageIndex}>
                            {pageData.response.data.map((review, index) => (
                                <ReviewCard key={index} review={review} />
                            ))}
                        </Fragment>
                    ))
                }
            </div>
            <div className="flex justify-center mt-3">
                <Button
                    variant={"light"}
                    color={"primary"}
                    onClick={handleShowMore}
                    isLoading={isValidating}
                    isDisabled={isLoading}
                    className="text-[--primary-color] text-2xl font-[600]"
                >
                    {strings.ShowMore}
                </Button>
            </div>
            <AddReviewModal isOpen={isOpen} onOpenChange={onOpenChange} id={id} isProduct={false} />
            <SuggestLoginModal isOpen={showLoginModal} onOpenChange={() => setShowLoginModal(false)} />
        </>
    );
}

export default Reviews;

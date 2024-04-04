import {Card, CardBody} from "@nextui-org/react";
import ReactStars from "react-rating-stars-component";
import StarGrayIcon from "@/utilis/Icons/StarGrayIcon";
import {strings} from "@/utilis/Localization";

const ReviewCard = ({review}) => {
    return (<Card
        dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}
        classNames={{
        base: "shadow-none rounded-md",
    }}>
        <CardBody>
            <div className="flex items-center flex-start justify-between">
                <ReactStars
                    count={5}
                    value={review.rating}
                    emptyIcon={<StarGrayIcon/>}
                    fullIcon={<StarGrayIcon/>}
                    isHalf={false}
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                    dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}
                />
                <p className="text-[--gray-2]">{review.date}</p>
            </div>

            <div className="flex flex-col items-start">
                <h3 className="text-[16px] font[600]">{review.isAnonymous === true ? "Anonymous" : review.customer.name}</h3>
                <p className="text-[--gray-2]">{review.comment}</p>
            </div>
        </CardBody>
    </Card>)
}

export default ReviewCard;
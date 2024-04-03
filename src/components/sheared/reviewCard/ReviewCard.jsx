import {Card, CardBody} from "@nextui-org/react";
import ReactStars from "react-rating-stars-component";
import StarGrayIcon from "@/utilis/Icons/StarGrayIcon";

const ReviewCard = ({review}) => {
    return (<Card classNames={{
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

            <h3 className="text-[16px] font[600]">{review.isAnonymous === true ? "Anonymous" : review.customer.name}</h3>
            <p className="text-[--gray-2]">{review.comment}</p>
        </CardBody>
    </Card>)
}

export default ReviewCard;
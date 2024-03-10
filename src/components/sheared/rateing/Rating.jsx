import {StarIcon} from "@/utilis/Icons/StarIcon";

const Rating = ({ ratingCount ,rating }) => {
    return (
        <div className="flex gap-2 items-center">
                            <span className="text-sm text-gray-400 flex gap-2">
                                <span className="text-[--gray-2]">({ratingCount})</span>
                                <span className="text-sm text-[--rate-color] flex gap-1 items-center">
                                    {rating}
                                    <StarIcon/>
                                </span>
                            </span>
        </div>
    )
}

export default Rating;
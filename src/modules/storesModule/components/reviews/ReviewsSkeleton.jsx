import {Skeleton} from "@nextui-org/react";

const ReviewsSkeleton = () => {
    return (
        [...Array(9)].map((_, index) => (
            <Skeleton key={index}>
                <div className="h-24"></div>
            </Skeleton>
        ))
    );
}


export default ReviewsSkeleton;
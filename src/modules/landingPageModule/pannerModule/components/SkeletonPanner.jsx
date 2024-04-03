import {Skeleton} from "@nextui-org/react";

const SkeletonPanner = () => {
    return (
            <Skeleton className="rounded-lg">
                <div className="h-[calc(100dvh-84px)] rounded-md bg-default-300">
                </div>
            </Skeleton>
    )
}

export default SkeletonPanner
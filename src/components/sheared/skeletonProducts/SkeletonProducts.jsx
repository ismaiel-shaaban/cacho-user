import {Card, Skeleton} from "@nextui-org/react";

const SkeletonProducts = ({col}) => {
    return (
        <div className={`grid col-span-12 h-fit md:col-span-9 grid-cols-1 lg:grid-cols-${col} sm:grid-cols-2 md:gap-[20px] gap-2 mt-[34px]`}>
            {[...Array(8)].map((_, index) => (
                <Card key={index} className="space-y-5 p-4" radius="lg">
                    <Skeleton className="rounded-lg">
                        <div className="h-32 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="space-y-4">
                        <Skeleton className="w-3/5 rounded-lg">
                            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">
                            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </Card>
            ))}
        </div>
    )
}

export default SkeletonProducts
import useSWR from "swr";
import {useRouter} from "next/router";
import {Spinner} from "@nextui-org/react";
import ReviewCard from "@/components/sheared/reviewCard/ReviewCard";

const fetcher = (...args) => fetch(...args).then(res => res.json());
const Reviews = () => {
    const router = useRouter();
    const {id} = router.query;
    const {
        data, error, isLoading
    } = useSWR(`https://caco-dev.mimusoft.com/api/customer/businesses/${id}/reviews`, fetcher, {
        revalidateOnFocus: false, dedupingInterval: 60000, // 1 minute
    });
    if (isLoading) return <div><Spinner/></div>;
    if (error) return <div>Error</div>;
    return (<div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
        {
            data?.response?.data.map((review, index) => (
                <ReviewCard review={review} key={index}/>
            ))
        }
        </div>)
}

export default Reviews;
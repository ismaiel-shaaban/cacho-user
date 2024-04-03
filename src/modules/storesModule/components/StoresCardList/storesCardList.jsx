import StoresCard from "@/modules/storesModule/components/storesCards/storesCard/StoresCard";
import {memo, useEffect} from "react";
import {useStoresData} from "@/modules/storesModule/hooks/getStores";
import SkeletonProducts from "@/components/sheared/skeletonProducts/SkeletonProducts";

const StoresCardList = ({page , filter ,passMetadata}) => {
    const {data, error, isLoading} = useStoresData(filter, page);
    useEffect(() => {
        if (data?.response?.meta) {
            passMetadata(data?.response?.meta);
        }
    }, [data]);
    if (isLoading) return <SkeletonProducts col={3}/>
    if (error) return <p>Error</p>
    return (<div
        className={`grid grid-cols-1 col-span-12 h-fit md:col-span-9 lg:grid-cols-3 sm:grid-cols-2 md:gap-[24px] gap-2 mt-[40px]`}>
        {data?.response?.data.map((store) => (<StoresCard key={store.uuid} store={store}/>))}
    </div>);
};

export default memo(StoresCardList);
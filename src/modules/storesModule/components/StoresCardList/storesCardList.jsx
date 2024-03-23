import StoresCard from "@/modules/storesModule/components/storesCards/storesCard/StoresCard";
import {memo} from "react";

const StoresCardList = ({stores}) => {
    return (<div
        className={`grid grid-cols-1 col-span-12 h-fit md:col-span-9 lg:grid-cols-3 sm:grid-cols-2 md:gap-[24px] gap-2 mt-[40px]`}>
        {stores.map((store) => (<StoresCard key={store.uuid} store={store}/>))}
    </div>);
};

export default memo(StoresCardList);
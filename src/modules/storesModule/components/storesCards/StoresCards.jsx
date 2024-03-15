import {strings} from "@/utilis/Localization";
import StoresCard from "@/modules/storesModule/components/storesCards/storesCard/StoresCard";
import SidebarStoresFilter from "@/modules/storesModule/components/saidbarStores/SidebarStoresFilter";

const StoresCards =({storesData})=>{
    return(
        <div className="md:grid md:grid-cols-12 gap-[40px]" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
            <SidebarStoresFilter/>
            <div
                className={`grid grid-cols-1 col-span-12 h-fit md:col-span-9 lg:grid-cols-3 sm:grid-cols-2 md:gap-[24px] gap-2 mt-[40px]`}>
                {storesData.map((store) => (<StoresCard key={store.id} store={store}/>))}
            </div>
        </div>
    )
}

export default StoresCards;
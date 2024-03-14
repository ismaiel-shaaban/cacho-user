import StoresCard from "@/modules/storesModule/components/storesCards/storesCard/StoresCard";
import SidebarShopsFilter from "@/modules/categoriesModule/components/saidbarShops/SidebarShopsFilter";

const StoresCards =({storesData})=>{
    console.log(storesData)
    return(
        <div className="md:grid md:grid-cols-12 gap-[40px]">
            <SidebarShopsFilter/>
            <div
                className={`grid grid-cols-1 col-span-12 md:col-span-9 lg:grid-cols-3 sm:grid-cols-2 md:gap-[24px] gap-2 mt-[40px]`}>
                {storesData.map((store) => (<StoresCard key={store.id} store={store}/>))}
            </div>
        </div>
    )
}

export default StoresCards;
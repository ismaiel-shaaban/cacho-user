import {strings} from "@/utilis/Localization";
import StoresCard from "@/modules/storesModule/components/storesCards/storesCard/StoresCard";
import SidebarShopsFilter from "@/modules/categoriesModule/components/saidbarShops/SidebarShopsFilter";

const ClothesCategory = ({storesData}) => {
    return (<section className="md:grid md:grid-cols-12 gap-[40px]" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
        <SidebarShopsFilter/>
        <div
            className={`grid grid-cols-1 col-span-12 md:col-span-9 lg:grid-cols-3 sm:grid-cols-2 md:gap-[24px] gap-2 mt-[40px]`}>
            {storesData.map((store) => (<StoresCard key={store.id} store={store}/>))}
        </div>
    </section>);
}

export default ClothesCategory;
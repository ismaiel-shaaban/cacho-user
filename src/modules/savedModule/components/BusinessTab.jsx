import StoresCard from "@/modules/storesModule/components/storesCards/storesCard/StoresCard";
import {strings} from "@/utilis/Localization";

const BusinessTab = ({stores}) => {
    return (
        <div className="p-4" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 md:gap-[24px] gap-2 mt-[40px]">
                {
                    stores?.map((item) => (
                        <StoresCard key={item.business.uuid} store={item.business} />
                    ))
                }
                {
                    stores.length === 0 && <div
                        className="text-[--primary-color] text-[20px] font-bold text-center w-full"
                    >{strings.NoItemsFound}</div>
                }
            </div>
        </div>
    );
}

export default BusinessTab;
import {useRouter} from "next/router";
import { useState} from "react";
import {strings} from "@/utilis/Localization";
import StoresCardList from "@/modules/storesModule/components/StoresCardList/storesCardList";
import SidebarStoresFilter from "@/modules/storesModule/components/saidbarStores/SidebarStoresFilter";
import PaginationPages from "@/components/sheared/paginationPage/PaginationPage";

const StoresCards = () => {
    const router = useRouter();
    const filter = router.query.filter;
    const sort = router.query.sort;
    const nearest = router.query.nearest
    const page = router.query.page ? parseInt(router.query.page) : 1;
    const [metadata, setMetadata] = useState({});
    const [dataCount ,setDataCount] = useState(0)

    const handlePageChange = (page) => {
        // Update the URL query parameter to reflect the new page
        router.push({
            pathname: router.pathname, query: {...router.query, page: page},
        });
    };

    return (<>
            <div className="md:grid md:grid-cols-12 gap-[40px]" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
                <div className="md:col-span-3">
                        <SidebarStoresFilter dataCount={dataCount} />
                </div>
                <StoresCardList page={page} filter={filter} sort={sort} nearest={nearest} passMetadata={
                    (meta) => setMetadata(meta)} passDataCount={
                    (count)=>setDataCount(count)
                }/>
            </div>

        {
            metadata["last_page"] > 1 && <PaginationPages total={metadata["last_page"]} current={metadata["current_page"]}
                             onChange={handlePageChange}/>
        }
        </>);
};

export default StoresCards;
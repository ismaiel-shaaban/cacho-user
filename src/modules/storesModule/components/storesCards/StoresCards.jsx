import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {strings} from "@/utilis/Localization";
import {useStoresData} from "@/modules/storesModule/hooks/getStores";
import StoresCardList from "@/modules/storesModule/components/StoresCardList/storesCardList";
import SidebarStoresFilter from "@/modules/storesModule/components/saidbarStores/SidebarStoresFilter";
import PaginationPages from "@/components/sheared/paginationPage/PaginationPage";
import {Spinner} from "@nextui-org/react";
import {useCategoriesData} from "@/modules/categoriesModule/hooks/getCategories";

const StoresCards = () => {
    const router = useRouter();
    const filter = router.query.filter;
    const page = router.query.page ? parseInt(router.query.page) : 1;
    const [metadata, setMetadata] = useState({});

    const handlePageChange = (page) => {
        // Update the URL query parameter to reflect the new page
        router.push({
            pathname: router.pathname, query: {...router.query, page: page},
        });
    };

    return (<>
            <div className="md:grid md:grid-cols-12 gap-[40px]" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
                <div className="md:col-span-3">
                        <SidebarStoresFilter />
                </div>
                <StoresCardList page={page} filter={filter} passMetadata={
                    (meta) => setMetadata(meta)
                }/>
            </div>

            <PaginationPages total={metadata["last_page"]} current={metadata["current_page"]}
                             onChange={handlePageChange}/>
        </>);
};

export default StoresCards;
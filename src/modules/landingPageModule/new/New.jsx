import useSWR from "swr";
import {Spinner} from "@nextui-org/react";
import StoresCard from "@/modules/storesModule/components/storesCards/storesCard/StoresCard";
import {strings} from "@/utilis/Localization";
import SectionTitle from "@/modules/landingPageModule/components/sectionTitle/SectionTitle";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const NewStores = () => {
    const {
        data, error, isLoading
    } = useSWR(`https://caco-dev.mimusoft.com/api/customer/businesses?with=businessType`, fetcher, {
        revalidateOnFocus: false, dedupingInterval: 60000, // 1 minute
    })
    if (isLoading) return <Spinner/>
    if (error) return <p>Error</p>
    return (
        <section className="container mt-[40px]">
            <SectionTitle title={strings.New} link="/new" />
            <div
                className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-[24px] gap-2 mt-[40px]">
                {data?.response?.data.slice(0, 8).map((store) => (<StoresCard key={store.uuid} store={store}/>))}
            </div>
        </section>

    )
}

export default NewStores;
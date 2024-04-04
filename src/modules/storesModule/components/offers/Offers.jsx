import {useRouter} from "next/router";
import {useStoreOffersData} from "@/modules/storesModule/hooks/getStoreOffers";
import {Skeleton, Spinner, Tab, Tabs} from "@nextui-org/react";
import ProductOfferTab from "@/modules/storesModule/components/offers/productOfferTab/ProductOfferTab";
import ErrorFetch from "@/components/sheared/erorrFetch/ErrorFetch";

const Offers = ()=>{
    const router = useRouter();
    const {id} = router.query;
    const {data, error, isLoading} = useStoreOffersData(id);
    if (isLoading) return <Skeleton>
        <div className="grid grid-cols-1 gap-2">
            <div className="h-[400px] bg-[#F1F1F1] rounded-md"/>
        </div>
    </Skeleton>;
    if (error) return <ErrorFetch/>;
    return(
        <Tabs variant={"light"} fullWidth={true} className={"mt-5"} classNames={{
            tabContent: "group-data-[selected=true]:text-white text-[--gray-2] text-[18px] font-[500]",
            tab:"bg-[--gray-in] w-fit rounded-md px-[12px] py-[6px]",
            cursor: "group-data-[selected=true]:bg-[--primary-color] rounded-md w-full",
            tabList: "gap-[20px]",
        }}>
            {
                data?.response?.data.map((offer) => (
                    <Tab key={offer.uuid} title={offer.title}>
                        <ProductOfferTab offerId={offer.uuid} />
                    </Tab>
                ))
            }
        </Tabs>
    )
}

export default Offers;
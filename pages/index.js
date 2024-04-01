import Categories from "@/modules/landingPageModule/categories/Categories";
import Panner from "@/modules/landingPageModule/pannerModule/Panner";
import HotOffers from "@/modules/landingPageModule/hotOffers/HotOffers";
import Nearest from "@/modules/landingPageModule/nearest/Nearest";
import BannerJoin from "@/modules/landingPageModule/bannerJoin/BannerJoin";
import NewStores from "@/modules/landingPageModule/new/New";

export default function Home() {
    return (
        <>
            <Panner/>
            <Categories/>
            <HotOffers />
            {/*<Nearest/>*/}
            <BannerJoin/>
            <NewStores />
            {/*<SpecialOffers />*/}
        </>
    )
}

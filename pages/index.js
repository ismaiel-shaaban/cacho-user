import Categories from "@/modules/landingPageModule/categories/Categories";
import Panner from "@/modules/landingPageModule/pannerModule/Panner";
import HotOffers from "@/modules/landingPageModule/hotOffers/HotOffers";
import Nearest from "@/modules/landingPageModule/nearest/Nearest";
import BannerJoin from "@/modules/landingPageModule/bannerJoin/BannerJoin";
import NewStores from "@/modules/landingPageModule/new/New";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
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

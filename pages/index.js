import dynamic from 'next/dynamic';
import Head from "next/head";

const DynamicCategories = dynamic(() => import('@/modules/landingPageModule/categories/Categories'));
const DynamicPanner = dynamic(() => import('@/modules/landingPageModule/pannerModule/Panner'));
const DynamicHotOffers = dynamic(() => import('@/modules/landingPageModule/hotOffers/HotOffers'));
const DynamicNearest = dynamic(() => import('@/modules/landingPageModule/nearest/Nearest'));
const DynamicBannerJoin = dynamic(() => import('@/modules/landingPageModule/bannerJoin/BannerJoin'));
const DynamicNewStores = dynamic(() => import('@/modules/landingPageModule/new/New'));
const DynamicSpecialOffers = dynamic(() => import('@/modules/landingPageModule/specialOffers/SpecialOffers'));

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <meta name="googlebot" content="noindex,nofollow" />
            </Head>
            <DynamicPanner />
            <DynamicCategories />
            <DynamicHotOffers />
            <DynamicNearest />
            <DynamicBannerJoin />
            <DynamicNewStores />
            <DynamicSpecialOffers />
        </>
    );
}

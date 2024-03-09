import BusinessTypes from "@/modules/landingPageModule/businessTypes/businessTypes";
import Panner from "@/modules/landingPageModule/pannerModule/Panner";
import HotOffers from "@/modules/landingPageModule/hotOffers/HotOffers";
import pannerPic from '../public/panner/img-1.jpg'
import pannerPic2 from '../public/panner/img-2.jpg'
import business_1 from '../public/BusinessTypes/img-1.jpg'
import business_2 from '../public/BusinessTypes/img-2.jpg'
import business_3 from '../public/BusinessTypes/img-3.jpg'
import business_4 from '../public/BusinessTypes/img-4.jpg'
import business_5 from '../public/BusinessTypes/img-5.jpg'
import business_6 from '../public/BusinessTypes/img-6.jpg'
import business_7 from '../public/BusinessTypes/img-7.jpg'
import business_8 from '../public/BusinessTypes/img-8.jpg'
import product_1 from '../public/product/img-1.jpg'
import product_2 from '../public/product/img-2.jpeg'

const data = [
    {
        id: 1,
        discount: "50%",
        image: pannerPic,
        storeName: "Store Name",
        storeImage: pannerPic2,
        StoreLink: "#"
    },
    {
        id: 2,
        discount: "70%",
        image: pannerPic,
        storeName: "Store Name",
        storeImage: pannerPic2,
        StoreLink: "#"
    },
    {
        id: 3,
        discount: "30%",
        image: pannerPic,
        storeName: "Store Name",
        storeImage: pannerPic2,
        StoreLink: "#"
    },
    {
        id: 4,
        discount: "40%",
        image: pannerPic,
        storeName: "Store Name",
        storeImage: pannerPic2,
        StoreLink: "#"
    },
    {
        id: 5,
        discount: "60%",
        image: pannerPic,
        storeName: "Store Name",
        storeImage: pannerPic2,
        StoreLink: "#"
    }
]
const businessData = [
    {
        id: 1,
        image: business_1,
        title: "Restaurant",
    },
    {
        id: 2,
        image: business_2,
        title: "Cafe",
    },
    {
        id: 3,
        image: business_3,
        title: "Gym",
    },
    {
        id: 4,
        image: business_4,
        title: "Salon",
    },
    {
        id: 5,
        image: business_5,
        title: "Spa",
    },
    {
        id: 6,
        image: business_6,
        title: "Bakery",
    },
    {
        id: 7,
        image: business_7,
        title: "Bar",
    },
    {
        id: 8,
        image: business_8,
        title: "Hotel",
    }
]
const offersData = [
    {
        id: 1,
        discount: "50%",
        image: product_1,
        marketName: "Market Name",
        title: "Product Title",
        price: "100",
        oldPrice: "200",
        link: "#",
        rating: "4.5",
        ratingCount: "100"
    },
    {
        id: 2,
        discount: "50%",
        image: product_2,
        marketName: "Market Name",
        title: "Product Title",
        price: "100",
        oldPrice: "200",
        link: "#",
        rating: "4.5",
        ratingCount: "100"
    },
    {
        id: 3,
        discount: "50%",
        image: product_1,
        marketName: "Market Name",
        title: "Product Title",
        price: "100",
        oldPrice: "200",
        link: "#",
        rating: "4.5",
        ratingCount: "100"
    },
    {
        id: 4,
        discount: "50%",
        image: product_2,
        marketName: "Market Name",
        title: "Product Title",
        price: "100",
        oldPrice: "200",
        link: "#",
        rating: "4.5",
        ratingCount: "100"
    },
    {
        id: 5,
        discount: "50%",
        image: product_1,
        marketName: "Market Name",
        title: "Product Title",
        price: "100",
        oldPrice: "200",
        link: "#",
        rating: "4.5",
        ratingCount: "100"
    },
    {
        id: 6,
        discount: "50%",
        image: product_2,
        marketName: "Market Name",
        title: "Product Title",
        price: "100",
        oldPrice: "200",
        link: "#",
        rating: "4.5",
        ratingCount: "100"
    },
    {
        id: 7,
        discount: "50%",
        image: product_1,
        marketName: "Market Name",
        title: "Product Title",
        price: "100",
        oldPrice: "200",
        link: "#",
        rating: "4.5",
        ratingCount: "100"
    },
    {
        id: 8,
        discount: "50%",
        image: product_2,
        marketName: "Market Name",
        title: "Product Title",
        price: "100",
        oldPrice: "200",
        link: "#",
        rating: "4.5",
        ratingCount: "100"
    }
]


export default function Home({data, businessData}) {

    return (
        <>
            <Panner data={data}/>
            <BusinessTypes businessData={businessData}/>
            <HotOffers offersData={offersData}/>
        </>
    )
}

export async function getServerSideProps() {
    return {
        props: {
            data,
            businessData,
            offersData
        }
    }
}

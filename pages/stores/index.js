import store_1 from "../../public/Nearest/img-1.jpg";
import pannerPic2 from "../../public/panner/img-2.jpg";
import store_2 from "../../public/Nearest/img-2.jpg";
import store_3 from "../../public/Nearest/img-3.jpg";
import store_4 from "../../public/Nearest/img-4.jpg";
import StoresCards from "@/modules/storesModule/components/storesCards/StoresCards";

const storesData = [
    {
        id: 1,
        storeName: "Store Name",
        storeImage: store_1,
        storeLogo: pannerPic2,
        category: ["shoes"],
        rating: "4.5",
        ratingCount: "100",
        status: "Open Now",
        storeLink: "#"
    }, {
        id: 2,
        storeName: "Store Name",
        storeImage: store_2,
        storeLogo: pannerPic2,
        category: ["restaurant"],
        rating: "4.5",
        ratingCount: "100",
        status: "Open Now",
        storeLink: "#"
    }, {
        id: 3,
        storeName: "Store Name",
        storeImage: store_3,
        storeLogo: pannerPic2,
        category: [ "clothes"],
        rating: "4.5",
        ratingCount: "100",
        status: "Open Now",
        storeLink: "#"
    }, {
        id: 4,
        storeName: "Store Name",
        storeImage: store_4,
        storeLogo: pannerPic2,
        category: ["spa"],
        rating: "4.5",
        ratingCount: "100",
        status: "Closed",
        storeLink: "#"
    },
    {
        id: 5,
        storeName: "Store Name",
        storeImage: store_4,
        storeLogo: pannerPic2,
        category: ["salon"],
        rating: "4.5",
        ratingCount: "100",
        status: "Closed",
        storeLink: "#"
    },
    {
        id: 6,
        storeName: "Store Name",
        storeImage: store_4,
        storeLogo: pannerPic2,
        category: ["cafe"],
        rating: "4.5",
        ratingCount: "100",
        status: "Closed",
        storeLink: "#"
    },
    {
        id: 7,
        storeName: "Store Name",
        storeImage: store_4,
        storeLogo: pannerPic2,
        category: ["gym"],
        rating: "4.5",
        ratingCount: "100",
        status: "Closed",
        storeLink: "#"
    },
    {
        id: 8,
        storeName: "Store Name",
        storeImage: store_4,
        storeLogo: pannerPic2,
        category: ["bakery"],
        rating: "4.5",
        ratingCount: "100",
        status: "Closed",
        storeLink: "#"
    },
    {
        id: 9,
        storeName: "Store Name",
        storeImage: store_4,
        storeLogo: pannerPic2,
        category: ["bar"],
        rating: "4.5",
        ratingCount: "100",
        status: "Closed",
        storeLink: "#"
    },
    {
        id: 10,
        storeName: "Store Name",
        storeImage: store_4,
        storeLogo: pannerPic2,
        category: ["hotel"],
        rating: "4.5",
        ratingCount: "100",
        status: "Closed",
        storeLink: "#"
    },
    {
        id: 11,
        storeName: "Store Name",
        storeImage: store_4,
        storeLogo: pannerPic2,
        category: ["hotel"],
        rating: "4.5",
        ratingCount: "100",
        status: "Closed",
        storeLink: "#"
    }
    ]
const Stores = ({filterData ,query}) => {

    return(
        <section className="container">
        <StoresCards storesData={filterData}/>
        </section>
    )
}

export default Stores

export async function getServerSideProps(context) {
    const { query } = context;
    let filterData = storesData;

    if (query && query.filter) {
        filterData = storesData.filter((store) => store.category.includes(query.filter));
    }

    return {
        props: {
            filterData,
            query
        }
    };
}
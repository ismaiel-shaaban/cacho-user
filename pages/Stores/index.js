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
        category: ["shoes", "clothes"],
        rating: "4.5",
        ratingCount: "100",
        status: "Open Now",
        storeLink: "#"
    }, {
        id: 2,
        storeName: "Store Name",
        storeImage: store_2,
        storeLogo: pannerPic2,
        category: ["shoes", "clothes"],
        rating: "4.5",
        ratingCount: "100",
        status: "Open Now",
        storeLink: "#"
    }, {
        id: 3,
        storeName: "Store Name",
        storeImage: store_3,
        storeLogo: pannerPic2,
        category: ["shoes", "clothes"],
        rating: "4.5",
        ratingCount: "100",
        status: "Open Now",
        storeLink: "#"
    }, {
        id: 4,
        storeName: "Store Name",
        storeImage: store_4,
        storeLogo: pannerPic2,
        category: ["shoes", "clothes"],
        rating: "4.5",
        ratingCount: "100",
        status: "Closed",
        storeLink: "#"
    }]
const Stores = ({storesData}) => {
    return(
        <section className="container">
        <StoresCards storesData={storesData}/>
        </section>
    )
}

export default Stores

export async function getServerSideProps() {
    return {
        props: {
            storesData,
        }
    }
}
import Link from "next/link";
import ShopsCard from "@/modules/shopsModule/components/shopsCards/shopsCard/ShopsCard";
import {BreadcrumbItem, Breadcrumbs, Select, SelectItem} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/checkbox";
import store_1 from "../../../public/Nearest/img-1.jpg";
import pannerPic2 from "../../../public/panner/img-2.jpg";
import store_2 from "../../../public/Nearest/img-2.jpg";
import store_3 from "../../../public/Nearest/img-3.jpg";
import store_4 from "../../../public/Nearest/img-4.jpg";
import ClothesCategory from "@/modules/categoriesModule/clothesCategory/ClothesCategory";


const storesData = [{
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
const Clothes = ({storesData}) => {
    return (<>
        <main className="container">
            <Breadcrumbs
                className="mt-4"
                aria-label="Breadcrumb"
            >
                <BreadcrumbItem><Link href="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem>Clothes</BreadcrumbItem>
            </Breadcrumbs>
           <ClothesCategory storesData={storesData}/>
        </main>
    </>)
}

export default Clothes

export async function getServerSideProps() {
    return {
        props: {
            storesData
        }
    }
}
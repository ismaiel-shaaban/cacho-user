import product_1 from "../../../../public/product/img-1.jpg";
import product_2 from "../../../../public/product/img-2.jpeg";
import ProductCard from "@/components/sheared/productCard/ProductCard";

const newData = [
    {
        id: 1,
        type: "New",
        image: product_1,
        marketName: "Market Name",
        title: "Product Title Product Title",
        price: "100",
        oldPrice: "200",
        link: "#",
        rating: "4.5",
        ratingCount: "100"
    },
    {
        id: 2,
        type: "New",
        image: product_2,
        marketName: "Market Name",
        title: "Product Title Product Title",
        price: "100",
        oldPrice: "200",
        link: "#",
        rating: "4.5",
        ratingCount: "100"
    },
    {
        id: 3,
        type: "New",
        image: product_1,
        marketName: "Market Name",
        title: "Product Title Product Title",
        price: "100",
        oldPrice: "200",
        link: "#",
        rating: "4.5",
        ratingCount: "100"
    },
    {
        id: 4,
        type: "New",
        image: product_2,
        marketName: "Market Name",
        title: "Product Title Product Title",
        price: "100",
        oldPrice: "200",
        link: "#",
        rating: "4.5",
        ratingCount: "100"
    },
]
const SimilarProducts = () => {
    return (
        <div className="mt-6">
            <h3 className="text-[24px] font-[600]">Similar Products</h3>
            <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-4">
                {newData.map((product, index) => (
                    <ProductCard key={index} product={product}/>
                ))}
            </div>
        </div>
    )
}

export default SimilarProducts;
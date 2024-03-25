import ProductSlider from "@/modules/productPageModule/productSlider/ProductSlider";
import ProductInfo from "@/modules/productPageModule/productInfo/ProductInfo";
import ProductReviews from "@/modules/productPageModule/productReviwes/ProductReviews";
import SimilarProducts from "@/modules/productPageModule/similarProducts/SimilarProducts";
import {Divider} from "@nextui-org/react";
import {useRouter} from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json())
const ProductPage = () => {
    const router= useRouter()
    const {id} = router.query
    const {data , error ,isLoading} = useSWR(`https://caco-dev.mimusoft.com/api/customer/products/${id}?with=business`,fetcher)
    console.log("ProductPage -> data", data?.response)
    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Error</div>
    return (
        <section className="container">
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:gap-[30px] mt-6">
                <ProductSlider slides={data?.response.images} />
                <ProductInfo info={data?.response} />
                <ProductReviews />
            </div>
            <Divider className="mt-10"/>
            {/*<SimilarProducts/>*/}
        </section>
    );
}

export default ProductPage;
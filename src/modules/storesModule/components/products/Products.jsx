import {Tab, Tabs} from "@nextui-org/react";
import AllProductsTab from "@/modules/storesModule/components/products/allProductsTab/AllProductsTab";
import ProductCategoryTab from "@/modules/storesModule/components/products/productCategoryTab/ProductCategoryTab";

const Products = ({categories}) => {
    return (
        <Tabs variant={"light"} fullWidth={true} disallowEmptySelection={true} className={"mt-5"} classNames={{
            tabContent: "group-data-[selected=true]:text-white text-[--gray-2] text-[18px] font-[500]",
            tab:"bg-[--gray-in] w-fit rounded-md px-[12px] py-[6px]",
            cursor: "group-data-[selected=true]:bg-[--primary-color] rounded-md w-full",
            tabList: "gap-[20px]",
        }}>
            <Tab title={"All"} key={"all"} >
                <AllProductsTab/>
            </Tab>
            {
                categories?.map((category) => (
                    <Tab key={category.uuid} title={category.name}>
                        <ProductCategoryTab categoryId={category.uuid}/>
                    </Tab>
                ))
            }
        </Tabs>
    )
}

export default Products;
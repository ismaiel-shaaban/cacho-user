import {Tab, Tabs} from "@nextui-org/react";
import AllProductsTab from "@/modules/storesModule/components/products/allProductsTab/AllProductsTab";
import ProductCategoryTab from "@/modules/storesModule/components/products/productCategoryTab/ProductCategoryTab";
import {strings} from "@/utilis/Localization";

const Products = ({categories}) => {
    return (
        <Tabs variant={"light"} fullWidth={true} disallowEmptySelection={true}
              dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}
              className={"md:mt-7"} classNames={{
            tabContent: "group-data-[selected=true]:text-[--primary-color] text-[--gray-2] text-[18px] font-[500]",
            tab:"bg-[--gray-in] w-fit rounded-md px-[12px] py-[6px]",
            cursor: "group-data-[selected=true]:bg-white rounded-md w-full",
            tabList: "gap-[20px]",
        }}>
            <Tab title={strings.All} key={"all"} >
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
import ProductCard from "@/components/sheared/productCard/ProductCard";
import {strings} from "@/utilis/Localization";
import SidebarProducts from "@/components/sheared/sidebarProducts/SidebarProducts";
import {Tab, Tabs} from "@nextui-org/react";

const Products = ({products}) => {
    const categories = products.map(product => product.category);
    return (
        <Tabs variant={"light"} fullWidth={false} classNames={{
            tabContent: "group-data-[selected=true]:text-white text-[--gray-2] text-[18px] font-[500]",
            tab:"bg-[--gray-in] w-fit rounded-md px-[12px] py-[6px]",
            cursor: "group-data-[selected=true]:bg-[--primary-color] rounded-md w-full",
            tabList: "gap-[20px]",
        }}>
            <Tab key={"All"} title={"All"}>
                <div
                    className="grid col-span-12 h-fit md:col-span-9 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-[20px] gap-2 mt-[34px]">
                    {
                        products.map((product, index) => (
                            <ProductCard key={index} product={product}/>
                        ))
                    }
                </div>
            </Tab>
            <Tab key={"New"} title={"New"}>
                <div
                    className="grid col-span-12 h-fit md:col-span-9 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-[20px] gap-2 mt-[34px]">
                    {
                        products.map((product, index) => (
                            <ProductCard key={index} product={product}/>
                        ))
                    }
                </div>
            </Tab>
            <Tab key={"Off"} title={"Off"}>
                <div
                    className="grid col-span-12 h-fit md:col-span-9 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-[20px] gap-2 mt-[34px]">
                    {
                        products.map((product, index) => (
                            <ProductCard key={index} product={product}/>
                        ))
                    }
                </div>
            </Tab>
            <Tab key={"Trend"} title={"Trend"}>
                <div
                    className="grid col-span-12 h-fit md:col-span-9 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-[20px] gap-2 mt-[34px]">
                    {
                        products.map((product, index) => (
                            <ProductCard key={index} product={product}/>
                        ))
                    }
                </div>
            </Tab>
        </Tabs>
    )
}

export default Products;
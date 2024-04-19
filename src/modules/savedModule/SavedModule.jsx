import {Tab, Tabs} from "@nextui-org/react";
import {ProductsTab} from "@/modules/savedModule/components/ProductsTab";
import BusinessTab from "@/modules/savedModule/components/BusinessTab";
import {strings} from "@/utilis/Localization";
import useSWR from "swr";
import {fetcher} from "@/utilis/fetcherFUN";
import {useEffect, useState} from "react";
import SkeletonProducts from "@/components/sheared/skeletonProducts/SkeletonProducts";


const SavedModule = () => {
    const [products, setProducts] = useState([])
    const [stores, setStores] = useState([])
    const [services, setServices] = useState([])
    const {
        data, isLoading, error
    } = useSWR(`https://caco-dev.mimusoft.com/api/customer/favourites?with=business`, fetcher, {
        revalidateOnFocus: false,
    });
    useEffect(() => {
        if (data) {
            const products = [];
            const stores = [];
            const services = [];

            data.response.data.forEach(item => {
                if (item.product && item.product.isService === true) {
                    services.push(item);
                } else if (item.product) {
                    products.push(item);
                }

                if (item.business) {
                    stores.push(item);
                }
            });

            setServices(services);
            setProducts(products);
            setStores(stores);
        }
    }, [data]);


    return (<section className="container">
        <div>
            <Tabs aria-label="Options" variant={"underlined"}
                  classNames={{
                      base: "w-full justify-center",
                  }}
            >
                <Tab key="products" title={strings.Products}>
                    {isLoading ? <SkeletonProducts col={2}/> : <ProductsTab products={products}/>}
                </Tab>
                <Tab key="services" title={strings.Services}>
                    {isLoading ? <SkeletonProducts col={2}/> : <ProductsTab products={services}/>}
                </Tab>
                <Tab key="business" title={strings.Stores}>
                    {isLoading ? <SkeletonProducts col={2}/> : <BusinessTab stores={stores}/>}
                </Tab>
            </Tabs>
        </div>

    </section>);
}

export default SavedModule;
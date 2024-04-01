import {Tab, Tabs} from "@nextui-org/react";
import {ProductsTab} from "@/modules/savedModule/components/ProductsTab";
import BusinessTypesTab from "@/modules/savedModule/components/BusinessTypesTab";


const SavedModule = () => {
    return (<section className="container">
        <div>
            <Tabs aria-label="Options" variant={"underlined"}
            classNames={{
                base:"w-full justify-center",
            }}
            >
                <Tab key="products" title={"Products"}>
                    <ProductsTab/>
                </Tab>
                <Tab key="businessTypes" title={"Business Types"}>
                    <BusinessTypesTab/>
                </Tab>
            </Tabs>
        </div>

        </section>);
}

export default SavedModule;
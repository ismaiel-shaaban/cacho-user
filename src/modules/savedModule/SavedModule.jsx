import {Tab, Tabs} from "@nextui-org/react";
import {ProductsTab} from "@/modules/savedModule/components/ProductsTab";
import BusinessTypesTab from "@/modules/savedModule/components/BusinessTypesTab";
import {strings} from "@/utilis/Localization";


const SavedModule = () => {
    return (<section className="container">
        <div>
            <Tabs aria-label="Options" variant={"underlined"}
            classNames={{
                base:"w-full justify-center",
            }}
            >
                <Tab key="products" title={strings.Products}>
                    <ProductsTab/>
                </Tab>
                <Tab key="businessTypes" title={strings.Stores}>
                    <BusinessTypesTab/>
                </Tab>
            </Tabs>
        </div>

        </section>);
}

export default SavedModule;
import {Spinner, Tab, Tabs} from "@nextui-org/react";
import AboutUs from "@/modules/storesModule/components/aboutUs/AboutUs";
import Products from "@/modules/storesModule/components/products/Products";
import Offers from "@/modules/storesModule/components/offers/Offers";
import Reviews from "@/modules/storesModule/components/reviews/Reviews";
import SaveIcon from "@/utilis/Icons/SaveIcon";
import WhatsAppIcons from "@/utilis/Icons/WhatsAppIcons";
import TextMessageIcon from "@/utilis/Icons/TextMessageIcon";
import SendIcon from "@/utilis/Icons/SendIcon";
import {strings} from "@/utilis/Localization";

const StoreTabs = ({mainData, aboutUs,categories , isServiceProvider}) => {

    if (mainData === null) return <Spinner />;
    return(
        <div className="my-[20px] relative">
            <Tabs aria-label="Store Data" variant={"bordered"}
                  classNames={{
                      base: "bg-[#AD732E1A] rounded-md",
                      tabList: "shadow-none border-none flex-wrap w-fit justify-center items-center",
                      tabContent: "group-data-[selected=true]:text-white text-[--gray-2] px-[30px] py-[10px] w-full text-[18px] font-[500]",
                      cursor: "group-data-[selected=true]:bg-[--rate-color] rounded-md w-full",
                      tab:"w-fit",
                      panel:"mt-[20px]"
                  }}
            >
                <Tab key={strings.AboutUs} title={strings.AboutUs}>
                    <AboutUs aboutUs={aboutUs}/>
                </Tab>
                <Tab key={strings.Products} title={!isServiceProvider ? strings.Products : strings.Services}>
                    <Products categories={categories}/>
                </Tab>
                <Tab key={"Offers"} title={strings.Offers}>
                    <Offers/>
                </Tab>
                <Tab key={"Reviews"} title={strings.Reviews}>
                    <Reviews/>
                </Tab>
            </Tabs>
            <div className="absolute top-0 right-0 me-2 mt-3 rounded-md gap-2 md:gap-2 hidden md:flex">
                <span className="p-[15px] border-2 w-[54px] h-[54px] rounded-md flex items-center justify-center">
                    <SaveIcon/>
                </span>
                <a href={`https://wa.me/${mainData.whatsapp}`} className="p-[15px] bg-[--green] w-[54px] h-[54px] rounded-[10px] flex items-center justify-center">
                        <WhatsAppIcons/>
                </a>
                <a href={`mailto:${mainData.email}`} className="p-[15px] bg-[--rate-color] w-[54px] h-[54px] rounded-[10px] flex items-center justify-center">
                        <TextMessageIcon/>
                </a>
                <a href={`tel:${mainData.phone}`} className="p-[15px] bg-[--primary-color] w-[54px] h-[54px] rounded-[10px] flex items-center justify-center">
                        <SendIcon/>
                </a>
            </div>
        </div>
    )
}

export default StoreTabs;
import {Spinner, Tab, Tabs, Tooltip, useDisclosure} from "@nextui-org/react";
import AboutUs from "@/modules/storesModule/components/aboutUs/AboutUs";
import Products from "@/modules/storesModule/components/products/Products";
import Offers from "@/modules/storesModule/components/offers/Offers";
import Reviews from "@/modules/storesModule/components/reviews/Reviews";
import SaveIcon from "@/utilis/Icons/SaveIcon";
import WhatsAppIcons from "@/utilis/Icons/WhatsAppIcons";
import TextMessageIcon from "@/utilis/Icons/TextMessageIcon";
import SendIcon from "@/utilis/Icons/SendIcon";
import {strings} from "@/utilis/Localization";
import classes from "./StoreTabs.module.css"
import {getCookie} from "cookies-next";
import {useRouter} from "next/router";
import {fetchUserData} from "@/utilis/getUserData";
import SuggestLoginModal from "@/modules/modalsModule/SuggestLoginModal";

const StoreTabs = ({mainData, aboutUs, categories, isServiceProvider}) => {
    const router = useRouter();
    const {id} = router.query
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const handleChatWithStore = async () => {
        const token = getCookie("token")
        try {
            const userData = await fetchUserData(token)
            if (userData){
                const response = await fetch(`https://caco-dev.mimusoft.com/api/customer/businesses/${id}/chats`, {
                    method: "POST", headers: {
                        "Authorization": "Bearer " + token, "Content-Type": "application/json"
                    }
                });
                const data = await response.json();
                const chatId = data.response.uuid; // Adjust this based on your API response structure

                router.push({
                    pathname: "/chat", query: {chatId: chatId},
                });
            } else {
                onOpen()
            }

        } catch (error) {
            console.error("Failed to start chat:", error);
        }
    };

    if (mainData === null) return <Spinner/>;
    return (<div className="my-[20px] relative">
            <Tabs aria-label="Store Data" variant={"bordered"}
                  classNames={{
                      base: "bg-[#AD732E1A] rounded-md",
                      tabList: "shadow-none border-none flex-wrap w-fit justify-center items-center",
                      tabContent: "group-data-[selected=true]:text-white text-[--gray-2] px-[30px] py-[10px] w-full text-[18px] font-[500]",
                      cursor: "group-data-[selected=true]:bg-[--rate-color] rounded-md w-full",
                      tab: "w-fit",
                      panel: "mt-[50px] md:mt-[20px]"
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
            <div className={`absolute right-0 me-2 flex rounded-md gap-2 md:gap-2 ${classes.icons}`}>
                <Tooltip content={strings.SaveStore}>
                <span
                    className="p-[15px] border-2 rounded-md flex items-center justify-center w-[50px] h-[50px] md:w-[54px] md:h-[54px]">
                    <SaveIcon/>
                </span>
                </Tooltip>

                <Tooltip
                    content={"Chat With Store"}
                    classNames={{content: "bg-[--rate-color] text-white"}}
                    onClick={handleChatWithStore}
                >
                    <a href={`https://wa.me/${mainData.whatsapp}`}
                       className="p-[15px] bg-[--green] w-[54px] h-[54px] rounded-[10px] flex items-center justify-center">
                        <WhatsAppIcons/>
                    </a>
                </Tooltip>
                <Tooltip
                    content={"Chat With Store"}
                    classNames={{content: "bg-[--rate-color] text-white"}}
                >
                    <span
                        onClick={handleChatWithStore}
                        className="p-[15px] bg-[--rate-color] rounded-[10px] flex items-center justify-center w-[50px] h-[50px] cursor-pointer md:w-[54px] md:h-[54px]"
                    >
                        <TextMessageIcon/>
                    </span>
                </Tooltip>
                <Tooltip content={"Location"} classNames={{
                    content: "bg-[--primary-color] text-white"
                }}>
                    <a href={`tel:${mainData.phone}`}
                       className="p-[15px] bg-[--primary-color] rounded-[10px] flex items-center justify-center w-[50px] h-[50px] md:w-[54px] md:h-[54px]">
                        <SendIcon/>
                    </a>
                </Tooltip>
            </div>
        <SuggestLoginModal isOpen={isOpen} onOpenChange={onOpenChange}/>
        </div>)
}

export default StoreTabs;
import {
    Badge, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Spinner, Tab, Tabs, Tooltip, useDisclosure
} from "@nextui-org/react";
import Link from "next/link";
import AboutUs from "@/modules/storesModule/components/aboutUs/AboutUs";
import Products from "@/modules/storesModule/components/products/Products";
import Offers from "@/modules/storesModule/components/offers/Offers";
import Reviews from "@/modules/storesModule/components/reviews/Reviews";
import WhatsAppIcons from "@/utilis/Icons/WhatsAppIcons";
import TextMessageIcon from "@/utilis/Icons/TextMessageIcon";
import SendIcon from "@/utilis/Icons/SendIcon";
import { strings } from "@/utilis/Localization";
import classes from "./StoreTabs.module.css";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { fetchUserData } from "@/utilis/getUserData";
import SuggestLoginModal from "@/modules/modalsModule/SuggestLoginModal";
import BookMark from "@/utilis/Icons/BookMark";
import { CiDeliveryTruck } from "react-icons/ci";
import { formatPhoneNumber } from "@/utilis/formatPhoneNumber";
import { BiLinkExternal } from "react-icons/bi";


const StoreTabs = ({ mainData, aboutUs, categories, isServiceProvider }) => {
    const router = useRouter();
    const { id } = router.query;
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const message = encodeURIComponent(`${strings.WhatsAppMessage}`);

    const handleChatWithStore = async () => {
        const token = getCookie("token");
        try {
            const userData = await fetchUserData(token);
            if (userData) {
                const response = await fetch(`https://management.cachooapp.com/api/customer/businesses/${id}/chats`, {
                    method: "POST", headers: {
                        "Authorization": "Bearer " + token, "Content-Type": "application/json"
                    }
                });
                const data = await response.json();
                const chatId = data.response.uuid; // Adjust this based on your API response structure

                router.push({
                    pathname: "/chat", query: { chatId: chatId }
                });
            } else {
                onOpen();
            }

        } catch (error) {
            console.error("Failed to start chat:", error);
        }
    };

    if (mainData === null) return <Spinner />;
    return (<div className="my-[20px] relative" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
        <Tabs aria-label="Store Data" variant={"bordered"} defaultSelectedKey={strings.Products}
            classNames={{
                base: "bg-[#AD732E1A] rounded-md",
                tabList: "shadow-none border-none flex-wrap w-fit justify-center items-center",
                tabContent: "group-data-[selected=true]:text-white text-[--gray-2] px-[30px] py-[10px] w-full text-[18px] font-[500]",
                cursor: "group-data-[selected=true]:bg-[--rate-color] rounded-md w-full",
                tab: "w-fit",
                panel: "mt-[50px] md:mt-[60px]"
            }}
        >
            <Tab key={strings.AboutUs} title={strings.AboutUs}>
                <AboutUs aboutUs={aboutUs} />
            </Tab>
            <Tab key={strings.Products} title={!isServiceProvider ? strings.Products : strings.Services}>
                <Products categories={categories} />
            </Tab>
            <Tab key={"Offers"} title={strings.Offers}>
                <Offers />
            </Tab>
            <Tab key={"Reviews"} title={strings.Reviews}>
                <Reviews />
            </Tab>
        </Tabs>
        <div className={`absolute end-0 flex rounded-md justify-evenly w-full gap-2 md:gap-2 md:w-auto md:justify-normal ${classes.icons}`}>
            <Tooltip content={strings.SaveStore}>
                <Button isIconOnly
                    className="p-[15px] border-2 rounded-md bg-transparent !w-[50px] !h-[50px] cursor-pointer !md:w-[54px] !md:h-[54px]">
                    <BookMark productId={id} isProduct={false} isSaved={aboutUs.isFavourite} />
                </Button>
            </Tooltip>
            <Tooltip
                content={strings.ContactViaWhatsApp}
                classNames={{ content: "bg-[--green] text-white" }}
                onClick={handleChatWithStore}
            >
                <Button isIconOnly as={Link} href={`https://wa.me/${formatPhoneNumber(mainData?.whatsapp)}?text=${message}`}
                    target={"_blank"}
                    isDisabled={!mainData.whatsappEnabled || !mainData.whatsapp}
                    className="p-[15px] bg-[--green] rounded-[10px] !w-[50px] !h-[50px] cursor-pointer !md:w-[54px] !md:h-[54px]">
                    <WhatsAppIcons />
                </Button>
            </Tooltip>
            <Tooltip
                content={strings.ChatWithStore}
                classNames={{ content: "bg-[--rate-color] text-white" }}
            >
                <Button
                    isDisabled={!mainData.chatEnabled}
                    isIconOnly
                    onClick={handleChatWithStore}
                    className="p-[15px] bg-[--rate-color] rounded-[10px] !w-[50px] !h-[50px] cursor-pointer !md:w-[54px] !md:h-[54px]"
                >
                    <TextMessageIcon />
                </Button>
            </Tooltip>
            <Tooltip content={strings.Location} classNames={{
                content: "bg-[--primary-color] text-white"
            }}>
                <Button as={Link} isIconOnly target={"_blank"}
                    href={`https://www.google.com/maps/search/?api=1&query=${mainData.location.lat},${mainData.location.lng}`}
                    className="p-[15px] bg-[--primary-color] rounded-[10px] !w-[50px] !h-[50px] cursor-pointer !md:w-[54px] !md:h-[54px]">
                    <SendIcon />
                </Button>
            </Tooltip>

            <Tooltip content={strings.DeliveryCompanies} classNames={{
                content: "bg-blue-600 text-white"
            }}>
                <div><Dropdown backdrop={"opaque"} dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
                    <DropdownTrigger>
                        <Button
                            isIconOnly
                            isDisabled={mainData.deliveryCompaniesCount === 0}
                            className="p-[15px] bg-blue-600 shadow-xl rounded-[10px] !w-[50px] !h-[50px] cursor-pointer !md:w-[54px] !md:h-[54px]">
                            <CiDeliveryTruck size={24} className={"text-white"} />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu variant="faded" aria-label="Static Actions" color={"secondary"}
                        items={mainData.deliveryCompanies}>
                        {(item) => (<DropdownItem
                            key={item.name}
                            href={item.link}
                            as={Link}
                            title={item.name}
                            endContent={<BiLinkExternal />}
                            startContent={<>
                                <img lazy src={item.image} alt={item.name} className="w-[50px] [h-50px]" />
                            </>}
                        />)}
                    </DropdownMenu>
                </Dropdown></div>
            </Tooltip>
        </div>
        <SuggestLoginModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>)
}

export default StoreTabs;

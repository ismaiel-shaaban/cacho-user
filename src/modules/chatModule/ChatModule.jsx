import UsersChats from "@/modules/chatModule/components/UsersChats";
import ChatBody from "@/modules/chatModule/components/ChatBody";
import {strings} from "@/utilis/Localization";
import {Button, useDisclosure} from "@nextui-org/react";
import {useEffect, useState} from "react";
import UserChatsModal from "@/modules/chatModule/components/UserChatsModal";

const ChatModule = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setShowPopup(window.innerWidth >= 768); // Show sidebar for screen widths <= 768px (md breakpoint)
        };
        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (<section className="container mb-6" dir={strings.getLanguage() === "en" ? "ltr" : "rtl"}>
            <div className="sm:grid grid-cols-12 gap-[20px] h-[88vh] mt-[20px]">
                {!showPopup && (<div className="col-span-3">
                        <Button onPress={onOpen} variant="shadow" color="primary" className="mb-3">
                            {strings.Chats}
                        </Button>
                        <UserChatsModal isOpen={isOpen} onOpenChange={onOpenChange}/>
                    </div>)}

                {showPopup && <UsersChats/>}
                <ChatBody/>
            </div>
        </section>);
};

export default ChatModule;

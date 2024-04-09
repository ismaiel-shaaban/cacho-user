
import {useEffect, useState} from "react";
import UsersChats from "@/modules/chatModule/components/UsersChats";
import ChatBody from "@/modules/chatModule/components/ChatBody";
import useSWR from "swr";
import {fetcher} from "@/utilis/fetcherFUN";
import {Spinner} from "@nextui-org/react";
import {getCookie} from "cookies-next";

const ChatModule = () => {
    const [selectedChat, setSelectedChat] = useState(null);
    const [chats, setChats] = useState([]);
    const { data, isLoading, error } = useSWR(
        "https://caco-dev.mimusoft.com/api/customer/chats?with=business",
        fetcher
    );
    useEffect(() => {
        if (data){
            setChats(data.response.data);
        }
    }, [data]);
    const handelPassSelectedChat = (chat) => {
        setSelectedChat(chat);
    }
    if (isLoading) return <Spinner/>
    if(error) return <p>failed to load</p>
    return (
        <section className="container mb-6">
            <div className="grid grid-cols-12 gap-[20px] h-[88vh] mt-[20px]">
                <UsersChats chats={chats} passSelectedChat={handelPassSelectedChat} />
                <ChatBody selectedChat={selectedChat}  />
            </div>
        </section>
    );
};

export default ChatModule;

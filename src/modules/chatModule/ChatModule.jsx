
import {useEffect, useState} from "react";
import UsersChats from "@/modules/chatModule/components/UsersChats";
import ChatBody from "@/modules/chatModule/components/ChatBody";
import useSWR from "swr";
import {fetcher} from "@/utilis/fetcherFUN";
import {Spinner} from "@nextui-org/react";
import {getCookie} from "cookies-next";

const ChatModule = () => {
    const [selectedChat, setSelectedChat] = useState(null);
    const [messages, setMessages] = useState("");
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
    const handelpassSelelctedChat = (chat) => {
        setSelectedChat(chat);
    }
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch(
                    `https://caco-dev.mimusoft.com/api/customer/chats/${selectedChat}/messages`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + getCookie("token"),
                        },
                    }
                );
                const data = await response.json();
                setMessages(data.response.data);
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };
        if (selectedChat){
            fetchMessages();
        }
    }, [selectedChat]);
    if (isLoading) return <Spinner/>
    if(error) return <p>failed to load</p>
    return (
        <section className="container mb-6">
            <div className="grid grid-cols-12 gap-[20px] h-[88vh] mt-[20px]">
                <UsersChats chats={chats} passSelelctedChat={handelpassSelelctedChat} />
                <ChatBody messages={messages}  />
            </div>
        </section>
    );
};

export default ChatModule;

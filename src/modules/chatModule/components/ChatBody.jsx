
import MessageItem from "@/modules/chatModule/components/MessageItem";
import {Divider, Spinner} from "@nextui-org/react";
import {useEffect, useState} from "react";
import {getCookie} from "cookies-next";
import {fetcher} from "@/utilis/fetcherFUN";
import useSWRInfinite from "swr/infinite";
import {useRouter} from "next/router";
import {strings} from "@/utilis/Localization";


const ChatBody = () => {
    const {query} = useRouter();
    const {chatId} = query
    const [messages, setMessages] = useState([]);
    const [selectedChat, setSelectedChat] = useState(chatId);
    useEffect(()=>{
        setSelectedChat(chatId)
    },[chatId])

    const { data, isLoading, error, size, setSize } = useSWRInfinite(
        (index) => {
            if (!selectedChat) return null; // Return null if selectedChat is null or undefined
            return `https://caco-dev.mimusoft.com/api/customer/chats/${selectedChat}/messages?page=${index + 1}`;
        },
        fetcher,
        {
            revalidateOnFocus: false,
            revalidateIfStale: false
        }
    );

    useEffect(() => {
        if (data) {
            // Concatenate new messages to the beginning of the messages array
            const newMessages = data.flatMap((page) => page.response.data);
            setMessages(newMessages);
        }
    }, [data]);

    const handleLoadMore = () => {
        if (!data || data.length === 0) return; // If data is not yet loaded or empty, do nothing

        const lastPage = data[data.length - 1].response.meta.last_page;
        if (lastPage > size) {
            setSize((size) => size + 1);
        }
    };

    const handleScroll = (e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.target;
        if (scrollTop === 0) {
            handleLoadMore(); // Call onLoadMore when scroll position is at the top
        }
    };

    return (
        <div className=" bg-white h-[88vh] rounded-e-xl p-[24px] col-span-9 md:col-span-8">
            <div className="h-full">
                <div className="flex gap-4 items-center">
                    <div className="w-[50px] h-[50px]">
                        <img
                            src="https://avatars.githubusercontent.com/u/30373425?v=4"
                            alt="User"
                            className="rounded-md w-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="text-[20px] font-medium">John Doe</h3>
                        <p className="text-green-500 text-[14px] font-medium">
                            Online <span className="text-gray-400">12:55 am</span>
                        </p>
                    </div>
                </div>
                <Divider className="my-2" />
                <div className="flex flex-col justify-between h-[calc(100%-65px)]">
                    <div className="overflow-y-scroll"
                    onScroll={handleScroll}
                    >
                        {
                            isLoading && <div className="w-full flex justify-center">
                            <Spinner/>
                            </div>
                        }
                        {messages.length>0 && messages.slice().reverse().map((message , index) => (
                            <MessageItem
                                key={message.uuid + '-' + index}
                                content={message.content}
                                sender={message.senderType}
                            />
                        ))}

                    </div>
                    <div className="chat-input mt-[20px]">
                        <input
                            type="text"
                            placeholder={strings.TypeAMessage}
                            className="w-full p-[10px] rounded-md border border-gray-300"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBody;

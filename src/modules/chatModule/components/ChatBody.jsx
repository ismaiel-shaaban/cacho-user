import MessageItem from "@/modules/chatModule/components/MessageItem";
import {Button, Divider, Input, Spinner} from "@nextui-org/react";
import {useEffect, useState} from "react";
import {getCookie} from "cookies-next";
import {fetcher} from "@/utilis/fetcherFUN";
import useSWRInfinite from "swr/infinite";
import {useRouter} from "next/router";
import {strings} from "@/utilis/Localization";
import {IoMdSend} from "react-icons/io";
import {VscSend} from "react-icons/vsc";


const ChatBody = ({selectedChatData}) => {
    const {query} = useRouter();
    const {chatId} = query
    const [messages, setMessages] = useState([]);
    const [selectedChat, setSelectedChat] = useState(chatId);
    const [message, setMessage] = useState("")
    useEffect(() => {
        setSelectedChat(chatId)
    }, [chatId])

    const {data, isLoading, error, size, setSize} = useSWRInfinite((index) => {
        if (!selectedChat) return null; // Return null if selectedChat is null or undefined
        return `https://caco-dev.mimusoft.com/api/customer/chats/${selectedChat}/messages?page=${index + 1}`;
    }, fetcher);

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
        const {scrollTop, clientHeight, scrollHeight} = e.target;
        if (scrollTop === 0) {
            handleLoadMore(); // Call onLoadMore when scroll position is at the top
        }
    };

    const handleMessageSend = async () => {
        const token = await getCookie("token")
        await fetch(`https://caco-dev.mimusoft.com/api/customer/chats/${chatId}/messages`, {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token
            }, body: JSON.stringify({
                content: message,
            }),
        });
        setMessage(''); // Clear the message input after sending
    };

    return (<div className=" bg-white h-[88vh] rounded-e-xl p-[24px] col-span-9 md:col-span-8">
        <div className="h-full">
            <div className="flex gap-4 items-center">
                <div className="w-[50px] h-[50px]">
                    <img
                        src={selectedChatData?.business?.image}
                        alt="User"
                        className="rounded-md w-full object-cover"
                    />
                </div>
                <div>
                    <h3 className="text-[20px] font-medium">{selectedChatData?.business?.title}</h3>
                    <p className="text-green-500 text-[14px] font-medium">
                        Online <span className="text-gray-400">12:55 am</span>
                    </p>
                </div>
            </div>
            <Divider className="my-2"/>
            <div className="flex flex-col justify-between h-[calc(100%-65px)]">
                <div className="overflow-y-scroll"
                     onScroll={handleScroll}
                >
                    {isLoading && <div className="w-full flex justify-center">
                        <Spinner/>
                    </div>}
                    {messages.length > 0 && messages.slice().reverse().map((message, index) => (<MessageItem
                        key={message.uuid + '-' + index}
                        content={message.content}
                        sender={message.senderType}
                    />))}

                </div>
                <div className="flex items-center gap-2 mt-[20px]">
                    <Button
                        onClick={handleMessageSend}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        <VscSend size={20}/>
                    </Button>
                    <Input
                        type="text"
                        placeholder={strings.TypeAMessage}
                        variant={"bordered"}
                        size={"lg"}
                        className="p-[10px] w-full border-gray-300"
                        value={message}
                        onValueChange={setMessage}
                    />
                </div>
            </div>
        </div>
    </div>);
};

export default ChatBody;

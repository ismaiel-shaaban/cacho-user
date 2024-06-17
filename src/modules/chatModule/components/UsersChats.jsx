import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Input, Spinner } from "@nextui-org/react";
import useSWR from "swr";
import { CiSearch } from "react-icons/ci";
import { fetcher } from "@/utilis/fetcherFUN";
import { strings } from "@/utilis/Localization";


const UsersChats = ({ onSelectChat }) => {
    const router = useRouter();
    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const { data, isLoading, error } = useSWR(
        "https://management.cachooapp.com/api/customer/chats?with=business",
        fetcher
    );

    useEffect(() => {
        if (data) {
            setChats(data.response.data);
        }
    }, [data]);

    useEffect(() => {
        const chatId = router.query.chatId;
        if (chatId) {
            const selectedChatData = chats.find(chat => chat.uuid === chatId);
            if (selectedChatData) {
                setSelectedChat(chatId);
                onSelectChat(selectedChatData);
            }
        }
    }, [router.query.chatId, chats, onSelectChat]);

    const handleSelectChat = (chatId) => {
        const selectedChatData = chats.find(chat => chat.uuid === chatId);
        setSelectedChat(chatId);
        router.push({
            pathname: router.pathname,
            query: { ...router.query, chatId }
        });
        onSelectChat(selectedChatData);
    };

    if (isLoading) return <Spinner />;
    if (error) return <p>Failed to load</p>;

    return (
        <div className="col-span-4 bg-white rounded-s-xl p-[24px] h-full">
            <div className="flex mb-[20px] flex-col">
                <h3 className="text-[24px] font-medium">{strings.Chats}</h3>
                <Input
                    classNames={{
                        base: "w-full h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-[--gray]",
                    }}
                    placeholder={strings.TypeToSearch}
                    size="sm"
                    endContent={<CiSearch size={20} />}
                    type="search"
                />
            </div>
            <div className="overflow-y-auto h-[calc(100%-65px)]">
                {chats.map(chat => (
                    <div
                        key={chat.uuid}
                        onClick={() => handleSelectChat(chat.uuid)}
                        className={`chat-item flex items-center gap-[10px] p-[10px] rounded-md cursor-pointer ${selectedChat === chat.uuid ? "bg-gray-100" : ""}`}
                    >
                        <div className="bg-gray-300 w-[50px] h-[50px] rounded-full overflow-hidden flex items-center justify-center">
                            <img lazy
                                src={chat.business.image}
                                alt="User"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="chat-info">
                            <h4 className="text-[18px] font-medium">{chat.business.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsersChats;

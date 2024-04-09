import { useState } from "react";
import { Input } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import useSWR from "swr";
import { getCookie } from "cookies-next";


const UsersChats = ({chats ,passSelectedChat}) => {
    const [selectedChat, setSelectedChat] = useState(null);
    const handleSelectChat = (chatId) => {
        setSelectedChat(chatId);
        passSelectedChat(chatId);
    }
    return (
        <div className="col-span-4 bg-white rounded-l-xl p-[24px] h-[88vh]">
            <div className="flex mb-[20px] flex-col">
                <h3 className="text-[24px] font-medium">Chats</h3>
                <Input
                    classNames={{
                        base: "w-full h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-[--gray]",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    endContent={<CiSearch size={20} />}
                    type="search"
                />
            </div>
            <div className="overflow-y-auto h-[calc(100%-65px)]">
                {chats.map((chat) => (
                    <div
                        key={chat.uuid}
                        onClick={() => handleSelectChat(chat.uuid)}
                        className={`chat-item flex items-center gap-[10px] p-[10px] rounded-md cursor-pointer ${
                            selectedChat === chat.uuid ? "bg-gray-100" : ""
                        }`}
                    >
                        <div className="bg-gray-300 w-[50px] h-[50px] rounded-full">
                            <img
                                src={chat.business.image}
                                alt="User"
                                className="rounded-md w-full object-cover"
                            />
                        </div>
                        <div className="chat-info">
                            <h4 className="text-[18px] font-medium">{chat.business.title}</h4>
                            {/*<p className="text-gray-500">{lastMessage?.content}</p>*/}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsersChats;

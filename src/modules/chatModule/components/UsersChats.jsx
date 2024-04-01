import {Input} from "@nextui-org/react";
import {CiSearch} from "react-icons/ci";

const UsersChats = () => {
    const chats = [
        { id: 1, name: "John Doe", lastMessage: "Hello, how are you?" },
        { id: 2, name: "Jane Doe", lastMessage: "I'm fine, thank you." },
        { id: 3, name: "John Doe", lastMessage: "Hello, how are you?" },
        { id: 4, name: "Jane Doe", lastMessage: "I'm fine, thank you." },
        { id: 5, name: "John Doe", lastMessage: "Hello, how are you?" },
        { id: 6, name: "Jane Doe", lastMessage: "I'm fine, thank you." },
        { id: 7, name: "John Doe", lastMessage: "Hello, how are you?" },
        { id: 8, name: "Jane Doe", lastMessage: "I'm fine, thank you." },
        { id: 9, name: "John Doe", lastMessage: "Hello, how are you?" },
        { id: 10, name: "Jane Doe", lastMessage: "I'm fine, thank you." },
    ]
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
                    <div key={chat.id} className="chat-item flex items-center gap-[10px] p-[10px] rounded-md hover:bg-gray-100 cursor-pointer">
                        <div className="bg-gray-300 w-[50px] h-[50px] rounded-full"></div>
                        <div className="chat-info">
                            <h4 className="text-[18px] font-bold">{chat.name}</h4>
                            <p className="text-gray-500">{chat.lastMessage}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default UsersChats;
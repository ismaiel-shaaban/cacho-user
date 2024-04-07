
import MessageItem from "@/modules/chatModule/components/MessageItem";
import { Divider } from "@nextui-org/react";


const ChatBody = ({messages}) => {
    return (
        <div className="col-span-8 bg-white h-[88vh] rounded-r-xl p-[24px]">
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
                    <div className="overflow-y-scroll">
                        {messages && messages.map((message) => (
                            <MessageItem
                                key={message.uuid}
                                content={message.content}
                                sender={message.senderType}
                            />
                        ))}

                    </div>
                    <div className="chat-input mt-[20px]">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="w-full p-[10px] rounded-md border border-gray-300"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBody;

import {useState} from 'react';
import MessageItem from "@/modules/chatModule/components/MessageItem";
import Image from 'next/image';
import {Divider} from "@nextui-org/react";

const ChatBody = () => {
    const [messages, setMessages] = useState([{id: 1, content: 'Hello, how are you?', sender: 'other'}, {
        id: 2,
        content: "I'm fine, thank you.",
        sender: 'self'
    }, {id: 3, content: 'How can I help you?', sender: 'other'}, {
        id: 4,
        content: "I'm looking for a job.",
        sender: 'self'
    }, {id: 5, content: 'I can help you with that.', sender: 'other'}, {
        id: 6,
        content: "That would be great!",
        sender: 'self'
    }, {id: 7, content: 'Let me know your skills.', sender: 'other'}, {
        id: 8,
        content: "I'm a full stack developer.",
        sender: 'self'
    }, {id: 9, content: 'Great! I have a job for you.', sender: 'other'}, {
        id: 10,
        content: "I'm interested!",
        sender: 'self'
    }, {id: 11, content: 'Hello, how are you?', sender: 'other'}, {
        id: 12,
        content: "I'm fine, thank you.",
        sender: 'self'
    }, {id: 13, content: 'How can I help you?', sender: 'other'}, {
        id: 14,
        content: "I'm looking for a job.",
        sender: 'self'
    },]);


    return (<div className="col-span-8 bg-white h-[88vh] rounded-r-xl p-[24px]">
            <div className="h-full">
                <div className="flex gap-4 items-center">
                    <div className="w-[50px] h-[50px]">
                        <img src="https://avatars.githubusercontent.com/u/30373425?v=4" alt="User"
                             className="rounded-md w-full object-cover"/>
                    </div>
                    <div>
                        <h3 className="text-[20px] font-medium">John Doe</h3>
                        <p className="text-green-500 text-[14px] font-medium">Online <span className="text-gray-400">12:55 am</span></p>
                    </div>
                </div>
                <Divider className="my-2" />
                <div className="flex flex-col justify-between h-[calc(100%-65px)]">
                    <div className="overflow-y-scroll">
                        {messages.map((message) => (
                            <MessageItem key={message.id} content={message.content} sender={message.sender}/>))}
                    </div>
                    <div className="chat-input mt-[20px]">
                        <input type="text" placeholder="Type a message..."
                               className="w-full p-[10px] rounded-md border border-gray-300"/>
                    </div>
                </div>
            </div>
        </div>);
}

export default ChatBody;

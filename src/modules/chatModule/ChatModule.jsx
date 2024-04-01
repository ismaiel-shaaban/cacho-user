import UsersChats from "@/modules/chatModule/components/UsersChats";
import ChatBody from "@/modules/chatModule/components/ChatBody";

const ChatModule = () => {
    return (
        <section className="container mb-6">
            <div className="grid grid-cols-12 gap-[20px] h-[88vh] mt-[20px]">
                <UsersChats/>
                <ChatBody/>
            </div>
        </section>
    );
}

export default ChatModule;
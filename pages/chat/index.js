import ChatModule from "@/modules/chatModule/ChatModule";
import Head from "next/head";

const ChatPage = () => {
    return <>
        <Head>
            <title>Chat</title>
        </Head>
        <ChatModule/>
    </>
}

export default ChatPage;
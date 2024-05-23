const MessageItem = ({content, sender}) => {
    return (<>
            <div
                className={`my-[10px] flex ${sender !== "business" && 'justify-end'}`}>
                <div
                    className={`w-fit py-[16px] px-[19px] rounded-[10px] ${sender === 'business' ? 'text-white bg-[--primary-color]' : 'bg-[--gray]'}`}>
                    <p>{content}</p>
                </div>
            </div>
            <div className={`message-time text-gray-400 text-[12px]  ${sender !== "business" && 'text-end'}`}>{}</div>
        </>);
}

export default MessageItem;

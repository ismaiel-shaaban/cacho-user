import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { fetchUserData } from "@/utilis/getUserData";
import { useDisclosure } from "@nextui-org/react";
import SuggestLoginModal from "@/modules/modalsModule/SuggestLoginModal";
import ConfirmPhoneModal from "@/modules/modalsModule/ConfirmPhoneModal";

const BookMark = ({ productId, isSaved, isProduct }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isSavedState, setIsSavedState] = useState(isSaved);
    const [needVerification, setNeedVerification] = useState(false);
    const [email, setEmail] = useState("");

    useEffect(() => {
        setIsSavedState(isSaved)
    }, [isSaved]);

    const handleClick = async () => {

        const token = getCookie('token')
        try {
            const userData = await fetchUserData(token)
            if (userData) {
                setEmail(userData.email)
                if (userData.needVerification === true) {
                    setNeedVerification(true)
                    const sendCode = await fetch("https://management.cachooapp.com/api/customer/auth/code/send", {
                        method: "POST", headers: {
                            "Content-Type": "application/json"
                        }, body: JSON.stringify({
                            "username": email
                        })
                    });
                    const res = await sendCode.json()
                    if (res.code === 200 || res.code === 401) {
                        onOpen()
                    }
                } else {
                    await fetch(`https://management.cachooapp.com/api/customer/${isProduct ? "products" : "businesses"}/${productId}/favourite`, {
                        method: isSavedState ? "DELETE" : "POST", headers: {
                            "Content-Type": "application/json", "Authorization": `Bearer ${token}`
                        },
                    });
                    setIsSavedState(!isSavedState);
                }
            } else {
                onOpen()
            }
        } catch (e) {
            console.log(e);
        }

    };

    return (<>
        <div onClick={handleClick} className="p-2 backdrop-blur-md bg-white/85 rounded-md cursor-pointer z-10">
            {isSavedState === false ? <span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.9375 6.78711C8.2725 7.27461 9.7275 7.27461 11.0625 6.78711" stroke="#8E8E93" strokeWidth="1.125"
                        strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M12.615 1.5H5.38499C3.78749 1.5 2.48999 2.805 2.48999 4.395V14.9625C2.48999 16.3125 3.45749 16.8825 4.64249 16.23L8.30249 14.1975C8.69249 13.98 9.32249 13.98 9.70499 14.1975L13.365 16.23C14.55 16.89 15.5175 16.32 15.5175 14.9625V4.395C15.51 2.805 14.2125 1.5 12.615 1.5Z"
                        stroke="#8E8E93" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M12.615 1.5H5.38499C3.78749 1.5 2.48999 2.805 2.48999 4.395V14.9625C2.48999 16.3125 3.45749 16.8825 4.64249 16.23L8.30249 14.1975C8.69249 13.98 9.32249 13.98 9.70499 14.1975L13.365 16.23C14.55 16.89 15.5175 16.32 15.5175 14.9625V4.395C15.51 2.805 14.2125 1.5 12.615 1.5Z"
                        stroke="#8E8E93" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </span> : <span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.615 1.5H5.38499C3.78749 1.5 2.48999 2.805 2.48999 4.395V14.9625C2.48999 16.3125 3.45749 16.8825 4.64249 16.23L8.30249 14.1975C8.69249 13.98 9.32249 13.98 9.70499 14.1975L13.365 16.23C14.55 16.89 15.5175 16.32 15.5175 14.9625V4.395C15.51 2.805 14.2125 1.5 12.615 1.5ZM11.2575 7.3125C10.53 7.575 9.76499 7.71 8.99999 7.71C8.23499 7.71 7.46999 7.575 6.74249 7.3125C6.44999 7.2075 6.29999 6.885 6.40499 6.5925C6.51749 6.3 6.83999 6.15 7.13249 6.255C8.33999 6.69 9.66749 6.69 10.875 6.255C11.1675 6.15 11.49 6.3 11.595 6.5925C11.7 6.885 11.55 7.2075 11.2575 7.3125Z"
                        fill="#004693" />
                </svg>
            </span>}
        </div>
        {isOpen && needVerification === false && <SuggestLoginModal isOpen={isOpen} onOpenChange={onOpenChange} />}
        {isOpen && needVerification === true && <ConfirmPhoneModal email={email} isOpen={isOpen} onOpenChange={onOpenChange} />}
    </>)
}

export default BookMark;
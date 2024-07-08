import {strings} from '@/utilis/Localization';
import {useEffect, useMemo, useState} from 'react';
import {
    Badge,
    Button, Divider, Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, useDisclosure,
} from "@nextui-org/react";
import UserInfo from "@/modules/layout/navBar/components/userInfo/UserInfo";
import SearchInput from "@/modules/layout/navBar/components/searchInput/SearchInput";
import {MessagesIcon} from "@/utilis/Icons/MessagesIcon";
import SelectLang from "@/modules/layout/navBar/components/selectLang/SelectLang";
import Logo from "@/modules/layout/navBar/components/logo";
import Link from "next/link";
import {getCookie} from "cookies-next";
import Image from "next/image";
import savedLink from "../../../../public/savedLink.svg"
import Pusher from "pusher-js";
import {fetchUserData} from "@/utilis/getUserData";
import {useRouter} from "next/router";
import ConfirmPhoneModal from "@/modules/modalsModule/ConfirmPhoneModal";


const NavBar = ({userLocation}) => {
    const router = useRouter();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const tokenData = getCookie('token');
    const [isNotification, setIsNotification] = useState(false);
    const [needVerification, setNeedVerification] = useState(false);
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (tokenData !== null && tokenData !== "" && tokenData !== undefined) {
            setIsLogin(true);
        }
    }, [tokenData]);

    useEffect(() => {
        const pusherClient = new Pusher("f63ea3d75d76c809ee46", {
            secret: `1a4f5d2c362150a804f5`, cluster: `eu`,
        })

        const channel = pusherClient.subscribe('chats');
        channel.bind('messageCreated', (data) => {
            const userData = JSON.parse(localStorage.getItem("userData"));
            const {uuid} = userData;
            const receiverUuid = data.receiver.uuid
            if (data && uuid === receiverUuid) {
                setIsNotification(true);
            }
        });
        return () => {
            pusherClient.unsubscribe('chats');
        };
    }, []);

    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        setIsDarkMode(savedDarkMode === 'true');
        updateCssVariables(savedDarkMode === 'true');
    }, []);


    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode.toString());
        updateCssVariables(newDarkMode);
    };

    const updateCssVariables = (darkMode) => {
        document.documentElement.style.setProperty('--text-color', darkMode ? '#fff' : '#333');
        document.documentElement.style.setProperty('--bg-color', darkMode ? '#333' : '#fff');
    };

    const memoizedUserInfo = useMemo(() => {
        return <UserInfo userLocation={userLocation}/>;
    }, [userLocation]);

    const handelChatLink = async () => {
        setIsNotification(false)
        const token = getCookie("token");
        try {
            const userData = await fetchUserData(token);
            if (userData) {
                setEmail(userData.email)
                if (userData.needVerification === true) {
                    setNeedVerification(true)
                    const sendCode = await fetch("https://management.cachooapp.com/api/customer/auth/code/send", {
                        method: "POST", headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        }, body: JSON.stringify({
                            "username": email
                        })
                    });
                    const res = await sendCode.json()
                    if (res.code === 200 || res.code === 401) {
                        onOpen()
                    }
                } else {
                    router.push({
                        pathname: "/chat",
                    });
                }
            } else {
                onOpen();
            }
        } catch (e) {
            console.error("Failed to start chat:", e);
        }
    }


    return (<>
        <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} className="p-0"
                maxWidth={"xl"}
            // classNames={{wrapper: "!md:container"}}
                aria-label="Main navigation"
                dir={strings.getLanguage() === 'ar' ? 'rtl' : 'ltr'}>
            <NavbarContent justify="start" className={"gap-2 md:w-2/3"}>
                <NavbarItem onClick={() => {
                    setIsMenuOpen(false)
                }}>
                    <Logo/>
                </NavbarItem>
                <NavbarItem className="min-w-full hidden md:flex">
                    <SearchInput/>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="hidden gap-2 lg:flex md:w-1/3" justify="end">
                <NavbarItem>
                    <SelectLang/>
                </NavbarItem>
                {isLogin ? <>
                    <NavbarItem onClick={() => {
                        setIsMenuOpen(false)
                    }}>
                    <span onClick={handelChatLink}>
                        {isNotification ? <Badge content="" color="success" shape="circle" placement="top-right">
                            <MessagesIcon/>
                        </Badge> : <MessagesIcon/>}
                    </span>
                    </NavbarItem>
                    <NavbarItem onClick={() => {
                        setIsMenuOpen(false)
                    }}>
                        <Link href={"/saved"}>
                            <Image quality={100} src={savedLink} alt={"bookmark"} width={24} height={24}/>
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Divider orientation="vertical" className="w-[1px] h-[44px]"/>
                    </NavbarItem>
                    <NavbarItem>
                        {memoizedUserInfo}
                    </NavbarItem>
                </> : <>
                    <NavbarItem onClick={() => {
                        setIsMenuOpen(false)
                    }}>
                        <Button className="bg-[--primary-color] text-white" as={Link}
                                href={"/login"}>{strings.LogIn}</Button>
                    </NavbarItem>
                    <NavbarItem>
                        {memoizedUserInfo}
                    </NavbarItem>
                </>}
            </NavbarContent>
            <NavbarContent className="flex lg:hidden" justify="end">
                <NavbarItem>
                    <NavbarMenuToggle className={"h-[24px]"}
                                      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                <NavbarMenuItem className="flex justify-center">
                    <SearchInput/>
                </NavbarMenuItem>
                <div className="flex justify-around gap-3 flex-wrap">
                    <NavbarMenuItem onClick={() => {
                        setIsMenuOpen(false)
                    }}>
                        <Link href={"/chat"}>
                            {isNotification ? <Badge content="" color="success" shape="circle" placement="top-right">
                                <MessagesIcon/>
                            </Badge> : <MessagesIcon/>}
                        </Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem onClick={() => {
                        setIsMenuOpen(false)
                    }}>
                        <Link href={"/saved"}>
                            <Image quality={100} src={savedLink} alt={"bookmark"} width={24} height={24}/>
                        </Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        {memoizedUserInfo}
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <SelectLang/>
                    </NavbarMenuItem>
                </div>
                {!isLogin && <div className="flex justify-center items-center gap-2 md:w-2/3">
                    <NavbarMenuItem onClick={() => {
                        setIsMenuOpen(false)
                    }}>
                        <Button className="bg-[--primary-color] text-white" as={Link}
                                href={"/login"}>{strings.LogIn}</Button>
                    </NavbarMenuItem>
                </div>}
            </NavbarMenu>
        </Navbar>
        {isOpen && needVerification === true && <ConfirmPhoneModal email={email} isOpen={isOpen} onOpenChange={onOpenChange} />}
    </>);
};

export default NavBar;

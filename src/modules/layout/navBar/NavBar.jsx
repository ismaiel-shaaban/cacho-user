import { strings } from '@/utilis/Localization';
import { useEffect, useMemo, useState } from 'react';
import {
    Badge,
    Button, Divider, Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle,
} from "@nextui-org/react";
import UserInfo from "@/modules/layout/navBar/components/userInfo/UserInfo";
import SearchInput from "@/modules/layout/navBar/components/searchInput/SearchInput";
import { MessagesIcon } from "@/utilis/Icons/MessagesIcon";
import SelectLang from "@/modules/layout/navBar/components/selectLang/SelectLang";
import Logo from "@/modules/layout/navBar/components/logo";
import Link from "next/link";
import { getCookie } from "cookies-next";

import savedLink from "../../../../public/savedLink.svg"
import Pusher from "pusher-js";


const NavBar = ({ userLocation }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const tokenData = getCookie('token');
    const [isNotification, setIsNotification] = useState(false);

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
            const { uuid } = userData;
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
        return <UserInfo userLocation={userLocation} />;
    }, [userLocation]);


    return (<Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} className="p-0"
        maxWidth={"xl"}
        // classNames={{wrapper: "!md:container"}}
        aria-label="Main navigation"
        dir={strings.getLanguage() === 'ar' ? 'rtl' : 'ltr'}>
        <NavbarContent justify="start" className={"gap-2 md:w-2/3"}>
            <NavbarItem onClick={() => { setIsMenuOpen(false) }} >
                <Logo />
            </NavbarItem>
            <NavbarItem className="min-w-full hidden md:flex">
                <SearchInput />
            </NavbarItem>
        </NavbarContent>
        <NavbarContent className="hidden gap-2 lg:flex md:w-1/3" justify="end">
            <NavbarItem>
                <SelectLang />
            </NavbarItem>
            {isLogin ? <>
                <NavbarItem onClick={() => { setIsMenuOpen(false) }} >
                    <Link href={"/chat"} onClick={() => (setIsNotification(false))}>
                        {isNotification ? <Badge content="" color="success" shape="circle" placement="top-right">
                            <MessagesIcon />
                        </Badge> : <MessagesIcon />}
                    </Link>
                </NavbarItem>
                <NavbarItem onClick={() => { setIsMenuOpen(false) }} >
                    <Link href={"/saved"}>
                        <img lazy src={savedLink} alt={"bookmark"} />
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Divider orientation="vertical" className="w-[1px] h-[44px]" />
                </NavbarItem>
                <NavbarItem>
                    {memoizedUserInfo}
                </NavbarItem>
            </> : <>
                <NavbarItem onClick={() => { setIsMenuOpen(false) }} >
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
                <SearchInput />
            </NavbarMenuItem>
            <div className="flex justify-around gap-3 flex-wrap">
                <NavbarMenuItem onClick={() => { setIsMenuOpen(false) }} >
                    <Link href={"/chat"}>
                        {isNotification ? <Badge content="" color="success" shape="circle" placement="top-right">
                            <MessagesIcon />
                        </Badge> : <MessagesIcon />}
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem onClick={() => { setIsMenuOpen(false) }} >
                    <Link href={"/saved"}>
                        <img lazy src={savedLink} alt={"bookmark"} />
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    {memoizedUserInfo}
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <SelectLang />
                </NavbarMenuItem>
            </div>
            {!isLogin && <div className="flex justify-center items-center gap-2 md:w-2/3">
                <NavbarMenuItem onClick={() => { setIsMenuOpen(false) }} >
                    <Button className="bg-[--primary-color] text-white" as={Link}
                        href={"/login"}>{strings.LogIn}</Button>
                </NavbarMenuItem>
            </div>}
        </NavbarMenu>
    </Navbar>);
};

export default NavBar;

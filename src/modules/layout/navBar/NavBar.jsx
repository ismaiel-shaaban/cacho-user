import {strings} from '@/utilis/Localization';
import {useEffect, useMemo, useState} from 'react';
import {
    Button, Divider, Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle,
} from "@nextui-org/react";
import BookMark from "@/utilis/Icons/BookMark";
import UserInfo from "@/modules/layout/navBar/components/userInfo/UserInfo";
import SearchInput from "@/modules/layout/navBar/components/searchInput/SearchInput";
import {MessagesIcon} from "@/utilis/Icons/MessagesIcon";
import SelectLang from "@/modules/layout/navBar/components/selectLang/SelectLang";
import Logo from "@/modules/layout/navBar/components/logo";
import Link from "next/link";
import {getCookie} from "cookies-next";
import {fetchLocation} from "@/utilis/getUserLocation";
import useSWR from "swr";
import {useUserLocation} from "@/utilis/context/UserLocationContext";


const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [userData, setUserData] = useState({});
    const [token, setToken] = useState("");
    const [userLocation, setUserLocation] = useState(null);

    const {data, isLoading} = useSWR(token && 'https://caco-dev.mimusoft.com/api/customer/profile', async (url) => {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        } );
        if (!res.ok) {
            throw new Error(`Error fetching user data: Server responded with status ${res.status}`);
        }
        return await res.json();
    });
    useEffect(() => {
        if (data) {
            setUserData(data);
        }
    }, [data]);

    useEffect(() => {
        const tokenData = getCookie('token');
        if (tokenData !== null) {
            setToken(tokenData);
            setIsLogin(true);
        }
    }, []);

    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        setIsDarkMode(savedDarkMode === 'true');
        updateCssVariables(savedDarkMode === 'true');
    }, []);

    useEffect(() => {
        fetchLocation(strings.getLanguage() || "en").then((data) => setUserLocation(data?.location));
    }, [strings.getLanguage()]);

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

    return (<Navbar onMenuOpenChange={setIsMenuOpen} className="w-full p-0"
                    classNames={{base: "", wrapper: "!container justify-between"}}
                    aria-label="Main navigation"
                    dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
        <NavbarContent justify="start">
            <NavbarItem>
                <Logo/>
            </NavbarItem>
            <NavbarItem className="grow min-w-full hidden md:flex">
                <SearchInput/>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent className="hidden md:flex" justify="end">
            <NavbarItem>
                <SelectLang/>
            </NavbarItem>
            {isLogin ? <>
                <NavbarItem>
                    <MessagesIcon/>
                </NavbarItem>
                <NavbarItem>
                    <BookMark/>
                </NavbarItem>
                <NavbarItem>
                    <Divider orientation="vertical" className="w-[1px] h-[44px]"/>
                </NavbarItem>
                <NavbarItem>
                    {
                        isLoading ? "Loading..." : <UserInfo name={userData.name} location={userLocation} image={userData.image}/>
                    }
                </NavbarItem>
            </> : <>
                <NavbarItem>
                    <Link href={"/login"} className="text-[--primary-color]">{strings.LogIn}</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button className="bg-[--primary-color] text-white" as={Link}
                            href={"/signup"}>{strings.Register}</Button>
                </NavbarItem>
            </>}
        </NavbarContent>
        <NavbarContent className="flex md:hidden" justify="end">
            <NavbarItem>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
            <NavbarMenuItem className="flex justify-center">
                <SearchInput/>
            </NavbarMenuItem>
            <div className="flex justify-around gap-3 flex-wrap">
                <NavbarMenuItem>
                    <MessagesIcon/>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <BookMark/>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    {
                        isLoading ? "Loading..." : <UserInfo name={userData.name} location={userLocation} image={userData.image}/>
                    }
                </NavbarMenuItem>
            </div>
        </NavbarMenu>
    </Navbar>);
};

export default NavBar;

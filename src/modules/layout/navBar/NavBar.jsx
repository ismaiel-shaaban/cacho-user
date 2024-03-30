import {strings} from '@/utilis/Localization';
import {useEffect, useState} from 'react';
import {
    Button,
    Divider,
    Navbar,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import BookMark from "@/utilis/Icons/BookMark";
import UserInfo from "@/modules/layout/navBar/components/userInfo/UserInfo";
import SearchInput from "@/modules/layout/navBar/components/searchInput/SearchInput";
import {MessagesIcon} from "@/utilis/Icons/MessagesIcon";
import SelectLang from "@/modules/layout/navBar/components/selectLang/SelectLang";
import Logo from "@/modules/layout/navBar/components/logo";
import Link from "next/link";
import {getCookie} from "cookies-next";
import {fetchUserData} from "@/utilis/getUserData";
import {fetchLocation} from "@/utilis/getUserLocation";

const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [userData, setUserData] = useState({});
    const [token, setToken] = useState(null);
    const [userLocation, setUserLocation] = useState(null);

    const tokenData = getCookie('token')
    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        setIsDarkMode(savedDarkMode === 'true');
        updateCssVariables(savedDarkMode === 'true');
        setToken(tokenData);
        setIsLogin(tokenData !== undefined);
    }, [tokenData]);

    useEffect(() => {
        const fetchUser = async () => {
            if (token) {
                return await fetchUserData(token);
            }
        };
        if (token) {
            fetchUser().then((data) => setUserData(data));
        }
    }, [token]);

    useEffect(() => {
        fetchLocation(strings.getLanguage()).then((data) => setUserLocation(data?.location));
    },[userData])

    console.log(userLocation)


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
                    classNames={{base: "" ,wrapper:"!container justify-between"}}
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
            {isLogin ?
                <>
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
                        <UserInfo name={userData.name} location={userLocation} image={userData.image}/>
                    </NavbarItem>
                </> :
                <>
                    <NavbarItem>
                        <Link href={"/login"} className="text-[--primary-color]">{strings.LogIn}</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button className="bg-[--primary-color] text-white" as={Link} href={"/signup"}>{strings.Register}</Button>
                    </NavbarItem>
                </>
                }
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
                    <UserInfo name={userData.name} location={userLocation} image={userData.image}/>
                </NavbarMenuItem>
            </div>
        </NavbarMenu>
    </Navbar>);
};

export default NavBar;

import {strings} from '@/utilis/Localization';
import {useState, useEffect} from 'react';
import {
    Divider, Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle,
} from "@nextui-org/react";
import BookMark from "@/utilis/Icons/BookMark";
import UserInfo from "@/modules/layout/navBar/components/userInfo/UserInfo";
import SearchInput from "@/modules/layout/navBar/components/searchInput/SearchInput";
import {MessagesIcon} from "@/utilis/Icons/MessagesIcon";

const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    return (<Navbar onMenuOpenChange={setIsMenuOpen} maxWidth='2xl' aria-label="Main navigation"
                    dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
            <NavbarContent justify="start">
                <NavbarItem>
                    <h2 className="text-[--primary-color] text-[20px] font-[800]">CACHOO</h2>
                </NavbarItem>
                <NavbarItem className="grow min-w-full hidden sm:flex">
                    <SearchInput/>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex" justify="end">
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
                    <UserInfo/>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="flex sm:hidden" justify="end">
                <NavbarItem>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
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
                        <UserInfo/>
                    </NavbarMenuItem>
                </div>
            </NavbarMenu>
        </Navbar>);
};

export default NavBar;

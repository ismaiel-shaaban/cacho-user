import { strings } from '@/utilis/Localization';
import { useState, useEffect, useMemo } from 'react';
import {
    Divider,
    Input,
    Navbar,
    NavbarContent,
    NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle,
    Select,
    SelectItem,
} from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import BookMark from "@/utilis/Icons/BookMark";
import SelectLang from "@/modules/layout/navBar/components/selectLang/SelectLang";
import UserInfo from "@/modules/layout/navBar/components/userInfo/UserInfo";

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

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth='2xl' aria-label="Main navigation" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
            <NavbarContent justify="start">
                <NavbarItem>
                    <h2 className="text-[--primary-color] text-[20px] font-[800]">CACHOO</h2>
                </NavbarItem>
                <NavbarItem className="grow min-w-full  !hidden sm:flex">
                    <Input
                        aria-label={strings.searchPlaceholder}
                        classNames={{
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper: "h-full font-normal text-default-500 bg-[--gray]",
                        }}
                        className="w-[70%]"
                        placeholder={strings.searchPlaceholder}
                        size="md"
                        type="search"
                        endContent={<FiSearch size={30} />}
                        startContent={
                            <Select
                                defaultSelectedKeys={["1"]}
                                className="w-fit"
                                classNames={{
                                    trigger: "bg-white w-fit justify-center gap-2",
                                    value: "!overflow-visible",
                                    innerWrapper: "me-3",
                                }}
                                startContent={<HiOutlineSquares2X2 size={30} />}
                                size="sm"
                                aria-label={"Select a category"}
                            >
                                <SelectItem key="1" value="1">All Categories</SelectItem>
                                <SelectItem value="2">Business</SelectItem>
                                <SelectItem value="3">Service</SelectItem>
                            </Select>
                        }
                    />
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex" justify="end">
                <NavbarItem>
                    <SelectLang />
                </NavbarItem>
                <NavbarItem>
                    <BookMark />
                </NavbarItem>
                <NavbarItem>
                    <Divider orientation="vertical" className="w-[1px] h-[44px]" />
                </NavbarItem>
                <NavbarItem>
                    <UserInfo />
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
            <NavbarMenu className="!flex-row justify-around">
                <NavbarMenuItem>
                    <SelectLang />
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <BookMark />
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <UserInfo />
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
};

export default NavBar;

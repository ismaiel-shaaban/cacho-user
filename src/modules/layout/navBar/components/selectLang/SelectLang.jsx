import {strings} from "@/utilis/Localization";
import {useEffect, useMemo, useState} from "react";
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";

const SelectLang = () => {
    const [selectedKeys, setSelectedKeys] = useState(new Set(["en"]));
    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );
    useEffect(() => {
        let lang = localStorage.getItem('lang');
        strings.setLanguage(lang);
        setSelectedKeys(new Set([lang || "en"]));
    }, []);
    const toggleLanguage = (language) => {
        localStorage.setItem('lang', language);
        strings.setLanguage(language === "ar" ? "ar" : "en");
        window.location.reload();
    };
    useEffect(() => {
        const savedLang = localStorage.getItem('lang');
        setSelectedKeys(new Set([savedLang || "en"]));
    }, []);
    console.log(strings.getLanguage());
    return (
        <Dropdown aria-label={"Select Lang"} onChange={(e) => console.log(e)}>
            <DropdownTrigger>
                <Button variant="bordered" className="uppercase">
                    {selectedValue}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={(e) => {
                    setSelectedKeys(e);
                    toggleLanguage(e.anchorKey);
                }}
            >
                <DropdownItem key="en">EN</DropdownItem>
                <DropdownItem key="ar">عربي</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default SelectLang;
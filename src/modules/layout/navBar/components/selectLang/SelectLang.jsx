import {strings} from "@/utilis/Localization";
import {useEffect, useMemo, useState} from "react";
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";

const SelectLang = ()=>{
    const [selectedKeys, setSelectedKeys] = useState(new Set(["en"]));
    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );
    const toggleLanguage = (language) => {
        localStorage.setItem('lang', language);
        strings.setLanguage(language);
        window.location.reload(); // Reload the page to apply the new language
    };
    useEffect(() => {
        const savedLang = localStorage.getItem('lang');
        setSelectedKeys(new Set([savedLang || "en"]));
    }, []);
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
import {useEffect, useState} from "react";
import {strings} from "@/utilis/Localization";
import Link from "next/link";
import {Select, SelectItem} from "@nextui-org/react";

const SectionTitle = ({title, link, select}) => {
    const [lang, setLang] = useState("en");
    const [location, setLocation] = useState("all");

    useEffect(() => {
        const lang = localStorage.getItem("lang");
        setLang(lang);
        const location = localStorage.getItem("location");
        setLocation(location);
    }, [location]);

    return (<div className="section-title flex items-center justify-between" dir={lang === "ar" ? "rtl" : "ltr"}>
            <div className="flex items-center">
                <h2 className="text-[32px] text-[--primary-color] whitespace-nowrap font-bold">{title}</h2>
                {select &&
                    <p className="text-[--primary-color] mx-2">{location && location}</p>}
            </div>
        {link && (<Link href={link} className="text-[--primary-color] text-[20px]">
                    {strings.viewAll}
                </Link>)}
        </div>);
};

export default SectionTitle;

import {useEffect, useState} from "react";
import {strings} from "@/utilis/Localization";
import Link from "next/link";
import {Select, SelectItem} from "@nextui-org/react";

const SectionTitle = ({title, link, select}) => {
    const [lang, setLang] = useState("en");

    useEffect(() => {
        const lang = localStorage.getItem("lang");
        setLang(lang);
    }, []);

    return (<div className="section-title flex items-center justify-between" dir={lang === "ar" ? "rtl" : "ltr"}>
            <div className="flex items-center">
                <h2 className="font-[600] text-[32px] text-[#000] whitespace-nowrap">{title}</h2>
                {select && <Select variant={"underlined"} dir={"ltr"}
                                   defaultSelectedKeys={["1"]}
                                   classNames={{
                                       trigger: "ms-3 min-w-[100px]",
                                       value: "text-[--primary-color]",
                                        label: "text-[--primary-color]",
                                   }}
                >
                    <SelectItem key={"1"} value="Tema, Sohag">Tema, Sohag</SelectItem>
                    <SelectItem key={"2"} value="Cairo">Cairo</SelectItem>
                </Select>}
            </div>
            {link && (<Link href={link} className="text-[--primary-color] text-[20px]">
                    {strings.viewAll}
                </Link>)}
        </div>);
};

export default SectionTitle;

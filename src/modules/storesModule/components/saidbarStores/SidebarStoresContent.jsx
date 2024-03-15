import {Chip, Select, SelectItem} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/checkbox";
import {strings} from "@/utilis/Localization";

const SidebarStoresContent = () => {
    return (<div className="md:col-span-3 mt-[40px]" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
        <div>
            <div className="flex items-center justify-between">
                <h2 className="text-[16px] font-[500]">{strings.Filter} <span
                    className="text-[12px] font-normal text-[--gray-2]">(32 {strings.results})</span></h2>
                <button className="text-sm text-[--rate-color]">{strings.Reset}</button>
            </div>
            <div>
                <h4 className="text-[12px] mt-[15px] text-[--label-color] mb-3">{strings.Location}</h4>
                <div>
                    <Select variant={"flat"} label={strings.Select} size={"sm"} dir={"ltr"} classNames={{
                        trigger: 'bg-white'
                    }}>
                        <SelectItem key="Tema" value="Tema">Tema</SelectItem>
                        <SelectItem key="Minia" value="Minia">Minia</SelectItem>
                        <SelectItem key="Giza" value="Giza">Giza</SelectItem>
                    </Select>
                    <Checkbox color={"primary"} className="my-2 text-[12px] text-[--gray-2]"
                              classNames={{label: "text-[12px] text-[--gray-2] font-[500]"}}>{strings.Nearest}</Checkbox>
                </div>
                <div className="flex gap-3 flex-wrap">
                    <Chip onClose={() => console.log("close")} classNames={{
                        base: "p-[4px] rounded-[4px] bg-[#50489E1A] text-[--primary-color]"
                    }}>Tema</Chip>
                    <Chip onClose={() => console.log("close")} classNames={{
                        base: "p-[4px] rounded-[4px] bg-[#50489E1A] text-[--primary-color]"
                    }}>Giza</Chip>
                    <Chip onClose={() => console.log("close")} classNames={{
                        base: "p-[4px] rounded-[4px] bg-[#50489E1A] text-[--primary-color]"
                    }}>Bahnabay</Chip>
                    <Chip onClose={() => console.log("close")} classNames={{
                        base: "p-[4px] rounded-[4px] bg-[#50489E1A] text-[--primary-color]"
                    }}>Tema</Chip>
                </div>
                <h4 className="text-[12px] mt-[15px] text-[--label-color] mb-3">{strings.Category}</h4>
                <div>
                    <Select variant={"flat"} label={strings.Select} dir={"ltr"} size={"sm"} classNames={{
                        trigger: 'bg-white'
                    }}>
                        <SelectItem key="Food" value="Food">Food</SelectItem>
                        <SelectItem key="Clothes" value="Clothes">Clothes</SelectItem>
                        <SelectItem key="Shoes" value="Shoes">Shoes</SelectItem>
                    </Select>
                </div>
                <h4 className="text-[12px] mt-[15px] text-[--label-color]">{strings.Type}</h4>
                <div className="flex gap-3">
                    <Checkbox color={"primary"} className="my-2 text-[12px] text-[--gray-2]"
                              classNames={{label: "text-[12px] text-[--gray-2] font-[500] text-uppercase"}}>{strings.Old}</Checkbox>
                    <Checkbox color={"primary"} className="my-2 text-[12px] text-[--gray-2]"
                              classNames={{label: "text-[12px] text-[--gray-2] font-[500] text-uppercase"}}>{strings.New}</Checkbox>
                </div>
            </div>
        </div>

    </div>)
}

export default SidebarStoresContent
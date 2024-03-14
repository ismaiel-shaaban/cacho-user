import {Chip, Select, SelectItem} from "@nextui-org/react";
import ShopsCard from "@/modules/shopsModule/components/shopsCards/shopsCard/ShopsCard";
import {Checkbox} from "@nextui-org/checkbox";

const ClothesCategory = ({storesData}) => {
    return (<section className="grid grid-cols-12 gap-[40px]">
        <div className="col-span-3 mt-[40px]">
            <div>
                <div className="flex items-center justify-between">
                    <h2 className="text-[16px] font-[500]">Filter <span
                        className="text-[12px] font-normal text-[--gray-2]">(32 result)</span></h2>
                    <button className="text-sm text-[--rate-color]">reset</button>
                </div>
                <div>
                    <h4 className="text-[12px] mt-[15px] text-[--label-color] mb-3">Location</h4>
                    <div>
                        <Select variant={"flat"} label="Select" size={"sm"} classNames={{
                            trigger: 'bg-white'
                        }}>
                            <SelectItem key="Tema" value="Tema">Tema</SelectItem>
                            <SelectItem key="Minia" value="Minia">Minia</SelectItem>
                            <SelectItem key="Giza" value="Giza">Giza</SelectItem>
                        </Select>
                        <Checkbox color={"success"} className="my-2">Option</Checkbox>
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
                    <h4 className="text-[12px] mt-[15px] text-[--label-color] mb-3">Category</h4>
                    <div>
                        <Select variant={"flat"} label="Select" size={"sm"} classNames={{
                            trigger: 'bg-white'
                        }}>
                            <SelectItem key="Food" value="Food">Food</SelectItem>
                            <SelectItem key="Clothes" value="Clothes">Clothes</SelectItem>
                            <SelectItem key="Shoes" value="Shoes">Shoes</SelectItem>
                        </Select>
                    </div>
                    <h4 className="text-[12px] mt-[15px] text-[--label-color]">Type</h4>
                    <div className="flex gap-3">
                        <Checkbox color={"success"} className="my-2">OLD</Checkbox>
                        <Checkbox color={"success"} className="my-2">NEW</Checkbox>
                    </div>
                </div>
            </div>

        </div>
        <div
            className={`grid grid-cols-1 col-span-9 lg:grid-cols-3 md:grid-cols-2 md:gap-[24px] gap-2 mt-[40px]`}>
            {storesData.map((store) => (<ShopsCard key={store.id} store={store}/>))}
        </div>
    </section>);
}

export default ClothesCategory;
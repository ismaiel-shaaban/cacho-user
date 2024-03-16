import {useState} from "react";
import {strings} from "@/utilis/Localization";
import {Select, SelectItem, Slider} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/checkbox";

const SidebarProductsContent = () => {
    const [value, setValue] = useState([100, 300]);
    return (<div className="md:col-span-3 mt-[40px]" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
        <div>
            <div className="flex items-center justify-between">
                <h2 className="text-[16px] font-[500]">{strings.Filter} <span
                    className="text-[12px] font-normal text-[--gray-2]">(32 {strings.results})</span></h2>
                <button className="text-sm text-[--rate-color]">{strings.Reset}</button>
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
            <div>
                <h4 className="text-[12px] mt-[15px] text-[--label-color] mb-3">{strings.Size}</h4>
                <div className="flex gap-[20px]">
                        <span className="flex flex-col gap-[20px]">
                            <Checkbox color={"primary"} className="text-[16px] text-[#596780]"
                                      classNames={{
                                          label: "text-[12px] text-[--gray-2] font-[600] text-uppercase", base: "gap-1"
                                      }}>
                                2 Years <span className="text-[#90A3BF]">(32)</span> </Checkbox>
                            <Checkbox color={"primary"} className="text-[16px] text-[#596780]"
                                      classNames={{
                                          label: "text-[12px] text-[--gray-2] font-[600] text-uppercase", base: "gap-1"
                                      }}>
                                M <span className="text-[#90A3BF]">(32)</span> </Checkbox>
                            <Checkbox color={"primary"} className="text-[16px] text-[#596780]"
                                      classNames={{
                                          label: "text-[12px] text-[--gray-2] font-[600] text-uppercase", base: "gap-1"
                                      }}>
                                XL <span className="text-[#90A3BF]">(32)</span></Checkbox>
                            <Checkbox color={"primary"} className="text-[16px] text-[#596780]"
                                      classNames={{
                                          label: "text-[12px] text-[--gray-2] font-[600] text-uppercase", base: "gap-1"
                                      }}>
                                3XL  <span className="text-[#90A3BF]">(32)</span></Checkbox>

                        </span>
                    <span className="flex flex-col gap-[20px]">
                            <Checkbox color={"primary"} className="text-[16px] text-[#596780]"
                                      classNames={{
                                          label: "text-[12px] text-[--gray-2] font-[600] text-uppercase ", base: "gap-1"
                                      }}>
                                S <span className="text-[#90A3BF]">(32)</span> </Checkbox>
                            <Checkbox color={"primary"} className="text-[16px] text-[#596780]"
                                      classNames={{
                                          label: "text-[12px] text-[--gray-2] font-[600] text-uppercase ", base: "gap-1"
                                      }}>
                                L <span className="text-[#90A3BF]">(32)</span> </Checkbox>
                            <Checkbox color={"primary"} className="text-[16px] text-[#596780]"
                                      classNames={{
                                          label: "text-[12px] text-[--gray-2] font-[600] text-uppercase ", base: "gap-1"
                                      }}>
                                XXL <span className="text-[#90A3BF]">(32)</span></Checkbox>
                            <Checkbox color={"primary"} className="text-[16px] text-[#596780]"
                                      classNames={{
                                          label: "text-[12px] text-[--gray-2] font-[600] text-uppercase ", base: "gap-1"
                                      }}>
                                4XL  <span className="text-[#90A3BF]">(32)</span></Checkbox>

                        </span>
                </div>
            </div>
            <div>
                <h4 className="text-[12px] mt-[15px] text-[--label-color] mb-3">{strings.Colors}</h4>
                <div className="flex gap-[20px]">
                        <span className="flex flex-col gap-[20px]">
                            <Checkbox color={"primary"} className="text-[16px] text-[#596780]"
                                      classNames={{
                                          label: "text-[12px] text-[--gray-2] font-[600] text-uppercase ", base: "gap-1"
                                      }}>
                                {strings.Red} <span className="text-[#90A3BF]">(32)</span> </Checkbox>
                            <Checkbox color={"primary"} className="text-[16px] text-[#596780]"
                                      classNames={{
                                          label: "text-[12px] text-[--gray-2] font-[600] text-uppercase ", base: "gap-1"
                                      }}>
                                {strings.Black} <span className="text-[#90A3BF]">(32)</span> </Checkbox>
                            <Checkbox color={"primary"} className="text-[16px] text-[#596780]"
                                      classNames={{
                                          label: "text-[12px] text-[--gray-2] font-[600] text-uppercase ", base: "gap-1"
                                      }}>
                                {strings.Orange} <span className="text-[#90A3BF]">(32)</span></Checkbox>
                            <Checkbox color={"primary"} className="text-[16px] text-[#596780]"
                                      classNames={{
                                          label: "text-[12px] text-[--gray-2] font-[600] text-uppercase ", base: "gap-1"
                                      }}>
                                {strings.Blue} <span className="text-[#90A3BF]">(32)</span></Checkbox>

                        </span>
                    <span className="flex flex-col gap-[20px]">
                            <Checkbox color={"primary"} className="text-[16px] text-[#596780]"
                                      classNames={{
                                          label: "text-[12px] text-[--gray-2] font-[600] text-uppercase", base: "gap-1"
                                      }}>
                                {strings.Yellow} <span className="text-[#90A3BF]">(32)</span> </Checkbox>
                            <Checkbox color={"primary"} className="text-[16px] text-[#596780]"
                                      classNames={{
                                          label: "text-[12px] text-[--gray-2] font-[600] text-uppercase", base: "gap-1"
                                      }}>
                                {strings.White} <span className="text-[#90A3BF]">(32)</span> </Checkbox>
                            <Checkbox color={"primary"} className="text-[16px] text-[#596780]"
                                      classNames={{
                                          label: "text-[12px] text-[--gray-2] font-[600] text-uppercase", base: "gap-1"
                                      }}>
                                {strings.Mint} <span className="text-[#90A3BF]">(32)</span></Checkbox>
                            <Checkbox color={"primary"} className="text-[16px] text-[#596780]"
                                      classNames={{
                                          label: "text-[12px] text-[--gray-2] font-[600] text-uppercase", base: "gap-1"
                                      }}>
                                {strings.Brown} <span className="text-[#90A3BF]">(32)</span></Checkbox>

                        </span>
                </div>
            </div>
            <div>
                <h4 className="text-[12px] mt-[15px] text-[--label-color] my-3">{strings.Price}</h4>
                <Slider
                    step={50}
                    minValue={0}
                    maxValue={1000}
                    defaultValue={[100, 500]}
                    formatOptions={{style: "currency", currency: "USD"}}
                    className="max-w-md"
                    value={value}
                    onChange={setValue}
                />
                <p className="text-default-500 font-[600] text-[14px] flex justify-between mt-2 items-center">
                    <span>
                        {strings.Min} : <span className="px-[4px] py-[2px] border-1 border-gray-300 inline-flex gap-3"><span>$</span> <span className="text-black">{value[0]}</span></span>
                    </span>
                    <span>
                        {strings.Max} : <span
                        className="px-[4px] py-[2px] border-1 border-gray-300 inline-flex gap-3"><span>$</span> <span
                        className="text-black">{value[1]}</span></span>
                    </span>
                </p>
            </div>
        </div>
    </div>)
}

export default SidebarProductsContent
import {Chip, Select, SelectItem} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/checkbox";
import {strings} from "@/utilis/Localization";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useCategoriesData} from "@/modules/categoriesModule/hooks/getCategories";

const SidebarStoresContent = ({dataCount}) => {
    const router = useRouter();
    const filter = router.query.filter;
    const [values, setValues] = useState([]);
    const [oldIsSelected, setOldIsSelected] = useState(false)
    const [newIsSelected, setNewIsSelected] = useState(true)

    useEffect(() => {
        if(filter){
            setValues([`${filter}`]);
        }
    }, [filter]);
    const {data : categoriesData , isLoading} = useCategoriesData();
    const handleSelectionChange = (e) => {
        setValues(new Set(e.target.value.split(",")));
        // Update the URL query parameter to reflect the new filter
        router.push({
            pathname: router.pathname, query: {...router.query, filter: e.target.value , page: 1},
        });
    }

    const handleCheckbox = (e, type) => {
        if (type === 'old') {
            setOldIsSelected(e.target.checked);
            if (e.target.checked) {
                setNewIsSelected(false); // Uncheck the 'New' checkbox if 'Old' is checked
            }
        } else if (type === 'new') {
            setNewIsSelected(e.target.checked);
            if (e.target.checked) {
                setOldIsSelected(false); // Uncheck the 'Old' checkbox if 'New' is checked
            }
        }

        if(type === "location"){
            router.push({
                pathname: router.pathname,
                query: {
                    ...router.query,
                    nearest:e.target.checked === true ? "1" : "0",
                    page: 1
                },
            });
        }else {
            router.push({
                pathname: router.pathname,
                query: {
                    ...router.query,
                    sort: type === 'old' ? (e.target.checked ? 'old' : undefined) : (e.target.checked ? 'new' : undefined),
                    page: 1
                },
            });
        }
    };

    const handleReset = () => {
        setOldIsSelected(false);
        setNewIsSelected(true);
        setValues(new Set([]))
        router.push({
            pathname: router.pathname,
            query: {},
        });
    };


    return (<div className="md:col-span-3 mt-[40px]" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
        <div>
            <div className="flex items-center justify-between">
                <h2 className="text-[16px] font-[500]">{strings.Filter} <span
                    className="text-[12px] font-normal text-[--gray-2]">( { dataCount + " " +strings.results })</span></h2>
                <button className="text-sm text-[--rate-color]" onClick={handleReset}>{strings.Reset}</button>
            </div>
            <div>
                <h4 className="text-[12px] text-[--label-color] mb-3">{strings.Category}</h4>
                <div>
                    <Select variant={"flat"} label={strings.Select}
                            selectedKeys={values}
                            onChange={handleSelectionChange}
                            isLoading={isLoading}
                            dir={"ltr"} size={"sm"} classNames={{
                        trigger: 'bg-white'
                    }}>
                        {categoriesData?.response?.data.map((item) => (
                            <SelectItem key={item.uuid} value={item.uuid}>{item.name}</SelectItem>))}
                    </Select>
                </div>
                <h4 className="text-[12px] mt-[15px] text-[--label-color]">{strings.Type}</h4>
                <div className="flex flex-wrap gap-3">
                    <Checkbox color={"primary"} className="my-2 text-[12px] text-[--gray-2]"
                              isSelected={oldIsSelected} onChange={(e) => handleCheckbox(e, 'old')}
                              classNames={{label: "text-[12px] text-[--gray-2] font-[500] text-uppercase"}}>{strings.Old}</Checkbox>
                    <Checkbox color={"primary"} className="my-2 text-[12px] text-[--gray-2]"
                              isSelected={newIsSelected} onChange={(e) => handleCheckbox(e, 'new')}
                              classNames={{label: "text-[12px] text-[--gray-2] font-[500] text-uppercase"}}>{strings.New}</Checkbox>
                    <Checkbox color={"primary"} className="text-[12px] text-[--gray-2]" onChange={(e)=> handleCheckbox(e, 'location')}
                              classNames={{label: "text-[12px] text-[--gray-2] font-[500]"}}>{strings.Nearest}</Checkbox>
                </div>
            </div>
        </div>

    </div>  )
}

export default SidebarStoresContent
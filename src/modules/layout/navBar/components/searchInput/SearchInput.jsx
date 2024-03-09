import {strings} from "@/utilis/Localization";
import {FiSearch} from "react-icons/fi";
import {Input, Select, SelectItem} from "@nextui-org/react";
import {HiOutlineSquares2X2} from "react-icons/hi2";

const searchInput = () => {
    return (
        <Input
            aria-label={strings.searchPlaceholder}
            classNames={{
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper: "h-full font-normal text-default-500 bg-[--gray]",
            }}
            className="w-[85%]"
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
  );
}

export default searchInput;
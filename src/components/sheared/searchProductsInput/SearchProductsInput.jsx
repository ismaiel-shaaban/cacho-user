import {Input} from "@nextui-org/react";
import {CiSearch} from "react-icons/ci";

const SearchProductsInput = ({ searchProducts }) => {
    return (
        <Input
            type="text"
            onChange={(e) => searchProducts(e.target.value.trim())}
            placeholder="Search Products"
            clearable
            endContent={<CiSearch size={20} />}
            classNames={{
                inputWrapper:"bg-white",
                base:"rounded-md md:w-1/3",
            }}
        />
    );
}

export default SearchProductsInput;
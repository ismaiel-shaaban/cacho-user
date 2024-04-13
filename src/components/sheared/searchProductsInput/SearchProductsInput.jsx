import {Input} from "@nextui-org/react";
import {CiSearch} from "react-icons/ci";
import {strings} from "@/utilis/Localization";

const SearchProductsInput = ({ searchProducts }) => {
    return (
        <Input
            dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}
            type="text"
            onChange={(e) => searchProducts(e.target.value.trim())}
            placeholder={strings.SearchProducts}
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
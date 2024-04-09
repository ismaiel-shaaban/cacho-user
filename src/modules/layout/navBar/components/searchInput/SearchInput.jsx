/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Card, CardBody, Input, Select, SelectItem, Spinner } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { strings } from "@/utilis/Localization";
import useSearch from "@/hooks/search";
import Link from "next/link";

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("categories");
    const { data, isLoading, error } = useSearch(searchQuery, selectedCategory);
    const [isFocus, setIsFocus] = useState(false)

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
    };

    const handleCategoryChange = (key) => {
        setSelectedCategory(key.target.value);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setIsFocus(false);
        }, 300);
    };

    return (<div className="relative">
        <Input
            aria-label={strings.searchPlaceholder}
            className="w-[95%]"
            placeholder={strings.searchPlaceholder}
            size="md"
            type="search"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setIsFocus(true)}
            onBlur={handleBlur}
            endContent={<FiSearch size={30} />}
            startContent={<Select
                dir={"ltr"}
                defaultSelectedKeys={["categories"]}
                className="w-fit"
                startContent={<HiOutlineSquares2X2 size={30} />}
                size="sm"
                onChange={handleCategoryChange}
                aria-label={"Select a category"}
            >
                <SelectItem key="categories" value="categories">Categories</SelectItem>
                <SelectItem key="stores" value="stores">Business</SelectItem>
                <SelectItem key="products" value="products">Products</SelectItem>
            </Select>}
        />
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-10 rounded-md">
            {isLoading && <Spinner />}
            {error && <div>Error: {error.message}</div>}
            {data?.response?.data?.length > 0 && isFocus && (<Card>
                <CardBody>
                    {data.response.data.map((result) => (<div key={result.uuid}
                        className="p-2 border-b border-gray-200 text-[--primary-color]">
                        <Link
                            href={selectedCategory === "stores" ? `/Stores/${result.uuid}` : selectedCategory === "products" ? `/product/${result.uuid}` : `/Stores/?filter=${result.uuid}`}
                            className="flex justify-between items-center w-full ">
                            <span>
                                {result.name ? result.name : result.title}
                            </span>
                            <span className="w-[40px] h-[40px] rounded-md">
                                <img src={result.image || result.images[0]}
                                    alt={result.name || result.title}
                                    className="w-full object-cover"
                                />
                            </span>
                        </Link>
                    </div>))}
                </CardBody>
            </Card>)}
        </div>
    </div>);
};

export default SearchInput;

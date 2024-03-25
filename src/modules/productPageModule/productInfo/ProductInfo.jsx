import {useState} from "react";
import {Button, Chip} from "@nextui-org/react";
import {strings} from "@/utilis/Localization";
import classes from "./ProductInfo.module.css";
import BookMark from "@/utilis/Icons/BookMark";
import TextMessageIcon from "@/utilis/Icons/TextMessageIcon";
import SaveIcon from "@/utilis/Icons/SaveIcon";

const ProductInfo = ({info}) => {
    // const [selectedSize, setSelectedSize] = useState("");
    // const [selectedColor, setSelectedColor] = useState("");
    // const colors = ["#C1C1C1", "#8290E1"];
    // const handleSelectColor = (color) => {
    //     setSelectedColor(color);
    // };
    //
    // const handleSelectSize = (size) => {
    //     setSelectedSize(size);
    // };
    //
    // const renderSizeItems = ["S", "M", "L", "XL"].map((size) => (
    //     <div
    //         key={size}
    //         className={`${classes["size-item"]} ${selectedSize === size ? classes.selected : ""}`}
    //         onClick={() => handleSelectSize(size)}
    //     >
    //         {size}
    //     </div>
    // ));

    const discountPercentage = Math.floor(((info?.price - info?.priceAfterDiscount) / info?.price) * 100)


    return (<div className="pe-8">
            <p className="text-gray-400">
                By <span className="text-[--primary-color]">{info?.business?.title}</span>
            </p>
            <h3 className="text-[32px] font-[600]">{info?.name}</h3>
            <div className="flex items-center justify-between">
                <div className="flex gap-[33px] items-center text-[32px] flex-wrap">
                    <span className="font-[600]">
                        {info?.priceAfterDiscount}
                        <span className="text-[10px] text-gray-400 font-normal leading-5">{strings.egp}</span>
                    </span>
                    <span className="font-[600] text-gray-400">
                        <span className="line-through">{info?.price}</span>
                        <span
                            className="text-[10px] text-gray-400 font-normal leading-5 no-underline">{strings.egp}</span>
                    </span>
                    <Chip size="md" className="bg-[--red] text-white px-3 rounded-[10px]">
                        {discountPercentage}% {strings.off}
                    </Chip>
                </div>
            </div>
            <div className="flex mt-2 gap-2">
                <div className="w-[54px] h-[54px] flex items-center justify-center border-3 rounded-md"><SaveIcon/></div>
                <Button className="w-4/5 py-[16px] px-[10px] bg-[--rate-color] text-white h-[54px]" startContent={<TextMessageIcon/>}>
                    Chat
                </Button>
            </div>
            {/*<div className={"mb-3"}>*/}
            {/*    <h4 className="font-[500]  mb-3">{strings.Size}</h4>*/}
            {/*    <div className="flex gap-5">{renderSizeItems}</div>*/}
            {/*</div>*/}
            {/*<div className={"mb-3"}>*/}
            {/*    <h4 className="font-[500] mb-3">{strings.Colors}</h4>*/}
            {/*    <div className="flex flex-wrap gap-5">*/}
            {/*        {colors.map((color) => (*/}
            {/*            <div*/}
            {/*                key={color}*/}
            {/*                className={`${classes["color-item"]} ${*/}
            {/*                    selectedColor === color ? classes["selected-color"] : ""*/}
            {/*                }`}*/}
            {/*                style={{ backgroundColor: color }}*/}
            {/*                onClick={() => handleSelectColor(color)}*/}
            {/*            ></div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>);
};

export default ProductInfo;

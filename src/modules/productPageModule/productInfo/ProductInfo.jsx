import { useState } from "react";
import { Chip } from "@nextui-org/react";
import { strings } from "@/utilis/Localization";
import classes from "./ProductInfo.module.css";

const ProductInfo = () => {
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const colors = ["#C1C1C1", "#8290E1"];
    const handleSelectColor = (color) => {
        setSelectedColor(color);
    };

    const handleSelectSize = (size) => {
        setSelectedSize(size);
    };

    const renderSizeItems = ["S", "M", "L", "XL"].map((size) => (
        <div
            key={size}
            className={`${classes["size-item"]} ${selectedSize === size ? classes.selected : ""}`}
            onClick={() => handleSelectSize(size)}
        >
            {size}
        </div>
    ));


    return (
        <div className="pe-8">
            <p className="text-gray-400">
                By <span className="text-[--primary-color]">Admin</span>
            </p>
            <h3 className="text-[32px] font-[600]">Store Name</h3>
            <div className="flex items-center justify-between">
                <div className="flex gap-[33px] items-center text-[32px]">
                    <span className="font-[600]">
                        300
                        <span className="text-[10px] text-gray-400 font-normal leading-5">{strings.egp}</span>
                    </span>
                    <span className="font-[600] text-gray-400">
                        <span className="line-through">250</span>
                        <span className="text-[10px] text-gray-400 font-normal leading-5 no-underline">{strings.egp}</span>
                    </span>
                </div>
                <Chip size="md" className="bg-[--red] text-white px-3 rounded-[10px]">
                    20% {strings.off}
                </Chip>
            </div>
            <div className={"mb-3"}>
                <h4 className="font-[500]  mb-3">{strings.Size}</h4>
                <div className="flex gap-5">{renderSizeItems}</div>
            </div>
            <div className={"mb-3"}>
                <h4 className="font-[500] mb-3">{strings.Colors}</h4>
                <div className="flex flex-wrap gap-5">
                    {colors.map((color) => (
                        <div
                            key={color}
                            className={`${classes["color-item"]} ${
                                selectedColor === color ? classes["selected-color"] : ""
                            }`}
                            style={{ backgroundColor: color }}
                            onClick={() => handleSelectColor(color)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;

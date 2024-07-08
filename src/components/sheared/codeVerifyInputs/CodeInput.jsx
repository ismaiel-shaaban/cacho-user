import { Input } from "@nextui-org/react";
import { forwardRef, useState } from "react";

const CodeInput = forwardRef(({ placeholder, onChange, onKeyDown }, ref) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) { // Check if the value consists of only digits
            onChange(value);
            setInputValue(value);
        }
    };

    return (
        <Input
            type="text"
            maxLength={1}
            onChange={handleChange}
            onKeyDown={onKeyDown}
            value={inputValue}
            ref={ref}
            classNames={{
                inputWrapper: "md:w-[83px] md:h-[83px] sm:w-[40px] sm:h-[40px] bg-[--gray]",
                input: "text-center text-[40px] text-2xl sm:text-3xl font-bold !text-[--primary-color] placeholder:font-bold placeholder:text-2xl placeholder:text-[--gray-2]",
                base: "w-fit",
                label: "!text-[--gray-2]"
            }}
            placeholder={placeholder}
        />
    );
});

CodeInput.displayName = "CodeInput";

export default CodeInput;

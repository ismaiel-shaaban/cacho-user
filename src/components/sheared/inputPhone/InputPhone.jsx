import { useState } from "react";
import Image from "next/image";
import saudi from "../../../../public/saudi-arabia-flag-icon.svg";
import { Input } from "@nextui-org/react";

const InputPhone = ({ onPhoneChange }) => {
    const [phone, setPhone] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [debounceTimer, setDebounceTimer] = useState(null);

    const handleValidation = (e) => {
        const value = e.target.value;
        setPhone(value);

        // Clear previous debounce timer
        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }

        // Set new debounce timer
        const newDebounceTimer = setTimeout(() => {
            const cleanedValue = value.replace(/\D/g, ''); // Remove non-numeric characters
            const isValidPhone = /^(5(0|3|4|5|6|7|8|9)|50|53|54|55|56|57|58|59)\d{7}$/.test(cleanedValue);

            setIsValid(isValidPhone);

            if (onPhoneChange) {
                onPhoneChange(cleanedValue, isValidPhone);
            }
        }, 500);

        setDebounceTimer(newDebounceTimer);
    };

    return (
        <Input
            isRequired={true}
            value={phone}
            onChange={handleValidation}
            size={"lg"}
            placeholder="0000"
            type={"tel"}
            id="phone"
            label={"Phone"}
            name="Phone"
            labelPlacement={"outside"}
            classNames={{ label: "!text-[--gray-2]", inputWrapper: "bg-[--gray]" }}
            isInvalid={!isValid}
            // validationState={!isValid ? "invalid" : "valid"}
            startContent={
                <div className="flex items-center gap-[6px]">
                    <span><Image width={35} height={40} src={saudi} alt={"saudi"} /></span>
                    <span className="text-[16px] font[400]">+966</span>
                    <span className="text-[20px] text-gray-300">|</span>
                </div>
            }
        />
    );
};

export default InputPhone;

import { useState } from "react";
import Image from "next/image";
import saudi from "../../../../public/saudi-arabia-flag-icon.svg";
import { Input } from "@nextui-org/react";
import { strings } from "@/utilis/Localization";

const InputPhone = ({ onPhoneChange }) => {
    const [phone, setPhone] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [debounceTimer, setDebounceTimer] = useState(null);
    const [error, setError] = useState("");

    const handleValidation = (e) => {
        const value = e.target.value;
        setPhone(value);

        // Clear previous debounce timer
        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }

        // Set new debounce timer
        const newDebounceTimer = setTimeout(() => {
            const cleanedValue = value.replace(/\D/g, '');
            let isValidPhone = true;

            // Only validate if the phone number is not empty
            if (cleanedValue) {
                isValidPhone = /^(5(0|3|4|5|6|7|8|9)|50|53|54|55|56|57|58|59)\d{7}$/.test(cleanedValue);
            }

            setIsValid(isValidPhone);
            setError(!isValidPhone ? strings.PhoneError : "");

            if (onPhoneChange) {
                onPhoneChange(cleanedValue, isValidPhone);
            }
        }, 500);

        setDebounceTimer(newDebounceTimer);
    };

    const handleKeyPress = (e) => {
        const charCode = e.charCode;
        // Allow only numeric characters (0-9) and backspace (8)
        if (charCode < 48 || charCode > 57) {
            e.preventDefault();
        }
    };

    return (
        <div>
            <Input
                dir={"ltr"}
                isRequired={true}
                value={phone}
                onChange={handleValidation}
                onKeyPress={handleKeyPress}
                size={"lg"}
                placeholder="5xxxx"
                type={"tel"}
                id="phone"
                label={strings.Phone}
                name="Phone"
                labelPlacement={"outside"}
                classNames={{ label: "!text-[--gray-2] di", inputWrapper: "bg-[--gray]" }}
                isInvalid={!isValid}
                startContent={
                    <div className="flex items-center gap-[6px]">
                        <span><Image quality={100} width={35} height={40} src={saudi} alt={"saudi"} /></span>
                        <span className="text-[16px] font[400]">+966</span>
                        <span className="text-[20px] text-gray-300">|</span>
                    </div>
                }
            />
            {error && <div dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"} className="text-tiny text-danger">{error}</div>}
        </div>
    );
};

export default InputPhone;

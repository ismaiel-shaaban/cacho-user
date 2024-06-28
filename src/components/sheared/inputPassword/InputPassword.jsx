import { EyeSlashFilledIcon } from "@/utilis/Icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/utilis/Icons/EyeFilledIcon";
import { Input } from "@nextui-org/react";
import { useState, useEffect } from "react";
import {strings} from "@/utilis/Localization";

const InputPassword = ({ onPasswordChange, label, placeholder }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [error, setError] = useState("");
    const [typingTimeout, setTypingTimeout] = useState(0);
    const [valid, setValid] = useState(true);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleValidation = (e) => {
        const value = e.target.value;

        clearTimeout(typingTimeout);

        const newTimeout = setTimeout(() => {
            const isValid =
                value.length >= 8

            onPasswordChange(value, isValid);
            setValid(isValid)

            if (!isValid) {
                setError(
                    strings.PasswordError
                );
            } else {
                setError("");
            }
        }, 500); // Adjust the delay as needed (in milliseconds)

        setTypingTimeout(newTimeout);
    };


    return (
        <div>
            <Input
                isRequired={true}
                size={"lg"}
                placeholder={placeholder}
                type={isVisible ? "text" : "password"}
                name="password"
                onChange={handleValidation}
                label={label}
                labelPlacement={"outside"}
                classNames={{ label: "!text-[--gray-2]" }}
                isInvalid={!valid}
                endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                    </button>
                }
            />
            {error && <div dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"} className="text-tiny text-danger">{error}</div>}
        </div>
    );
};

export default InputPassword;

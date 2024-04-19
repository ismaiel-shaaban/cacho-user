import { useState } from "react";
import Image from "next/image";
import saudi from "../../../../public/saudi-arabia-flag-icon.svg";
import { Input } from "@nextui-org/react";

const InputPhone = ({ onPhoneChange }) => {
    const [phone, setPhone] = useState("");
    const [isValid, setIsValid] = useState(false);

    const handleValidation = (e) => {
        const value = e.target.value;
        const isValid = isNaN(value) || /[0-9]{12}/.test(value) || value.length > 11 || value.includes(" ");
        // wait for user to finish typing
        setIsValid(isValid);
        setPhone(/^\d*$/.test(value) ? value : phone);
        // pass the value to the parent component
        onPhoneChange(value, !isValid);
    }
    return (
        <Input isRequired={true} value={phone} onChange={handleValidation}
            size={"lg"} placeholder="0000" type={"tel"} id="phone" label={"Phone"} name="Phone"
            labelPlacement={"outside"} classNames={{ label: "!text-[--gray-2]", inputWrapper: "bg-[--gray]" }}
            isInvalid={isValid}
            validationState={!isValid ? "valid" : "invalid"}
            startContent={<div className="flex items-center gap-[6px]">
                <span><Image width={35} height={40} src={saudi} alt={"saudi"} /></span>
                <span className="text-[16px] font[400]">+966</span>
                <span className="text-[20px] text-gray-300">|</span>
            </div>}
        />
    )
}

export default InputPhone
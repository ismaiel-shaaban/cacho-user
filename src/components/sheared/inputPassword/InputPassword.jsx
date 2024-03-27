import {EyeSlashFilledIcon} from "@/utilis/Icons/EyeSlashFilledIcon";
import {EyeFilledIcon} from "@/utilis/Icons/EyeFilledIcon";
import {Input} from "@nextui-org/react";
import {useState} from "react";

const InputPassword = ({  onPasswordChange , label , placeholder}) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleValidation = (e) => {
        const value = e.target.value;
        const isValid = value.length > 6;
        onPasswordChange(value, isValid);
    }
    return (
        <Input isRequired={true} size={"lg"} placeholder={placeholder}
               type={isVisible ? "text" : "password"}
               name="password" onChange={handleValidation}
               label={label} labelPlacement={"outside"} classNames={{label: "!text-[--gray-2]"}}
               endContent={<button className="focus:outline-none" type="button"
                                   onClick={toggleVisibility}>
                   {isVisible ? (<EyeSlashFilledIcon
                       className="text-2xl text-default-400 pointer-events-none"/>) : (
                       <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none"/>)}
               </button>}
        />
    )
}

export default InputPassword
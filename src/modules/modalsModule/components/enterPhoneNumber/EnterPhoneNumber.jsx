import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import ForgetHeader from "@/modules/modalsModule/components/forgetHeader/ForgetHeader";
import { strings } from "@/utilis/Localization";

const EnterPhoneNumber = ({ onPhoneChange }) => {
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [timer, setTimer] = useState(0) // Declare timer variable here
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailChange = (e) => {
        const { value } = e.target;
        setEmail(value);
        clearTimeout(timer); // Clear previous timeout
        const newTimeout = setTimeout(() => { // Use the variable without declaring it again
            setIsEmailValid(validateEmail(value));
            if (!validateEmail(value) && value.trim() !== "") {
                setErrorMessage("Please enter a valid email address");
            } else {
                setErrorMessage("");
            }
        }, 700); // Set timeout to 700ms (adjust as needed)
        setTimer(newTimeout)
    };

    const handleContinue = async () => {
        setIsLoading(true)
        if (isEmailValid) {
            const sendCode = await fetch("https://management.cachooapp.com/api/customer/auth/code/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    "username": email
                })
            });
            const response = await sendCode.json();
            if (response.code === 200) {
                setIsLoading(false)
                onPhoneChange(email);
            }
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className="flex flex-col gap-[34px] w-full mx-auto sm:w-2/3 md:p-9" dir={strings.getLanguage() === "ar" ? "rtl" : "ltr"}>
            <ForgetHeader />
            <div className={"flex flex-col gap-3 justify-between"}>
                <Input
                    type="email"
                    label={strings.Email} placeholder={strings.EnterYourEmail}
                    labelPlacement="outside"
                    value={email}
                    classNames={{ label: "!text-[--gray-2]" }}
                    onChange={handleEmailChange}
                    isRequired={true}
                    size="lg"
                    className="w-full"
                    isInvalid={!!errorMessage} // Show error if errorMessage is not empty
                />
                {errorMessage && <div className="text-tiny text-danger">{errorMessage}</div>}
            </div>
            <div>
                <Button size="lg" isLoading={isLoading} isDisabled={!isEmailValid} className="bg-[--primary-color] text-white w-full"
                    onClick={handleContinue}>{strings.Continue}</Button>
            </div>
        </div>
    );
}

export default EnterPhoneNumber;

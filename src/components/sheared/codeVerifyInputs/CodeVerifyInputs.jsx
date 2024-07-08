import CodeInput from "@/components/sheared/codeVerifyInputs/CodeInput";
import { useRef, useEffect } from "react";

const CodeVerifyInputs = ({ setCode }) => {
    const inputRefs = useRef([]);

    const handleChange = (index, value) => {
        setCode((prev) => {
            const newCode = [...prev];
            newCode[index] = value;
            return newCode;
        });
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, event) => {
        if (event.key === 'Backspace' && !event.target.value && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    return (
        <div dir={"ltr"} className="flex items-center justify-between gap-2 md:gap-[31px]">
            {Array.from({ length: 6 }).map((_, index) => (
                <CodeInput
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    placeholder={"-"}
                    onChange={(value) => handleChange(index, value)}
                    onKeyDown={(event) => handleKeyDown(index, event)}
                />
            ))}
        </div>
    );
};

export default CodeVerifyInputs;

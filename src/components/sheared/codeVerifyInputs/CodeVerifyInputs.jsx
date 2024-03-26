import CodeInput from "@/components/sheared/codeVerifyInputs/CodeInput";

const CodeVerifyInputs = ({setCode}) => {
    const handleChange = (index, value) => {
        setCode((prev) => {
            const newCode = [...prev];
            newCode[index] = value;
            return newCode;
        });
    };

    return (<div className="flex items-center justify-between gap-2 md:gap-[31px]">
            {Array.from({length: 6}).map((_, index) => (
                <CodeInput key={index} placeholder={"-"} onChange={(value) => handleChange(index, value)}/>))}
        </div>);
}

export default CodeVerifyInputs;
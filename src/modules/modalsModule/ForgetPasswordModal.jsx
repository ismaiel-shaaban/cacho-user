import EnterPhoneNumber from "@/modules/modalsModule/components/enterPhoneNumber/EnterPhoneNumber";
import VerifyPhoneNumber from "@/modules/modalsModule/components/verifyPhoneNumber/VerifyPhoneNumber";
import {useEffect, useState} from "react";
import SetNewPassword from "@/modules/modalsModule/components/setNewPassword/SetNewPassword";
import {Modal, ModalBody, ModalContent} from "@nextui-org/react";

const ForgetPasswordModal = ({isOpen, onOpenChange}) => {
    const [isCodeValid, setIsCodeValid] = useState(false);
    const [isChangePassword, setIsChangePassword] = useState(false);
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");

    const handlePhoneChange = (email) => {
        setEmail(email);
        setIsChangePassword(true)
    }

    const handelCodeValidation = (valid , verificationCode)=>{
        setIsCodeValid(valid)
        setCode(verificationCode)
    }

    return (
        <Modal size={"5xl"} isOpen={isOpen} placement={"center"} onOpenChange={onOpenChange}>
            <ModalContent>
                <ModalBody>
                    <>
                        {
                            !email && <EnterPhoneNumber onPhoneChange={handlePhoneChange}/>
                        }
                        {
                            email && !isCodeValid && <VerifyPhoneNumber email={email} isChangePassword={isChangePassword} passIsValidCode={handelCodeValidation}/>
                        }
                        {
                            isCodeValid && <SetNewPassword code={code} email={email}/>
                        }
                    </>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default ForgetPasswordModal;
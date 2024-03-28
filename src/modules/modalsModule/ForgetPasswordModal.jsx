import EnterPhoneNumber from "@/modules/modalsModule/components/enterPhoneNumber/EnterPhoneNumber";
import VerifyPhoneNumber from "@/modules/modalsModule/components/verifyPhoneNumber/VerifyPhoneNumber";
import {useEffect, useState} from "react";
import SetNewPassword from "@/modules/modalsModule/components/setNewPassword/SetNewPassword";
import {Modal, ModalBody, ModalContent} from "@nextui-org/react";

const ForgetPasswordModal = ({isOpen, onOpenChange}) => {
    const [isCodeValid, setIsCodeValid] = useState(false);
    const [phone, setPhone] = useState({
        value: "",
        isValid: false
    });

    const handlePhoneChange = (value, isValid) => {
        setPhone({value, isValid});
    }

    return (
        <Modal size={"5xl"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                <ModalBody>
                    <>
                        {
                            !phone.isValid && <EnterPhoneNumber onPhoneChange={handlePhoneChange}/>
                        }
                        {
                            phone.isValid && !isCodeValid && <VerifyPhoneNumber phone={phone.value} isValidPhone={phone.isValid}
                                                                setIsCodeValid={setIsCodeValid}/>
                        }
                        {
                            isCodeValid && <SetNewPassword/>
                        }
                    </>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default ForgetPasswordModal;
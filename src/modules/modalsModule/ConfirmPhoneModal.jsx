import {Modal, ModalBody, ModalContent} from "@nextui-org/react";
import VerifyPhoneNumber from "@/modules/modalsModule/components/verifyPhoneNumber/VerifyPhoneNumber";
import {useState} from "react";

const ConfirmPhoneModal = ({phone, onOpenChange, isOpen}) => {
    const [isCodeValid, setIsCodeValid] = useState(false);
    return (<Modal size={"5xl"} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
            <ModalBody>
                <VerifyPhoneNumber phone={phone.value} isValidPhone={phone.isValid}
                                   setIsCodeValid={setIsCodeValid}/>
            </ModalBody>
        </ModalContent>
    </Modal>)
}

export default ConfirmPhoneModal;
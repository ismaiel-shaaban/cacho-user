import {Modal, ModalBody, ModalContent} from "@nextui-org/react";
import VerifyPhoneNumber from "@/modules/modalsModule/components/verifyPhoneNumber/VerifyPhoneNumber";
import {useState} from "react";

const ConfirmPhoneModal = ({email, onOpenChange, isOpen}) => {
    return (<Modal size={"5xl"} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
            <ModalBody>
                <VerifyPhoneNumber email={email}/>
            </ModalBody>
        </ModalContent>
    </Modal>)
}

export default ConfirmPhoneModal;
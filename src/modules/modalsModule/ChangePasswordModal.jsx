import {Modal, ModalBody, ModalContent} from "@nextui-org/react";

const ChangePasswordModal = ({isOpen, onOpenChange}) => {
    return (
        <Modal size={"2xl"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                <ModalBody>
                    <h1>Change Password</h1>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default ChangePasswordModal;
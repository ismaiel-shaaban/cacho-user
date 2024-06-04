import {Modal, ModalBody, ModalContent} from "@nextui-org/react";
import EditProfileContent from "@/modules/layout/navBar/components/userInfo/EditProfileContent";
import ChangePasswordContent from "@/modules/layout/navBar/components/userInfo/ChangePasswordContent";
import ChangeLocationContent from "@/modules/layout/navBar/components/userInfo/ChangeLocationContent";

const UserModal = ({isOpen, onOpenChange, modalContent, passLocation}) => {
    const handleLocationChange = (location) => {
        passLocation(location);
    };
    return (
        <Modal placement={"center"} size={"4xl"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {
                    (onClose) => (
                        <ModalBody className={"p-3"}>
                            {modalContent === "Edit Profile" && <EditProfileContent/>}
                            {modalContent === "Change Password" && <ChangePasswordContent/>}
                            {modalContent === "Change Location" &&
                                <ChangeLocationContent onLocationChange={handleLocationChange} onClose={onClose}/> }
                        </ModalBody>

                    )
                }
            </ModalContent>
        </Modal>
    );
}

export default UserModal;
import { Modal, ModalBody, ModalContent } from "@nextui-org/react";
import { strings } from "@/utilis/Localization";
import UsersChats from "@/modules/chatModule/components/UsersChats";

const UserChatsModal = ({ isOpen, onOpenChange, onSelectChat }) => {
    const handleSelectChat = (chatData) => {
        onSelectChat(chatData);
        onOpenChange(false); // Close the modal
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" dir={strings.getLanguage() === "en" ? "ltr" : "rtl"}>
            <ModalContent>
                <ModalBody>
                    <UsersChats onSelectChat={handleSelectChat} />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default UserChatsModal;

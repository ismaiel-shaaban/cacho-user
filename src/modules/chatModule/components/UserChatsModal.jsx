import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {strings} from "@/utilis/Localization";
import UsersChats from "@/modules/chatModule/components/UsersChats";

const UserChatsModal = ({isOpen , onOpenChange ,onSelectChat})=>{
    return(
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement={"center"} dir={strings.getLanguage() === "en" ? "ltr" : "rtl"}>
                <ModalContent>
                        <ModalBody>
                            <UsersChats onSelectChat={onSelectChat}/>
                        </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default UserChatsModal
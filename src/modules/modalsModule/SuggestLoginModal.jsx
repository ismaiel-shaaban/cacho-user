import {Button, Modal, ModalBody, ModalContent} from "@nextui-org/react";
import Link from "next/link";
import {strings} from "@/utilis/Localization";

const SuggestLoginModal = ({onOpenChange, isOpen}) => {
    return (
        <Modal size={"2xl"} isOpen={isOpen} onOpenChange={onOpenChange} placement={"center"}>
            <ModalContent>
                <ModalBody>
                    <div className="text-center py-5">
                        <h3 className="mb-4 text-[20px] font-medium text-[--primary-color]">{strings.SuggestLogin}</h3>
                        <Button as={Link} href={"/login"} color="primary" onClick={onOpenChange}>{strings.LogIn}</Button>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default SuggestLoginModal
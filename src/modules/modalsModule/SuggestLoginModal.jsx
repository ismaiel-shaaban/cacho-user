import {Button, Modal, ModalBody, ModalContent} from "@nextui-org/react";
import Link from "next/link";

const SuggestLoginModal = ({onOpenChange, isOpen}) => {
    return (
        <Modal size={"2xl"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                <ModalBody>
                    <div className="text-center py-5">
                        <h3 className="mb-4 text-[20px] font-medium text-[--primary-color]">You Need To Login To Save This Product.</h3>
                        <Button as={Link} href={"/login"} color="primary" onClick={onOpenChange}>Login</Button>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default SuggestLoginModal
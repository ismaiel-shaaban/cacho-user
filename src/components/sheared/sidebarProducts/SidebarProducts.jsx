import SidebarProductsContent from "@/components/sheared/sidebarProducts/SidebarProductsContent";
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";
import {strings} from "@/utilis/Localization";
import {useEffect, useState} from "react";

const SidebarProducts = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setShowSidebar(window.innerWidth >= 768); // Show sidebar for screen widths <= 768px (md breakpoint)
        };
        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (<>
            {showSidebar && <SidebarProductsContent/>}
            {!showSidebar && <>
                <Button onPress={onOpen} variant={"shadow"} color={"primary"} className="mt-3">Filter</Button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement={"center"}>
                    <ModalContent>
                        {(onClose) => (<>
                            <ModalHeader className="flex flex-col gap-1">{strings.Filter}</ModalHeader>
                            <ModalBody>
                                <SidebarProductsContent/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>)}
                    </ModalContent>
                </Modal>
            </>}
        </>

    )
}

export default SidebarProducts
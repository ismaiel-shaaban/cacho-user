import {
    Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure
} from "@nextui-org/react";
import {useEffect, useState} from "react";
import SidebarShopsContent from "@/modules/categoriesModule/components/saidbarShops/SidebarShopsContent";
import {strings} from "@/utilis/Localization";

const SidebarShopsFilter = () => {
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
        {showSidebar && <SidebarShopsContent/>}
        {!showSidebar && <>
            <Button onPress={onOpen} variant={"shadow"} color={"primary"} className="mt-3">Filter</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement={"center"}>
                <ModalContent>
                    {(onClose) => (<>
                        <ModalHeader className="flex flex-col gap-1">{strings.Filter}</ModalHeader>
                        <ModalBody>
                            <SidebarShopsContent/>
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
    </>)
}

export default SidebarShopsFilter
import {useState} from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, useDisclosure, User} from "@nextui-org/react";
import {LogoutIcon} from "@/utilis/Icons/LogoutIcon";
import EditProfile from "@/modules/layout/navBar/components/userInfo/EditProfile";
import ChangePassword from "@/modules/layout/navBar/components/userInfo/ChangePassword";
import ChangeLocation from "@/modules/layout/navBar/components/userInfo/ChangeLocation";
import UserModal from "@/modules/modalsModule/UserModal";

const UserInfo = () => {
    const [modalContent, setModalContent] = useState(null);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const handleActionClick = (action) => {
        setModalContent(action);
        onOpen();
    };

    return (
        <>
            <Dropdown placement="bottom-start" aria-label="User Info">
                <DropdownTrigger>
                    <User
                        as="button"
                        avatarProps={{
                            isBordered: true,
                            src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                        }}
                        className="transition-transform"
                        description="@tonyreichert"
                        name="Tony Reichert"
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                    <DropdownItem key="Edit Profile">
                        <EditProfile onClick={
                            () => handleActionClick("Edit Profile")
                        }/>
                    </DropdownItem>
                    <DropdownItem key="Change Password">
                        <ChangePassword onClick={
                            () => handleActionClick("Change Password")
                        }/>
                    </DropdownItem>
                    <DropdownItem key="Change location">
                        <ChangeLocation onClick={
                            () => handleActionClick("Change Location")
                        }/>
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger">
                        <div className="flex items-center justify-start gap-2">
                            <span><LogoutIcon/></span>
                            <span>Logout</span>
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <UserModal isOpen={isOpen} onOpenChange={onOpenChange} modalContent={modalContent}/>
        </>
    );
}

export default UserInfo;
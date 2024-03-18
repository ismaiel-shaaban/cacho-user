import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User} from "@nextui-org/react";
import {EditProfileIcon} from "@/utilis/Icons/EditProfileIcon";
import {LogoutIcon} from "@/utilis/Icons/LogoutIcon";
import LockIcon from "@/utilis/Icons/LockIcon";
import ChangeLocationIcon from "@/utilis/Icons/ChangeLocationIcon";

const UserInfo = () => {
    return (
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
                    <div className="flex items-center justify-start gap-2">
                        <span><EditProfileIcon/></span>
                        <span>Edit Profile</span>
                    </div>
                </DropdownItem>
                <DropdownItem key="Change Password">
                    <div className="flex items-center justify-start gap-2">
                        <span><LockIcon/></span>
                        <span>Change Password</span>
                    </div>
                </DropdownItem>
                <DropdownItem key="Change location">
                    <div className="flex items-center justify-start gap-2">
                        <span><ChangeLocationIcon/></span>
                        <span>Change location</span>
                    </div>
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                    <div className="flex items-center justify-start gap-2">
                        <span><LogoutIcon/></span>
                        <span>Logout</span>
                    </div>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default UserInfo;
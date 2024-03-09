import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User} from "@nextui-org/react";
import {EditProfileIcon} from "@/utilis/Icons/EditProfileIcon";
import {LogoutIcon} from "@/utilis/Icons/LogoutIcon";

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
                <DropdownItem key="settings">
                    <div className="flex items-center justify-start gap-2">
                        <span><EditProfileIcon/></span>
                        <span>Settings</span>
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
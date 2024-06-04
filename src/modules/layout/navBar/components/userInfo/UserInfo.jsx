import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {deleteCookie, getCookie} from "cookies-next";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, useDisclosure, User} from "@nextui-org/react";
import {LogoutIcon} from "@/utilis/Icons/LogoutIcon";
import EditProfile from "@/modules/layout/navBar/components/userInfo/EditProfile";
import ChangePassword from "@/modules/layout/navBar/components/userInfo/ChangePassword";
import ChangeLocation from "@/modules/layout/navBar/components/userInfo/ChangeLocation";
import UserModal from "@/modules/modalsModule/UserModal";
import {strings} from "@/utilis/Localization";
import {useUserData} from "@/utilis/getUserData";

const UserInfo = ({userLocation}) => {
    const router = useRouter();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [modalContent, setModalContent] = useState(null);
    const [userLocationData, setUserLocationData] = useState(null);
    const [userData, setUserData] = useState({
        name:"",
        imageUrl:""
    });
    const token = getCookie("token")
    const {data , error , isLoading} = useUserData(token)
    useEffect(() => {
        if(data){
            setUserData({imageUrl: data.avatar, name: strings.Hi + " " + data.name})
        }
        if(isLoading){
            setUserData(strings.Loading)
        }
        if (error){
            setUserData(strings.Error)
        }
    }, [data , isLoading , error]);

    useEffect(()=>{
        setUserLocationData(userLocation)
    },[userLocation])


    const handleActionClick = (action) => {
        setModalContent(action);
        onOpen();
    };
    const handelLogout = async () => {
        try {
            const response = await fetch('https://caco-dev.mimusoft.com/api/customer/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            if (!response.ok) {
                throw new Error('Logout failed');
            }
            deleteCookie("token");
            localStorage.removeItem("userData")
            setUserData(null)
            await router.reload();
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    return (
        <>
            <Dropdown placement="bottom-start" aria-label="User Info">
                <DropdownTrigger>
                    <User
                        as="button"
                        avatarProps={{
                        src:`${userData.imageUrl}`
                        }}
                        aria-label="User Info"
                        className="transition-transform"
                        description={userLocationData && userLocationData}
                        name={userData ? userData.name : null}
                        classNames={{
                            description: "text-[14px] font-medium text-[--primary-color]",
                            name: "text-[12px] font-[400] text-[--gray-2]",
                        }}
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                    {
                        token && <DropdownItem key="Edit Profile">
                            <EditProfile onClick={
                                () => handleActionClick("Edit Profile")
                            }/>
                        </DropdownItem>
                    }
                    {token && <DropdownItem key="Change Password">
                        <ChangePassword onClick={
                            () => handleActionClick("Change Password")
                        }/>
                    </DropdownItem>}
                    <DropdownItem key="Change location">
                        <ChangeLocation onClick={
                            () => handleActionClick("Change Location")
                        }/>
                    </DropdownItem>
                    {token && <DropdownItem onClick={handelLogout} key="logout" color="danger">
                        <div className="flex items-center justify-start gap-2">
                            <span><LogoutIcon/></span>
                            <span>{strings.Logout}</span>
                        </div>
                    </DropdownItem>}
                </DropdownMenu>
            </Dropdown>
            <UserModal isOpen={isOpen} onOpenChange={onOpenChange} modalContent={modalContent} passLocation={
                (location) => setUserLocationData(location)
            }/>
        </>
    );
}

export default UserInfo;
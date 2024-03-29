import {EditProfileIcon} from "@/utilis/Icons/EditProfileIcon";

const EditProfile = (props) => {
    return (<>
            <div {...props} className="flex items-center justify-start gap-2">
                <span><EditProfileIcon/></span>
                <span>Edit Profile</span>
            </div>
        </>

    )
}

export default EditProfile
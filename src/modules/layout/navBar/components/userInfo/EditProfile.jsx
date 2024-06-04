import {EditProfileIcon} from "@/utilis/Icons/EditProfileIcon";
import {strings} from "@/utilis/Localization";

const EditProfile = (props) => {
    return (<>
            <div {...props} className="flex items-center justify-start gap-2">
                <span><EditProfileIcon/></span>
                <span>{strings.EditProfile}</span>
            </div>
        </>

    )
}

export default EditProfile
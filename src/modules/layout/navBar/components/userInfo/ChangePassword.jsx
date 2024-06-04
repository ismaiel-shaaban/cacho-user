import LockIcon from "@/utilis/Icons/LockIcon";
import {strings} from "@/utilis/Localization";

const ChangePassword = (props) => {
    return (
        <>
            <div {...props} className="flex items-center justify-start gap-2">
                <span><LockIcon/></span>
                <span>{strings.ChangePassword}</span>
            </div>
        </>
    )
}

export default ChangePassword
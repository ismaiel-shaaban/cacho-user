import ChangeLocationIcon from "@/utilis/Icons/ChangeLocationIcon";
import {strings} from "@/utilis/Localization";

const ChangeLocation = (props) => {
    return (
        <div {...props} className="flex items-center justify-start gap-2">
            <span><ChangeLocationIcon/></span>
            <span>{strings.ChangeLocation}</span>
        </div>
    );
}

export default ChangeLocation;
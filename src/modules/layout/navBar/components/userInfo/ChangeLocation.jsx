import ChangeLocationIcon from "@/utilis/Icons/ChangeLocationIcon";

const ChangeLocation = (props) => {
    return (
        <div {...props} className="flex items-center justify-start gap-2">
            <span><ChangeLocationIcon/></span>
            <span>Change location</span>
        </div>
    );
}

export default ChangeLocation;
import LockIcon from "@/utilis/Icons/LockIcon";

const ChangePassword = (props) => {
    return (
        <>
            <div {...props} className="flex items-center justify-start gap-2">
                <span><LockIcon/></span>
                <span>Change Password</span>
            </div>
        </>
    )
}

export default ChangePassword
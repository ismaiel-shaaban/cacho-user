import {useState} from "react";
import ImageUpload from "@/components/sheared/imageUpload/ImageUpload";
import {Button, Input} from "@nextui-org/react";

const EditProfileContent = () => {
    const [formData, setFormData] = useState({
        userImage: null, userName: "",
    })
    const handleImageChange = (file) => {
        setFormData({...formData, userImage: file});
    };
    return (
        <form>
            <div className="flex flex-col justify-center items-center gap-6">
                <h4 className="font-medium text-[24px]">Edit Profile</h4>

                <ImageUpload onChange={handleImageChange}/>

                <Input size={"lg"} type={"text"} placeholder={"Name"}
                       className={"w-4/6"}
                       labelPlacement={"outside"}
                       label={"Name"}
                       onChange={(e) => setFormData({...formData, userName: e.target.value})}
                       classNames={{"label": "!text-[--gray-2]"}}
                />
                <Button className={"w-4/6 text-white bg-[--green]"} size={"lg"}>Edit</Button>
            </div>
        </form>
    )
}

export default EditProfileContent;
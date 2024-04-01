import {useState} from "react";
import ImageUpload from "@/components/sheared/imageUpload/ImageUpload";
import {Button, Input} from "@nextui-org/react";
import {getCookie} from "cookies-next";
import {mutate} from "swr";

const EditProfileContent = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);
    const tokenData = getCookie('token')
    console.log(tokenData)
    const [formData, setFormData] = useState({
        avatar: "", name: "",
    })
    const handleImageChange = (file) => {
        setFormData({...formData, avatar: file});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const res = await fetch("https://caco-dev.mimusoft.com/api/customer/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + tokenData
                },
                body: JSON.stringify(formData)
            });
            setIsLoading(false);
            if (res.ok) {
                setIsSuccess(true); // Set isSuccess to true if the request is successful
                const newUserData = await res.json();
                mutate("https://caco-dev.mimusoft.com/api/customer/profile" ,newUserData ,false);
            } else {
                setIsSuccess(false); // Set isSuccess to false if the request fails
            }
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    };


    return (<form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center gap-6">
            <h4 className="font-medium text-[24px]">Edit Profile</h4>

            <ImageUpload onChange={handleImageChange}/>

            <Input size={"lg"} type={"text"} placeholder={"Name"}
                   className={"w-4/6"}
                   labelPlacement={"outside"}
                   label={"Name"}
                   onChange={(e) => setFormData({...formData, name: e.target.value})}
                   classNames={{"label": "!text-[--gray-2]"}}
            />
            <Button className={"w-4/6 text-white bg-[--green]"} size={"lg"}
                    type={"submit"} isLoading={isLoading}
            >Edit</Button>
            {error && <p className={"text-red-500"}>{error}</p>}
            {isSuccess && <p className={"text-green-500"}>Profile updated successfully</p>}
        </div>
    </form>)
}

export default EditProfileContent;
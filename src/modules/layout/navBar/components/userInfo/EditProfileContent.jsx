import { memo, useState } from "react";
import ImageUpload from "@/components/sheared/imageUpload/ImageUpload";
import { Button, Input } from "@nextui-org/react";
import { getCookie } from "cookies-next";
import { mutate } from "swr";
import { useRouter } from "next/router";
import { strings } from "@/utilis/Localization";

const EditProfileContent = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);
    const tokenData = getCookie('token')
    const [formData, setFormData] = useState({
        avatar: "", name: "",
    })
    const handleImageChange = (file) => {
        setFormData({ ...formData, avatar: file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const formDataApi = new FormData();
            formDataApi.append("avatar", formData.avatar); // Append the file to the FormData object
            formDataApi.append("name", formData.name); // Append other form data fields
            const res = await fetch("https://cachooapp.com/api/customer/profile", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + tokenData
                },
                body: formDataApi // Pass the FormData object as the body
            });
            setIsLoading(false);
            if (res.ok) {
                setIsSuccess(true);
                const newUserData = await res.json();
                mutate("https://cachooapp.com/api/customer/profile", newUserData, false);
            } else {
                setIsSuccess(false);
            }
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    };



    return (<form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center gap-6">
            <h4 className="font-medium text-[24px]">{strings.EditProfile}</h4>

            <ImageUpload onChange={handleImageChange} />

            <Input size={"lg"} type={"text"} placeholder={strings.Name}
                className={"w-4/6"}
                labelPlacement={"outside"}
                label={strings.Name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                classNames={{ "label": "!text-[--gray-2]" }}
            />
            <Button className={"w-4/6 text-white bg-[--green]"} size={"lg"}
                type={"submit"} isLoading={isLoading}
            >{strings.Edit}</Button>
            {error && <p className={"text-red-500"}>{error}</p>}
            {isSuccess && <p className={"text-green-500"}>{strings.ProfileUpdate}</p>}
        </div>
    </form>)
}

export default memo(EditProfileContent);
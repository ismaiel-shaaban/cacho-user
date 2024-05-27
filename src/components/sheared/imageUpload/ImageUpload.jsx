import { useState } from "react";
import Image from "next/image";
import cameraImage from "../../../../public/camera1.svg";

const ImageUpload = ({ onChange }) => {
    const [image, setImage] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
        onChange(file);
    };

    return (
        <div>
            <input type="file" className="hidden" id="userImage" onChange={handleFileChange} />
            <label htmlFor="userImage" className="w-[100px] h-[100px] rounded-full bg-[#E5E5E5] flex justify-center items-center cursor-pointer sm:w-[150px] sm:h-[150px]">
                {image ? (
                    <Image width={50} height={50} src={image} className="w-full h-full rounded-full object-cover" alt={"User Image"} />
                ) : (
                    <Image src={cameraImage} className="w-[50px] h-[50px] sm:w-[95px] sm:h-[95px]" alt={"Camera Icon"} />
                )}
            </label>
        </div>
    );
};

export default ImageUpload;
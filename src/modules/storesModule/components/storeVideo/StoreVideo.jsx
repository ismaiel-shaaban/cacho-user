import Image from "next/image";

const StoreVideo = ({video}) => {
    console.log(video)
    return (
        <div className="">
            <Image src={video} alt={"store Video"}
                   className="w-full object-cover"
            />
        </div>
    );
}

export default StoreVideo;
import ReactPlayer from 'react-player'
import {useEffect, useState} from "react"
import Image from "next/image";

const StoreVideo = ({video ,image}) => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])
    return (<>
        <div className="w-full h-[68vh]">
            {video && isLoaded ? <ReactPlayer url={video}
                                   width='100%'
                                   height='100%'
                                   loop={true}
                                   volume={0.5}
                                   playing={true}
                                   controls={false}
            /> : <Image src={image} width={400} height={400} alt={"Store Image"} className={"block w-full h-full object-cover"} />}
        </div>
    </>);
}

export default StoreVideo;
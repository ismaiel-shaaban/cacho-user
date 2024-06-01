import ReactPlayer from 'react-player/youtube'
import {useEffect, useState} from "react"
import Image from "next/image";

const StoreVideo = ({video, image}) => {
    const [isLoaded, setIsLoaded] = useState(false)



    useEffect(() => {
        setIsLoaded(true)
    }, [])
    return (<>
        <div className={`video w-full h-[calc(100vh-64px)] aspect-video`}>
            {video && isLoaded ? <ReactPlayer url={video}
                                              width='100%'
                                              height='100%'
                                              loop={true}
                                              volume={0.5}
                                              playing={true}
                                              controls={false}
                                              playIcon={<span>ooo</span>}
                                              config={{
                                                  youtube: {
                                                      playerVars: {
                                                          controls: 0, // Hide controls
                                                          showinfo: 0, // Hide title and uploader info
                                                          fs: 0
                                                      }
                                                  }
                                              }}
            /> : <Image src={image} width={400} height={400} alt={"Store Image"}
                        className={"block w-full h-full object-cover"}/>}
        </div>
    </>);
}

export default StoreVideo;
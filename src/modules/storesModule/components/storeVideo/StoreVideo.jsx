"use client"
import ReactPlayer from 'react-player/youtube'
import {useEffect, useRef, useState} from "react"
import Image from "next/image";
import {FaPlay} from "react-icons/fa";

const StoreVideo = ({video, image}) => {
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        setIsLoaded(true);
    }, []);
    return (<>
        <div className={`video w-full h-[calc(90vh-64px)] aspect-video [&>.ytp-chrome-top]:hidden relative`}>
            {video && isLoaded ? <ReactPlayer url={video}
                                              width='100%'
                                              height='100%'
                                              loop={true}
                                              volume={0.5}
                                              playing={true}
                                              controls={false}
                                              playIcon={<FaPlay size={30} />}
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
            <div className={"absolute top-0 start-0 w-full h-full z-10"}/>
        </div>
    </>);
}

export default StoreVideo;

const StoreVideo = ({video}) => {
    return (
        <>
            {video ?<div className="">
                <video src={video} className="w-full object-cover" autoPlay={true}/>
            </div> : null}
        </>
    );
}

export default StoreVideo;
// import store from "../../../../../public/store.mp4"
const StoreVideo = () => {
    return (
        <>
            <div className="w-full">
                {/*<video src={"../../../../../public/store.mp4"} className="w-full object-cover" autoPlay={true}/>*/}
                <iframe className="w-full h-[50vh]" src="https://www.youtube.com/embed/6FI0CV7M-W8?si=TAX0Y3-MsAnQ7_x_?autoplay=1"
                        title="YouTube video player" frameBorder="0"
                        allow="autoplay"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </>
    );
}

export default StoreVideo;
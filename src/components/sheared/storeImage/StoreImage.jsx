/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
const StoreImage = ({ image, alt }) => {
    return (
        <div>
            <img src={image} alt={alt} className="block w-[80px] object-cover h-[80px] rounded-md overflow-hidden" />
        </div>
    )
}

export default StoreImage
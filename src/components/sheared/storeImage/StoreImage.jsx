import Image from 'next/image'
const StoreImage = ({ image, alt }) => {
    return (
        <div>
            <Image src={image} alt={alt} width={80} height={80} className="block w-[80px] object-cover h-[80px] rounded-md overflow-hidden" />
        </div>
    )
}

export default StoreImage
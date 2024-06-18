import Image from 'next/image'
const StoreImage = ({ image, alt }) => {
    return (
        <div>
            <Image quality={100} src={image} alt={alt} width={80} height={80} className="block aspect-square rounded-md overflow-hidden" />
        </div>
    )
}

export default StoreImage
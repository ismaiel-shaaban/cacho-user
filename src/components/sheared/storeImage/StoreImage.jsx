import Image from 'next/image'
const StoreImage = ({ image, alt }) => {
    return (
        <div>
            <img lazy src={image} alt={alt} className="block aspect-square rounded-md overflow-hidden w-[80px] h-[80px]" />
        </div>
    )
}

export default StoreImage
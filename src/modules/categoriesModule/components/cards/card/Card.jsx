import Image from "next/image";
import classes from './Card.module.css'
import Link from "next/link";

const Card = ({image, title}) => {
    return (
        <>
            <Link href={"/"} className={`${classes.card} block relative w-full h-[150px] overflow-hidden rounded-md`}>
                <Image src={image} alt="business" className="w-full h-full object-cover"/>
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[30px] bg-white flex items-center justify-center transition-height delay-800">
                    <h2 className="font-[500] text-[14px] line-clamp-1">{title}</h2>
                </div>
            </Link>
        </>

    )
}

export default Card
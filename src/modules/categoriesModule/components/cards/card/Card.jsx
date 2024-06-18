import Image from "next/image";
import classes from './Card.module.css'
import Link from "next/link";

const Card = ({item}) => {
    const filter = item.uuid ? `?filter=${item.uuid}` : '';
    return (
        <>
            <Link href={`/Stores${filter}`} className={`${classes.card} block relative w-full h-[150px] overflow-hidden rounded-md`}>
                <Image quality={100} src={item.image} fill alt="business"  className="w-full h-full object-cover block"/>
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[30px] bg-white flex items-center justify-center transition-height delay-800">
                    <h2 className="font-[500] text-[14px] line-clamp-1">{item.name}</h2>
                </div>
            </Link>
        </>

    )
}

export default Card
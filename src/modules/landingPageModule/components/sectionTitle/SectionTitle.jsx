import Link from "next/link";

const SectionTitle = ({ title , link }) => {
    return (
        <div className="section-title flex items-center justify-between">
            <div>
                <h2 className="font-[600] text-[32px] text-[#000]">{title}</h2>
            </div>
            {link && <Link href={link} className="text-[--primary-color] text-[20px]">view all</Link>}
        </div>
    )
}

export default SectionTitle
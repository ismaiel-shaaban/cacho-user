import {usePathname} from "next/navigation";

const CardsLayout = ({children}) => {
    const path = usePathname()
    let lg = "4"
    let md = "3"
    let sm = "2"
    let gap = "20"
    if (path === '/Categories') {
        lg = "5"
        md = "4"
        sm = "3"
    }
    console.log(lg, md, sm, gap)
    return (
        <>
            <div
                className={`grid lg:grid-cols-${lg} md:grid-cols-${md} sm:grid-cols-${sm} md:gap-${gap} gap-2 mt-[40px]`}>
                {children}
            </div>
        </>
    );
};

export default CardsLayout;

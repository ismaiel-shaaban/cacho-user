const CardsLayout = ({children}) => {
    return (
        <>
            <div
                className={`grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-[24px] gap-2 mt-[40px]`}>
                {children}
            </div>
        </>
    );
};

export default CardsLayout;

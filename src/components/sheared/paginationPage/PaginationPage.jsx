import {Pagination} from "@nextui-org/react";
import {useEffect, useState} from "react";

const PaginationPages = ({total, current, onChange}) => {
    const [currentPage, setCurrentPage] = useState(current)
    useEffect(() => {
        setCurrentPage(current);
    }, [current]);
    const handlePageChange = (page) => {
        setCurrentPage(page);
        onChange(page);
    };

    return (<div className="flex justify-center mt-5">
        <Pagination variant={"faded"} siblings={2} onChange={handlePageChange} loop showControls total={total}
                    page={currentPage}/>
    </div>);
};

export default PaginationPages;

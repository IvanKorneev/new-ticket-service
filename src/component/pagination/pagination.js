import React, {useState} from "react";
import './pagination.sass'

const Pagination = ({totalEventsCount, pageSize, currentPage, onPageChanged, portionSize = 5}) => {

    let pagesCount = Math.ceil(totalEventsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);

    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className='pagination'>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(page => {
                    return <span key={page}
                                 onClick={() => {
                                     onPageChanged(page)
                                 }}
                                 className={currentPage === page ? 'pages-item active' : 'pages-item'}>
                        {page}
                    </span>
                })}

            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
        </div>
    )
};
export default Pagination;

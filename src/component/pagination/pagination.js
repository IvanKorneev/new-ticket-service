import React from "react";
import './pagination.sass'

const Pagination = ({totalEventsCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = totalEventsCount / pageSize;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className='pagination'>
            {
                pages.map(page => {
                    return <span key={page} onClick={() => {
                        onPageChanged(page)
                    }} className={currentPage === page ? 'pages-item active' : 'pages-item'}>
                        {page}
                    </span>
                })
            }
        </div>
    )
};
export default Pagination
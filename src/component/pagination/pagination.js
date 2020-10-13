import React from "react";
import './pagination.sass'

const Pagination = ({totalEventsCount, pageSize,currentPage,name }) => {
    let pagesCount = totalEventsCount / pageSize;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {name}
            {
                pages.map(page => {
                    console.log(page);
                    return <span key={page} className={currentPage === page ? 'pages-item active' : 'pages-item'}>
                        {page}
                    </span>
                })
            }
        </div>
    )
};
export default Pagination
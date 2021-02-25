import React from "react";
import './price-range.sass';

const PriceRange = ({priceRanges, priceRangesRender}) => {
    return (
        <div className='price-ranges-container'>
            <h2>Price Ranges</h2>
            {priceRangesRender(priceRanges)}
        </div>
    )
}
export default PriceRange;
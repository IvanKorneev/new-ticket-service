import React from "react";
import './price-range.sass';

const PriceRange = ({priceRanges}) => {
    console.log(priceRanges)
    const priceRangesRender = (arr) => {
        return arr.map(({color,price}, index) => {
            let style = {background: color};
            return (
                <div key={index} style={style} className='price-ranges'>
                    <span className='price-ranges-items'>&euro; {price}</span>
                </div>
            )
        })
    };
    return (
        <div className='price-ranges-container'>
            <h2>Price Ranges</h2>
            {priceRangesRender(priceRanges)}
        </div>
    )
}
export default PriceRange;
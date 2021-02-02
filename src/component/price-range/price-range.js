import React from "react";
import './price-range.sass';

const PriceRange = ({priceRanges}) => {

    const priceRangesRender = (arr) => {
        return arr.map(({color,price}, index) => {
            let style = {background: color};
            return (
                <div key={index} style={style}>
                    <h5>&euro; {price}</h5>
                </div>
            )
        })
    };
    return (
        <div>
            {priceRangesRender(priceRanges)}
        </div>
    )
}
export default PriceRange;
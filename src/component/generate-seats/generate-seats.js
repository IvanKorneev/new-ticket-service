import React from "react";
import './generate-seats.sass'
import Seat from "../seat";
import {getDataFromPriceRanges} from "../helpers";


const GenerateSeats = (seatNumbers, {priceRanges, onAddedToCart, hall}, row) => {

    return (
        <div className="row"
             style={{background: getDataFromPriceRanges(priceRanges, row, 'color')}}>
            {
                seatNumbers.map((seatNumber) => {
                    return <Seat seatNumber={seatNumber} key={seatNumber}
                                 price={getDataFromPriceRanges(priceRanges, row, 'price')} priceRanges={priceRanges}
                                 row={row}
                                 onAddedToCart={onAddedToCart}
                                 id={`h${hall}r${row}s${seatNumber}`}/>

                })
            }
        </div>
    )
}

export default GenerateSeats;

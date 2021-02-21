import React from "react";
import './generate-seats.sass'
import Seat from "../seat";
import {rowColor} from "../helpers";


const GenerateSeats = (seatNumbers, {priceRanges}, row) => {

    return (
        <div className="row"
             style={{background: rowColor(priceRanges, row)}}>
            {
                seatNumbers.map((seatNumber) => {
                    return <Seat seatNumber={seatNumber} key={seatNumber} priceRanges={priceRanges} row={row}
                                />

                })
            }
        </div>
    )
}

export default GenerateSeats;

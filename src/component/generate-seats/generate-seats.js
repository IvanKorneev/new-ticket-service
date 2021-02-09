import React from "react";
import './generate-seats.sass'
import Seat from "../seat";


const GenerateSeats = (seatNumbers,{priceRanges},row, ) => {

    const rowColor = (arr, row) => {
        let obj;
        for (let i = 0; i < arr.length; i++) {
            let tmpRow = arr[i].rows.find((item) => {
                return +item === row;
            });
            if (tmpRow) {
                obj = arr[i];
                return obj.color;
            }
        }
    };
    return (
        <div className="row"
             style={{background: rowColor(priceRanges, row)}}>
            {
                seatNumbers.map((seatNumber) => {
                    return <Seat seatNumber={seatNumber} key={seatNumber}/>

                })
            }
        </div>
    )
}

export default GenerateSeats;

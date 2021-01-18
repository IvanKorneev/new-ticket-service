import React from "react";
import './generate-seats.sass'
import Seat from "../seat";

const GenerateSeats = (seatNumbers) => {
    return (
        <div className="row">
            {
                seatNumbers.map((seatNumber) => {
                    return <Seat seatNumber={seatNumber} key={seatNumber}/>
                })
            }
        </div>
    )
}
export default GenerateSeats
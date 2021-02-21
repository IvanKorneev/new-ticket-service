import React from "react";
import './seat.sass';

const Seat = ({seatNumber,row}) => {
    return (
        <div className='seat' onClick={()=>{
            console.log(seatNumber)
            console.log(row)
        }}>
            {seatNumber}
        </div>
    )
}
export default Seat

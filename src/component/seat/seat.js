import React from "react";
import './seat.sass';

const Seat = ({seatNumber}) => {
    return (
        <div className='seat'>
            {seatNumber}
        </div>
    )
}
export default Seat;

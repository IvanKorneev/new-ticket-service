import React from "react";
import './seat.sass';

const Seat = ({seatNumber, row, price, onAddedToCart}) => {
    if (onAddedToCart) {
        return (
            <div className='seat' onClick={() => onAddedToCart(seatNumber, row, price)}>
                {seatNumber}
            </div>
        )
    }
    return (
        <div className='seat'>
            {seatNumber}
        </div>
    )
}
export default Seat;

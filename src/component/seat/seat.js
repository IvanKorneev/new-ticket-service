import React from "react";
import './seat.sass';

const Seat = ({seatNumber, row, onAddedToCart, priceRanges}) => {
    if (onAddedToCart) {
        return (
            <div className='seat' onClick={() => onAddedToCart(seatNumber, row, priceRanges)}>
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

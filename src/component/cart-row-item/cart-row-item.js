import React from "react";

const CartRowItem = ({cartItem}) => {
    const {row, seatNumber, price} = cartItem
    return (
        <div>
            <span>{row}</span>
            <span>{seatNumber}</span>
            <span>{price}</span>

        </div>
    )
}
export default CartRowItem;
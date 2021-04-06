import React from "react";
import './cart-row-item.sass';

const CartRowItem = ({cartItem, onRemovedFromCart}) => {
    const {row, seatNumber, id, price} = cartItem;
    return (
        <div className='cart-row-item-container'>
            <span>{row}</span>
            <span>{seatNumber}</span>
            <i className="fas fa-times" onClick={() => onRemovedFromCart(id, price)}/>
        </div>
    )
}
export default CartRowItem;
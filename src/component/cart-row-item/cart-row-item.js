import React from "react";
import './cart-row-item.sass';

const CartRowItem = ({cartItem, onRemovedFromCart, id}) => {
    const {row, seatNumber} = cartItem;

    return (
        <div className='cart-row-item-container'>
            <span>{row}</span>
            <span>{seatNumber}</span>
            <i className="fas fa-times" onClick={() => onRemovedFromCart(id)}/>
        </div>
    )
}
export default CartRowItem;
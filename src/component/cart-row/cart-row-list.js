import React from "react";
import CartRowItem from "../cart-row-item";
import './cart-row-list..sass';

const CartRowList = ({cart, onRemovedFromCart}) => {

    return (
        <div className='cart-row-list-container'>
            <div className='cart-row-list'>
                <span>Row</span>
                <span>Place</span>
            </div>
            {cart.map((cartItem, index) => {
                return <CartRowItem key={index}
                                    cartItem={cartItem}
                                    onRemovedFromCart={onRemovedFromCart}
                                    id={cartItem.id}/>
            })}
        </div>
    )
}
export default CartRowList;
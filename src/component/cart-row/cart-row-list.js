import React from "react";
import CartRowItem from "../cart-row-item";

const CartRowList = ({cart}) => {
    return (
        <div>
            {cart.map((cartItem,index) => {
               return <CartRowItem key={index} cartItem={cartItem}/>
            })}
        </div>
    )
}
export default CartRowList;
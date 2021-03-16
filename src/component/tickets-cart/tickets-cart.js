import React from "react";
import './tickets-cart.sass'

const TicketsCart = ({totalTickets, totalPrice}) => {
    return (
        <div className='tickets-cart-container'>
            <span>{totalTickets} tickets</span>
            <span>&euro; {totalPrice}</span>
        </div>
    )
}
export default TicketsCart;
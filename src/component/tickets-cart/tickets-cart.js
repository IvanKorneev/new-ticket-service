import React from "react";
import './tickets-cart.sass'

const TicketsCart = ({totalTickets, totalPrice}) => {
    return (
        <div className='global-tickets-cart-container-title'>
            <span>{totalTickets} tickets</span>
            <span>&euro; {totalPrice}</span>
        </div>
    )
}
export default TicketsCart;
import React from "react";
import './tickets-cart.sass'

const TicketsCart = ({totalTickets,totalPrice}) => {
    return (
        <div>
            <p>{totalTickets}</p>
            <p>{totalPrice}</p>

        </div>
    )
}
export default TicketsCart;
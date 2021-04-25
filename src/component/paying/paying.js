import React from "react";
import './paying.sass'
import {getData} from "../helpers";

const Paying = ({event, totalPrice, totalTickets}) => {
    const {artist, eventName, eventStart} = event
    return (
        <section>
            <h1 className='global-title'>Paying</h1>
            <div className='paying'>
                <div className='global-tickets-page-title'>
                    <div className='tickets-page-artist'>
                        {artist}|
                    </div>
                    <div className='tickets-page-eventName'>
                        {eventName}|
                    </div>
                    <div className='tickets-page-eventStart'>
                        {getData(eventStart)}
                    </div>
                </div>
                <div className='global-tickets-cart-container-title'>
                    <span>{totalTickets} tickets</span>
                    <span>&euro; {totalPrice}</span>
                </div>
                <div className='paying-cards-icons'>
                    <i className="fab fa-cc-paypal"></i>
                    <i className="fab fa-cc-visa"></i>
                    <i className="fab fa-cc-amex"></i>
                    <i className="fab fa-cc-stripe"></i>
                    <i className="fab fa-bitcoin"></i>
                </div>
            </div>
        </section>
    )
}
export default Paying;
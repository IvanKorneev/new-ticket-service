import React from "react";
import './paying.sass'
import {getData} from "../helpers";

const Paying = ({event, totalPrice, totalTickets}) => {
    const {artist, eventName, eventStart} = event
    return (
        <section>
            <h1 className='global-title'>Paying</h1>
            <div className='tickets-page'>
                <div className='tickets-page-artist'>
                    {artist}|
                </div>
                <div className='tickets-page-eventName'>
                    {eventName}|
                </div>
                <div className='tickets-page-eventStart'>
                    {getData(eventStart)}
                </div>
                <div>
                    {totalPrice}
                    {totalTickets}
                </div>
            </div>
        </section>
    )
}
export default Paying;
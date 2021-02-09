import React from "react";
import './tickets-page.sass';
import {getData} from "../helpers";

const TicketsPage = ({eventInfo}) => {
    const {artist, eventName, eventStart} = eventInfo
    return (
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
        </div>
    )
}
export default TicketsPage;
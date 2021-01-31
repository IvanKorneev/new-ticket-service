import React from "react";
import './tickets-page.sass';
import {getData} from "../helpers";

const TicketsPage = ({eventInfo}) => {
    return (
        <div className='tickets-page'>
            <div className='tickets-page-artist'>
                {eventInfo.artist}
            </div>
            <div className='tickets-page-eventName'>
                {eventInfo.eventName}
            </div>
            <div className='tickets-page-eventStart'>
                {getData(eventInfo.eventStart)}
            </div>
        </div>
    )
}
export default TicketsPage;
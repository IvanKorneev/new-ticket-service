import React from "react";
import './event-item-page.sass'
import {getData} from "../helpers";


const EventItemPage = ({event}) => {
    const {eventName, artist, eventStart, description, ticketsAvailable, minPrice, maxPrice, images, eventId} = event;

    return (
        <div className='event-item-page'>
            <h1>Events</h1>
            <div className='event-item-page-container'>
                <div className='event-item-page'>
                    <img src={images} alt={artist}/>
                    <div className='events-item-line-page'></div>
                </div>
                <div className='event-item-description'>
                    <div className='event-item-info'>
                        <h3>{artist}</h3>
                        <p>{description}</p>
                    </div>
                    <div className='event-item-page-details'>
                        <p>Data : <span className='event-details'>{getData(eventStart)}</span></p>
                        <p>Tickets Available - <span className='event-details'>{ticketsAvailable}</span></p>
                        <p> Price range : <span className='event-details'>{minPrice} - {maxPrice}</span></p>
                    </div>
                    <div className='event-buy-tickets'>
                        Buy Tickets
                    </div>
                </div>
            </div>
        </div>
    )
};
export default EventItemPage
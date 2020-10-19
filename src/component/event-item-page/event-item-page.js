import React from "react";
import './event-item-page.sass'


const EventItemPage = ({event}) => {
    console.log(event);
    const {eventName, artist, eventStart, description, ticketsAvailable, minPrice, maxPrice, images, eventId} = event;

    return (
        <div className='event-item-page'>
            <h1>Events</h1>

            <div className='event-item-img'>
                <img src={images} alt={artist}/>
            </div>

            <div className='event-item-info'>
                <h3>{artist}</h3>
                <p>{description}</p>
            </div>
            <div className='event-item-page-details'>
                <span>Data{eventStart}</span>
                <p>Tickets Available{ticketsAvailable}</p>
                <p> Price range:{minPrice}-{maxPrice} </p>
                <div>Bay Tikets</div>

            </div>

        </div>
    )
};
export default EventItemPage
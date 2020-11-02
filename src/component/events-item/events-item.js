import React from "react";
import './events-item.sass';
import {getData} from "../helpers";
import {Link} from "react-router-dom";


const EventsItem = ({eventsPropsItem}) => {
    const {eventName, artist, eventStart, images, eventId} = eventsPropsItem;

    return (
        <div className='events-item'>
            <Link to={'/event/' + eventId}>
                <img src={images[0]} alt={artist}/>
            </Link>
            <div className='events-item-artist'>{artist}</div>
            <div className='events-item-event-name'>{eventName}</div>
            <div className='events-item-line'></div>
            <div className='events-item-event-date'>{getData(eventStart)}</div>
        </div>
    )
};
export default EventsItem;

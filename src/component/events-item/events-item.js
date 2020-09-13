import React from "react";
import './events-item.sass';
import {getData} from "../helpers";

const EventsItem = ({eventsPropsItem}) => {
    const {eventName, artist, eventStart, images} = eventsPropsItem;
    return (
        <div className='events-item'>
            <img src={images[0]} alt={artist}/>
            <div className='events-item-artist' >{artist}</div>
            <div className='events-item-event-name'>{eventName}</div>
            <div className='events-item-line'></div>
            <div className='events-item-event-date'>{getData(eventStart)}</div>
        </div>
    )
};
export default EventsItem;
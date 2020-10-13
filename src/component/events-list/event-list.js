import EventsItem from "../events-item";
import React from "react";
import './events-list.sass'

const EventsList = ({events}) => {
    return (
        <div className='events-list'>
            {
                events.map(eventsItem => {
                    return <EventsItem key={eventsItem.eventId} eventsPropsItem={eventsItem}/>
                })
            };
        </div>
    )
};
export default EventsList
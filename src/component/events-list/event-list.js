import EventsItem from "../events-item";
import React from "react";
import './events-list.sass'

const EventsList = ({events}) => {
    return (
        <section className='events-container'>
            <h1 className='global-title'>Events</h1>
            <div className='events-list'>
                {
                    events.map(eventsItem => {
                        return <EventsItem key={eventsItem.eventId} eventsPropsItem={eventsItem}/>
                    })}
            </div>
        </section>
    )
};
export default EventsList;
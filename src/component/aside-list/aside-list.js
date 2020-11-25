import Calendar from "react-calendar";
import AsideItem from "../aside-items";
import React from "react";
import './aside-list.sass'


const AsideList = ({asideEvents}) => {
    return (
        <section className='aside'>
            <div className='aside-calendar'>
                <Calendar/>
            </div>
            <div className='aside-upcoming-events'>
                <h2>Upcoming Events</h2>
                {
                    asideEvents.map(asideEvent => {
                        return (
                                <AsideItem key={asideEvent.eventId} eventsPropsItem={asideEvent}/>
                        )
                    })
                };
            </div>
        </section>
    )
};
export default AsideList
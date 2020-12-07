import React from "react";
import './main.sass';
import EventsListContainer from "../../container-component/events-list-container/events-list-container";


const Main = () => {
    return (
        <section className='main-events'>
            <EventsListContainer/>
        </section>
    );
};
export default Main;
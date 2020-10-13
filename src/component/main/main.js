import React,{Component} from "react";
import './main.sass';
import EventsList from "../../container-component/events-list-container/events-list";

export default class Main extends Component{
    render() {
        return (
            <section className='main-events'>
                <h2>Events</h2>
                   <EventsList/>
            </section>
        );
    }
};
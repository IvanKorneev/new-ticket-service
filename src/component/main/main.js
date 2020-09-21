import React,{Component} from "react";
import './main.sass';
import EventsList from "../events-list/events-list";

export default class Main extends Component{
    render() {
        return (
            <section className='main-events'>
                <h2>Events</h2>
               <div className='main-events-items'>
                   <EventsList/>
               </div>
            </section>
        );
    }
};
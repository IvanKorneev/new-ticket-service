import React,{Component} from "react";
import './main.css';
import EventsList from "../events-list/events-list";

export default class Main extends Component{
    render() {
        return (
            <section className='main-events'>
                <h1>Events</h1>
               <div className='main-events-items'>
                   <EventsList/>
               </div>
            </section>
        );
    }
};
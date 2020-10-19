import React,{Component} from "react";
import './main.sass';
import EventsListContainer from "../../container-component/events-list-container/events-list-container";


export default class Main extends Component{
    render() {
        return (
            <section className='main-events'>
                   <EventsListContainer/>
            </section>
        );
    }
};
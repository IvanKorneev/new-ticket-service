import React,{Component} from "react";
import './main.css';

export default class Main extends Component{
    render() {
        return (
            <section className='main-events'>
                <h1>Events</h1>
                <div className='events'></div>
                <div className='events'></div>
                <div className='events'></div>
                <div className='events'></div>
            </section>
        );
    }

};
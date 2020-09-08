import React, {Component} from "react";
import './eside.css'
import Calendar from 'react-calendar';

export default class Aside extends Component {
    render() {
        return (
            <section className='aside'>

                <div className='aside-calendar'>
                    <Calendar/>
                </div>
                <div className='aside-events'>
                    <h4>Upcoming Events</h4>
                    <div className='upcoming-events'></div>
                    <div className='upcoming-events'></div>
                    <div className='upcoming-events'></div>

                </div>

            </section>
        )
    }
}
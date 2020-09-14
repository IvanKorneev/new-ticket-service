import React, {Component} from "react";
import './eside.css'
import Calendar from 'react-calendar';
import {connect} from 'react-redux'
import WithTicketsService from "../../hoc";
import {asideLoaded} from "../../actions";
import AsideItem from "../aside-items";


class AsideList extends Component {

    componentDidMount() {
        const {TicketService} = this.props;
        TicketService.getUpcomingEvents().then((data) => {
            this.props.asideLoaded(data)
        });
    };

    render() {
        const {asideEvents} = this.props;
        console.log(asideEvents);
        return (
            <section className='aside'>
                <div className='aside-calendar'>
                    <Calendar/>
                </div>
                <div className='aside-events'>
                    <h4>Upcoming Events</h4>
                    {
                        asideEvents.map((asideEvents) => {
                            return <AsideItem key={asideEvents.eventId} eventsPropsItem={asideEvents}/>
                        })
                    }
                </div>
            </section>
        )
    };
}

const mapStateToProps = (state) => {

    return {
        asideEvents: state.asideState
    }
};
const mapDispatchToProps = {
    asideLoaded
};

export default WithTicketsService()(
    connect(mapStateToProps, mapDispatchToProps)(AsideList)
);


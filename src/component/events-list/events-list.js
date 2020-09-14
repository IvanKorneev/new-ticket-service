import React, {Component} from "react";
import EventsItem from "../events-item";
import {connect} from 'react-redux'
import WithTicketsService from "../../hoc";
import {eventLoaded} from "../../actions";

class EventsList extends Component {

    componentDidMount() {
        const {TicketService} = this.props;
        TicketService.getEvents().then((data) => {
            this.props.eventLoaded(data)
        })
    }

    render() {
        const {events} = this.props;
        console.log(events);
        return (
            <div>
                {
                    events.map(eventsItem => {
                        return <EventsItem key={eventsItem.eventId} eventsPropsItem={eventsItem}/>
                    })
                }
            </div>
        )
    };
}

const mapStateToProps = (state) => {

    return {
        events: state.eventsState
    }
};
const mapDispatchToProps = {
    eventLoaded
};

export default WithTicketsService()(
    connect(mapStateToProps, mapDispatchToProps)(EventsList)
);


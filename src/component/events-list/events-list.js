import React, {Component} from "react";
import EventsItem from "../events-item";
import {connect} from 'react-redux'
import WithTicketsService from "../../hoc";
import {eventLoaded, eventsRequested, eventsError} from "../../actions";
import Spinner from "../spinner";
import Error from "../error";

class EventsList extends Component {

    componentDidMount() {
        this.props.eventsRequested();
        const {TicketService, eventsError, eventLoaded} = this.props;
        TicketService.getEvents()
            .then((data) => eventLoaded(data))
            .catch((error) => eventsError(error))
    }

    render() {
        const {events, loading, error} = this.props;
        console.log();
        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <Error/>
        }
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
        events: state.eventsState,
        loading: state.loading,
        error: state.error
    }
};
const mapDispatchToProps = {
    eventLoaded,
    eventsRequested,
    eventsError
};

export default WithTicketsService()(
    connect(mapStateToProps, mapDispatchToProps)(EventsList)
);


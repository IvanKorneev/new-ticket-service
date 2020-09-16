import React, {Component} from "react";
import EventsItem from "../events-item";
import {connect} from 'react-redux'
import WithTicketsService from "../../hoc";
import {fetchEvents} from "../../actions";
import Spinner from "../spinner";
import Error from "../error";

class EventsList extends Component {

    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
        const {events, loading, error} = this.props;
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
const mapDispatchToProps = (dispatch, ownProps) => {
    const {TicketService} = ownProps;
    return {
        fetchEvents: fetchEvents(TicketService,dispatch)
    };
};

export default WithTicketsService()(
    connect(mapStateToProps, mapDispatchToProps)(EventsList)
);


import React, {Component} from "react";
import {connect} from 'react-redux'
import WithTicketsService from "../../hoc";
import {fetchEvents} from "../../actions";
import Spinner from "../../component/spinner";
import Error from "../../component/error";
import './events-list.sass'
import EventsList from "../../component/events-list";
import Pagination from "../../component/pagination";


class EventsListContainer extends Component {

    componentDidMount() {
        this.props.fetchEvents();
    };

    render() {

        const {events, loading, error, pageSize, totalEventsCount, currentPage} = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <Error/>
        }
        return (
            <div>
                <EventsList events={events}/>
                <Pagination pageSize={pageSize} totalEventsCount={totalEventsCount} currentPage={currentPage} name='name'  />
            </div>

        )
    };
}

const mapStateToProps = (state) => {

    return {
        events: state.eventsState,
        loading: state.loading,
        error: state.error,
        pageSize: state.pageSize,
        totalEventsCount: state.totalEventsCount,
        currentPage: state.currentPage

    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    const {TicketService} = ownProps;
    return {
        fetchEvents: fetchEvents(TicketService, dispatch)
    };
};

export default WithTicketsService()(
    connect(mapStateToProps, mapDispatchToProps)(EventsListContainer)
);


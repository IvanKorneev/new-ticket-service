import React, {Component} from "react";
import {connect} from 'react-redux'
import WithTicketsService from "../../hoc";
import {eventLoaded, eventsError, eventsRequested, setEventsPages} from "../../actions";
import Spinner from "../../component/spinner";
import Error from "../../component/error";
import './events-list.sass'
import EventsList from "../../component/events-list";
import Pagination from "../../component/pagination";


class EventsListContainer extends Component {
    componentDidMount() {
        const {TicketService, eventLoaded, eventsError, eventsRequested, currentPage, pageSize} = this.props;
        eventsRequested();
        TicketService.getEvents('', currentPage, pageSize)
            .then((data) => eventLoaded(data))
            .catch((error) => eventsError(error))
        // this.onPageChanged(currentPage);
    };

    onPageChanged = (pageNumber) => {
        this.props.setEventsPages(pageNumber);
        const {TicketService, eventLoaded, eventsError, eventsRequested, pageSize} = this.props;
        eventsRequested();
        TicketService.getEvents('', pageNumber, pageSize)
            .then((data) => eventLoaded(data))
            .catch((error) => eventsError(error))
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
                <Pagination pageSize={pageSize} totalEventsCount={totalEventsCount}
                            currentPage={currentPage} onPageChanged={this.onPageChanged} />

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

const mapDispatchToProps = {
    eventLoaded,
    eventsError,
    eventsRequested,
    setEventsPages
};

export default WithTicketsService()(
    connect(mapStateToProps, mapDispatchToProps)(EventsListContainer)
);


import React, {Component} from "react";
import {connect} from 'react-redux'
import WithTicketsService from "../../hoc";
import {eventLoaded, eventsError, eventsRequested, setEventsPages} from "../../actions";
import Spinner from "../../component/spinner";
import Error from "../../component/error";
import './events-list-container.sass'
import EventsList from "../../component/events-list";
import Pagination from "../../component/pagination";
import {getEvents} from "../../api/api";


class EventsListContainer extends Component {
    componentDidMount() {
        const { eventLoaded, eventsError, eventsRequested, currentPage, pageSize} = this.props;
        
        eventsRequested();
        getEvents('', currentPage, pageSize)
            .then((response) => eventLoaded(response.data.event))
            .catch((error) => eventsError(error));
        // getEvents('', currentPage, pageSize).then(response => console.log("response", response))
    };

    onPageChanged = (pageNumber) => {
        this.props.setEventsPages(pageNumber);
        const {TicketService, eventLoaded, eventsError, pageSize} = this.props;


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


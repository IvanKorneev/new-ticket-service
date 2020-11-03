import React, {Component} from "react";
import {connect} from 'react-redux'
import {eventLoaded, eventsError, eventsRequested, setEventsPages} from "../../store/actions";
import Spinner from "../../component/spinner";
import Error from "../../component/error";
import './events-list-container.sass'
import EventsList from "../../component/events-list";
import Pagination from "../../component/pagination";
import {getEvents} from "../../api/api";


class EventsListContainer extends Component {
    componentDidMount() {
        const {eventLoaded, eventsError, eventsRequested, currentPage, pageSize} = this.props;
        eventsRequested();
        getEvents('', currentPage, pageSize)
            .then((response) => eventLoaded(response.data.events))
            .catch((error) => eventsError(error));

    };

    onPageChanged = (pageNumber) => {
        this.props.setEventsPages(pageNumber);
        const {eventLoaded, eventsError, pageSize} = this.props;
        getEvents('', pageNumber, pageSize)
            .then((response) => eventLoaded(response.data.events))
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
                            currentPage={currentPage} onPageChanged={this.onPageChanged}/>
            </div>

        )
    };
}

const mapStateToProps = (state) => {

    return {
        events: state.events.eventsState,
        loading: state.events.loading,
        error: state.events.error,
        pageSize: state.events.pageSize,
        totalEventsCount: state.events.totalEventsCount,
        currentPage: state.events.currentPage

    }
};

const mapDispatchToProps = {
    eventLoaded,
    eventsError,
    eventsRequested,
    setEventsPages
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsListContainer)



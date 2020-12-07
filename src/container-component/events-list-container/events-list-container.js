import React, {Component} from "react";
import {connect} from 'react-redux'
import {eventsRequested, fetchEvents, setEventsPages} from "../../store/actions";
import Spinner from "../../component/spinner";
import Error from "../../component/error";
import './events-list-container.sass'
import EventsList from "../../component/events-list";
import Pagination from "../../component/pagination";
import {
    getCurrentPage,
    getError,
    getEvents,
    getLoading,
    getPageSize,
    getTotalEventsCount
} from "../../store/selectors/events-list-selectors";


class EventsListContainer extends Component {
    componentDidMount() {
        const {eventsRequested, currentPage, pageSize} = this.props;
        eventsRequested();
        this.props.fetchEvents(currentPage, pageSize);


    };

    onPageChanged = (pageNumber) => {
        this.props.setEventsPages(pageNumber);
        const {pageSize} = this.props;
        this.props.fetchEvents(pageNumber, pageSize);

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
        events: getEvents(state),
        loading: getLoading(state),
        error:getError(state),
        pageSize: getPageSize(state),
        totalEventsCount: getTotalEventsCount(state),
        currentPage: getCurrentPage(state)

    }
};

const mapDispatchToProps = {
    eventsRequested,
    setEventsPages,
    fetchEvents
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsListContainer);



import React, {Component} from "react";
import {connect} from 'react-redux'
import {eventsRequested, fetchEvents, setEventsPages} from "../../store/actions";
import Spinner from "../../component/spinner";
import Error from "../../component/error";
import './events-list-container.sass'
import EventsList from "../../component/events-list";
import Pagination from "../../component/pagination";


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
        events: state.events.eventsState,
        loading: state.events.loading,
        error: state.events.error,
        pageSize: state.events.pageSize,
        totalEventsCount: state.events.totalEventsCount,
        currentPage: state.events.currentPage

    }
};

const mapDispatchToProps = {
    eventsRequested,
    setEventsPages,
    fetchEvents
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsListContainer)



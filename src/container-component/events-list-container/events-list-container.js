import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {loadingIndicator, fetchEvents, setEventsPages} from "../../store/actions";
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


const EventsListContainer = ({events, loading, error, pageSize,setEventsPages, totalEventsCount, currentPage, loadingIndicator, fetchEvents}) => {

    useEffect(() => {
        loadingIndicator();
        fetchEvents(currentPage, pageSize)
    },[currentPage,fetchEvents,loadingIndicator,pageSize]);

    const onPageChanged = (pageNumber) => {
        setEventsPages(pageNumber);
        fetchEvents(pageNumber, pageSize);
    };

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
                        currentPage={currentPage} onPageChanged={onPageChanged}/>
        </div>

    )
};


const mapStateToProps = (state) => {

    return {
        events: getEvents(state),
        loading: getLoading(state),
        error: getError(state),
        pageSize: getPageSize(state),
        totalEventsCount: getTotalEventsCount(state),
        currentPage: getCurrentPage(state)

    }
};

const mapDispatchToProps = {
    loadingIndicator,
    setEventsPages,
    fetchEvents
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsListContainer);



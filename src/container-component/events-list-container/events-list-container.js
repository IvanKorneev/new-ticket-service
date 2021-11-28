import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
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


const EventsListContainer = () => {

    const events = useSelector(getEvents);
    const loading = useSelector(getLoading);
    const error = useSelector(getError);
    const pageSize = useSelector(getPageSize);
    const totalEventsCount = useSelector(getTotalEventsCount);
    const currentPage = useSelector(getCurrentPage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadingIndicator());
        dispatch(fetchEvents(currentPage, pageSize));
    }, [currentPage, fetchEvents, loadingIndicator, pageSize]);

    const onPageChanged = (pageNumber) => {
        dispatch(setEventsPages(pageNumber));
        dispatch(fetchEvents(pageNumber, pageSize));
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

export default EventsListContainer;



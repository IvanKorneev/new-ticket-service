import React, {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import './event-page-container.sass'

import EventItemPage from "../../component/event-item-page";
import {fetchEventInfo} from "../../store/actions";
import {getEvent} from "../../store/selectors/event-page-selectors";



const EventPageContainer = ({ match}) => {
    const eventId = match.params.eventId;

    const event = useSelector(getEvent);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEventInfo(eventId))
    },[eventId,fetchEventInfo]);

    return (
        <section className='event-item-page-container'>
            <EventItemPage event={event}/>
        </section>
    );
};

export default EventPageContainer;

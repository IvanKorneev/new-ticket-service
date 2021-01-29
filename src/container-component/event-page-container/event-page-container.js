import React, {useEffect} from "react";
import './event-page-container.sass'
import {connect} from "react-redux";
import EventItemPage from "../../component/event-item-page";
import {fetchEventInfo} from "../../store/actions";
import {getEvent} from "../../store/selectors/event-page-selectors";


const EventPageContainer = ({event, match, fetchEventInfo}) => {
    const eventId = match.params.eventId;
    useEffect(() => {
        fetchEventInfo(eventId)
    },[eventId,fetchEventInfo]);
    // console.log(event)
    return (
        <section className='event-item-page-container'>
            <EventItemPage event={event}/>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        event: getEvent(state)
    }
};
const mapDispatchToProps = {
    fetchEventInfo
};

export default (connect(mapStateToProps, mapDispatchToProps)(EventPageContainer));

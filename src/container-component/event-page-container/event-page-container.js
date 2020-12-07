import React, {Component} from "react";
import './event-page-container.sass'
import {connect} from "react-redux";
import EventItemPage from "../../component/event-item-page";
import {fetchEventInfo} from "../../store/actions";



class EventPageContainer extends Component {

    componentDidMount() {
        const eventId = this.props.match.params.eventId;
        this.props.fetchEventInfo(eventId)
    }

    render() {
        const {event} = this.props;

        return (
            <section className='event-item-page-container'>
                <EventItemPage event={event}/>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.eventPage.event,
    }
};
const mapDispatchToProps = {
    fetchEventInfo
};

export default (connect(mapStateToProps, mapDispatchToProps)(EventPageContainer));
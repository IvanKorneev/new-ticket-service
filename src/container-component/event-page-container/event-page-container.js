import React, {Component} from "react";
import './event-page-container.sass'
import {connect} from "react-redux";
import EventItemPage from "../../component/event-item-page";
import {eventPageLoaded} from "../../store/actions";
import {withRouter} from "react-router-dom";
import {getEventInfo} from "../../api/api";

class EventPageContainer extends Component {

    componentDidMount() {
        const eventId = this.props.match.params.eventId;
        const {eventPageLoaded} = this.props;
        getEventInfo(eventId).then((response) => eventPageLoaded(response.data))
    }

    render() {
        const {event} = this.props;

        return (
            <div>
                <EventItemPage event={event}/>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.event,

    }
};
const mapDispatchToProps = {
    eventPageLoaded
};

export default withRouter((
    connect(mapStateToProps, mapDispatchToProps)(EventPageContainer)))
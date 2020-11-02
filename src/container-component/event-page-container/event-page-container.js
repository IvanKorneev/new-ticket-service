import React, {Component} from "react";
import './event-page-container.sass'
import WithTicketsService from "../../hoc";
import {connect} from "react-redux";
import EventItemPage from "../../component/event-item-page";
import {eventPageLoaded} from "../../actions";
import {withRouter} from "react-router-dom";

class EventPageContainer extends Component {

    componentDidMount() {
        const eventId = this.props.match.params.eventId;
        const {TicketService, eventPageLoaded} = this.props;
        TicketService.getEventInfo(eventId).then((data) => {
            eventPageLoaded(data)
        })

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
        event:state.event,

    }
};
const mapDispatchToProps = {
    eventPageLoaded
};

export default withRouter(WithTicketsService()(
    connect(mapStateToProps, mapDispatchToProps)(EventPageContainer)))
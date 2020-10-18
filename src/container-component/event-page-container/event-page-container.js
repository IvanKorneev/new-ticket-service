import React, {Component} from "react";
import './event-page-container.sass'
import WithTicketsService from "../../hoc";
import {connect} from "react-redux";
import EventItemPage from "../../component/event-item-page";

class EventPageContainer extends Component {
    render() {
        return (
            <div>
                <EventItemPage/>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {}
};
const mapDispatchToProps={

};
export default WithTicketsService()
(connect(mapStateToProps, mapDispatchToProps)(EventPageContainer));
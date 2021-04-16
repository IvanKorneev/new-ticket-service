import React from "react";
import {connect} from "react-redux";
import './paying-container.sass'
import Paying from "../../component/paying";
import {getEvent} from "../../store/selectors/event-page-selectors";
import {getTotalPrice} from "../../store/selectors/total-price";
import {getTotalTickets} from "../../store/selectors/total-tickets";

const PayingContainer = ({event, totalPrice, totalTickets}) => {
    return (
        <div>
            <Paying event={event} totalPrice={totalPrice} totalTickets={totalTickets}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        event: getEvent(state),
        totalPrice: getTotalPrice(state),
        totalTickets: getTotalTickets(state)
    }
}
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PayingContainer);
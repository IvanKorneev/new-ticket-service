import React from "react";
import {useSelector} from "react-redux";
import './paying-container.sass'
import Paying from "../../component/paying";
import {getEvent} from "../../store/selectors/event-page-selectors";
import {getTotalPrice} from "../../store/selectors/total-price";
import {getTotalTickets} from "../../store/selectors/total-tickets";

const PayingContainer = () => {
    const event = useSelector(getEvent);
    const totalPrice = useSelector(getTotalPrice);
    const totalTickets = useSelector(getTotalTickets);
    return (
        <Paying event={event} totalPrice={totalPrice} totalTickets={totalTickets}/>
    )
}


export default PayingContainer;
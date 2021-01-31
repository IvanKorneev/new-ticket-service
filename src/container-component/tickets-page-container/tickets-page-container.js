import React from "react";
import './tickets-page-container.sass';
import {connect} from "react-redux";
import {getEvent} from "../../store/selectors/event-page-selectors";
import TicketsPage from "../../component/tickets-page";
import PriceRange from "../../component/price-range";

const TicketPageContainer = ({event}) => {

    return (
        <section>
            <div> <h1>Tickets</h1> </div>
            <TicketsPage eventInfo={event}/>
            <PriceRange/>
        </section>
    )
}
const mapStateToProps = (state) => {
    return {
        event: getEvent(state)
    }
};
const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(TicketPageContainer);
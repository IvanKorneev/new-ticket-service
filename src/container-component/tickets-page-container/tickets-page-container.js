import React,{useEffect} from "react";
import './tickets-page-container.sass';
import {connect} from "react-redux";
import {getEvent} from "../../store/selectors/event-page-selectors";
import TicketsPage from "../../component/tickets-page";
import PriceRange from "../../component/price-range";
import {fetchGetHallStructureByEventId} from "../../store/actions";


const TicketPageContainer = ({event,fetchGetHallStructureByEventId,priceRanges}) => {
    useEffect(() => {
        fetchGetHallStructureByEventId(event.eventId)
    }, [fetchGetHallStructureByEventId,event.eventId])


    return (
        <section>
            <div><h1>Tickets</h1></div>
            <TicketsPage eventInfo={event}/>
            <PriceRange priceRanges={priceRanges}/>
        </section>
    )
}
const mapStateToProps = (state) => {
    return {
        event: getEvent(state),
        priceRanges:state.ticketsPrice.priceRanges
    }
};
const mapDispatchToProps = {
    fetchGetHallStructureByEventId
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketPageContainer);
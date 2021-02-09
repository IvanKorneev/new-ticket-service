import React, {useEffect} from "react";
import './tickets-page-container.sass';
import {connect} from "react-redux";
import {getEvent} from "../../store/selectors/event-page-selectors";
import TicketsPage from "../../component/tickets-page";
import PriceRange from "../../component/price-range";
import {fetchGetHallStructureByEventId} from "../../store/actions";
import {getPriceRange} from "../../store/selectors/price-range";
import TicketsHallSchemes from "../../component/tikets-hall-chemes";


const TicketPageContainer = ({event, fetchGetHallStructureByEventId, priceRanges}) => {
    const {eventId, hall} = event
    useEffect(() => {
        fetchGetHallStructureByEventId(eventId)
    }, [fetchGetHallStructureByEventId, eventId])


    return (
        <section className='tickets-page-container'>
            <div><h1>Tickets</h1></div>
            <TicketsPage eventInfo={event}/>
            <div className='tickets-page-wrapper'>
                <div className='schemes-container'>
                    <TicketsHallSchemes eventHall={hall} priceRanges={priceRanges}/>
                </div>
                <PriceRange priceRanges={priceRanges}/>
            </div>
        </section>
    )
}
const mapStateToProps = (state) => {
    return {
        event: getEvent(state),
        priceRanges: getPriceRange(state)
    }
};
const mapDispatchToProps = {
    fetchGetHallStructureByEventId
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketPageContainer);
import React, {useEffect} from "react";
import './tickets-page-container.sass';
import {connect} from "react-redux";
import {getEvent} from "../../store/selectors/event-page-selectors";
import TicketsPage from "../../component/tickets-page";
import PriceRange from "../../component/price-range";
import {fetchGetHallStructureByEventId, priceIndicator} from "../../store/actions";
import {getPriceRange} from "../../store/selectors/price-range";
import TicketsHallSchemes from "../../component/tikets-hall-chemes";
import {getLoading} from "../../store/selectors/login-page-selectors";
import Spinner from "../../component/spinner";


const TicketPageContainer = ({event, fetchGetHallStructureByEventId, priceRanges,priceIndicator,loading}) => {
    const {eventId, hall} = event;
    priceIndicator()
    useEffect(() => {
        fetchGetHallStructureByEventId(eventId)
    }, [fetchGetHallStructureByEventId, eventId])

    if (loading) {
        return <Spinner/>
    }

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
        priceRanges: getPriceRange(state),
        loading: getLoading(state)
    }
};
const mapDispatchToProps = {
    fetchGetHallStructureByEventId,
    priceIndicator
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketPageContainer);
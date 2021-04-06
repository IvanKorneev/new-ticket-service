import React, {useEffect} from "react";
import './tickets-page-container.sass';
import {connect} from "react-redux";
import {getEvent} from "../../store/selectors/event-page-selectors";
import TicketsPage from "../../component/tickets-page";
import PriceRange from "../../component/price-range";
import {
    addToCart,
    fetchEventInfo,
    fetchGetHallStructureByEventId,
    priceIndicator,
    removedFromCart
} from "../../store/actions";
import {getPriceRange} from "../../store/selectors/price-range";
import TicketsHallSchemes from "../../component/tikets-hall-chemes";
import {getLoading} from "../../store/selectors/login-page-selectors";
import Spinner from "../../component/spinner";
import TicketsCart from "../../component/tickets-cart";
import {getTotalPrice} from "../../store/selectors/total-price";
import {getTotalTickets} from "../../store/selectors/total-tickets";
import {getCartItems} from "../../store/selectors/cart-Items";
import CartRowList from "../../component/cart-row";
import {Link} from "react-router-dom";

const TicketPageContainer = ({
                                 event,
                                 fetchGetHallStructureByEventId,
                                 priceRanges,
                                 loading,
                                 totalPrice,
                                 totalTickets,
                                 getAddToCart,
                                 cartItems,
                                 match,
                                 fetchEventInfo,
                                 getRemovedFromCart,
                             }) => {

    const onAddedToCart = (seatNumber, row, price, id) => {
        getAddToCart(seatNumber, row, price, id)

    }
    const onRemovedFromCart = (id, price) => {
        getRemovedFromCart(id, price)
    }

    const priceRangesRender = (priceRanges) => {
        return priceRanges.map(({color, price}, index) => {
            let style = {background: color};
            return (
                <div key={index} style={style} className='price-ranges'>
                    <span className='price-ranges-items'>&euro; {price}</span>
                </div>
            )
        })
    };

    const {hall} = event;
    const eventId = match.params.eventId;


    useEffect(() => {
        fetchGetHallStructureByEventId(eventId)
        fetchEventInfo(eventId)
    }, [eventId, fetchGetHallStructureByEventId, fetchEventInfo])

    if (loading) {
        return <Spinner/>
    }

    return (
        <section className='tickets-page-container'>
            <h1>Tickets</h1>
            <TicketsPage eventInfo={event}/>
            <div className='tickets-page-wrapper'>
                <div className='schemes-container'>
                    <TicketsHallSchemes eventHall={hall} priceRanges={priceRanges} onAddedToCart={onAddedToCart}/>
                </div>
                <PriceRange priceRanges={priceRanges} priceRangesRender={priceRangesRender}/>
            </div>
            <div>
                <CartRowList cart={cartItems} onRemovedFromCart={onRemovedFromCart}/>
            </div>
            <div className='tickets-page-wrapper'>
                <TicketsCart totalPrice={totalPrice} totalTickets={totalTickets}/>
            </div>
            <Link to={'/shopping-cart'}>
                <button className='button-login-page'>TO THE CART</button>
            </Link>
        </section>
    )
}
const mapStateToProps = (state) => {
    return {
        event: getEvent(state),
        priceRanges: getPriceRange(state),
        loading: getLoading(state),
        totalPrice: getTotalPrice(state),
        totalTickets: getTotalTickets(state),
        cartItems: getCartItems(state),
    }
};
const mapDispatchToProps = {
    fetchGetHallStructureByEventId,
    priceIndicator,
    fetchEventInfo,
    getAddToCart: (seatNumber, row, price, id) => addToCart(seatNumber, row, price, id),
    getRemovedFromCart: (id, price) => removedFromCart(id, price)
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketPageContainer);
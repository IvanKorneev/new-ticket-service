import React, {useEffect} from "react";
import './tickets-page-container.sass';
import {connect} from "react-redux";
import {getEvent} from "../../store/selectors/event-page-selectors";
import TicketsPage from "../../component/tickets-page";
import PriceRange from "../../component/price-range";
import {addToCart, fetchGetHallStructureByEventId, priceIndicator} from "../../store/actions";
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
                                 priceIndicator,
                                 loading,
                                 totalPrice,
                                 totalTickets,
                                 getAddToCart,
                                 cartItems
                             }) => {

    const onAddedToCart = (seatNumber, row, price, nam) => {
        getAddToCart(seatNumber, row, price, nam)
    }
    const onRemovedFromCart = (id) => {
        console.log(id)
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
          <Link to={'/shopping-cart'}><button className='button-login-page'>TO THE CART</button></Link>
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
        cartItems: getCartItems(state)
    }
};
const mapDispatchToProps = {
    fetchGetHallStructureByEventId,
    priceIndicator,
    getAddToCart: (seatNumber, row, price, nam) => addToCart(seatNumber, row, price, nam)
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketPageContainer);
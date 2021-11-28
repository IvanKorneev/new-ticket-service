import React, {useEffect} from "react";
import './tickets-page-container.sass';
import {useDispatch, useSelector} from "react-redux";
import {getEvent} from "../../store/selectors/event-page-selectors";
import TicketsPage from "../../component/tickets-page";
import PriceRange from "../../component/price-range";
import {
    addToCart,
    fetchEventInfo,
    fetchGetHallStructureByEventId,

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

const TicketPageContainer = ({match}) => {
    const event = useSelector(getEvent);
    const priceRanges = useSelector(getPriceRange);
    const loading = useSelector(getLoading);
    const totalPrice = useSelector(getTotalPrice);
    const totalTickets = useSelector(getTotalTickets);
    const cartItems = useSelector(getCartItems);
    const dispatch = useDispatch();


    const onAddedToCart = (seatNumber, row, price, id) => {
        dispatch(addToCart(seatNumber, row, price, id))

    }
    const onRemovedFromCart = (id, price) => {
        dispatch(removedFromCart(id, price));
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
        dispatch(fetchGetHallStructureByEventId(eventId));
        dispatch(fetchEventInfo(eventId));
    }, [eventId, fetchGetHallStructureByEventId, fetchEventInfo])

    if (loading) {
        return <Spinner/>
    }

    return (
        <section className='tickets-page-container'>
            <h1 className='global-title'>Tickets</h1>
            <TicketsPage eventInfo={event}/>
            <div className='tickets-page-info'>
                <div className='tickets-page-wrapper'>
                    <div className='schemes-container'>
                        <TicketsHallSchemes eventHall={hall} priceRanges={priceRanges} onAddedToCart={onAddedToCart}/>
                    </div>
                </div>
                <div className='tickets-cart-info'>
                    <PriceRange priceRanges={priceRanges} priceRangesRender={priceRangesRender}/>
                    <div className='tickets-cart-wrapper'>
                        <CartRowList cart={cartItems} onRemovedFromCart={onRemovedFromCart}/>
                        <TicketsCart totalPrice={totalPrice} totalTickets={totalTickets}/>
                        <Link to={'/shopping-cart'}>
                            <button className='button-login-page'>TO THE CART</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default TicketPageContainer;
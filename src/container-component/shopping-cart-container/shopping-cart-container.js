import React from "react";
import './shopping-cart-container.sass';
import {connect} from "react-redux";
import CartRowList from "../../component/cart-row";
import {getCartItems} from "../../store/selectors/cart-Items";
import {getEvent} from "../../store/selectors/event-page-selectors";
import TicketsPage from "../../component/tickets-page";
import TicketsCart from "../../component/tickets-cart";
import {getTotalPrice} from "../../store/selectors/total-price";
import {getTotalTickets} from "../../store/selectors/total-tickets";

const ShoppingCartContainer = ({cartItems, event,totalPrice,totalTickets}) => {
    return (
        <section className='shopping-cart-container'>
            <h1>SOPPING CART</h1>
            <div className='shopping-cart-container-info'>
                <p>The tickets shown here hov now been reserved for you for 10 minutes</p>
                <p>Delete Selected</p>
            </div>
            <div className='cart-row-list-wrapper'>
                <TicketsPage eventInfo={event}/>
                <CartRowList cart={cartItems}/>
                <TicketsCart totalPrice={totalPrice} totalTickets={totalTickets}/>
            </div>
        </section>
    )
}
const mapStateToProps = (state) => {
    return {
        event: getEvent(state),
        cartItems: getCartItems(state),
        totalPrice: getTotalPrice(state),
        totalTickets: getTotalTickets(state)
    }
};
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer);
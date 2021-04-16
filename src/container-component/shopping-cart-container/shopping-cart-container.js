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
import {removedFromCart} from "../../store/actions";
import Main from "../../component/main";
import {Link} from "react-router-dom";

const ShoppingCartContainer = ({getRemovedFromCart, event, cartItems, totalPrice, totalTickets}) => {
    if (totalPrice === null) {
        return <Main/>
    }
    const onRemovedFromCart = (id, price) => {
        getRemovedFromCart(id, price)
    }
    return (
        <section className='shopping-cart-container'>
            <h1>SOPPING CART</h1>
            <div className='shopping-cart-container-info'>
                <p>The tickets shown here hov now been reserved for you for 10 minutes</p>
            </div>
            <div className='cart-row-list-wrapper'>
                <div className='link-delete'>
                    <p>Delete Selected</p>
                </div>
                <TicketsPage eventInfo={event}/>
                <CartRowList cart={cartItems} onRemovedFromCart={onRemovedFromCart}/>
                <TicketsCart totalPrice={totalPrice} totalTickets={totalTickets}/>
                <div className='shopping-cart-footer'>
                    <button className='shopping-cart-button'>PAY</button>
                    <div className='shopping-cart-footer-checkbox'>
                        <input type='checkbox'/>
                        <p>I have read the <Link to='/conditions'><span>Terms and Conditions</span></Link> and fully agree with them</p>
                    </div>
                </div>
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
const mapDispatchToProps = {
    getRemovedFromCart: (id, price) => removedFromCart(id, price)
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer);
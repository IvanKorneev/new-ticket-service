import React from "react";
import './shopping-cart-container.sass';
import {connect} from "react-redux";
import CartRowList from "../../component/cart-row";
import {getCartItems} from "../../store/selectors/cart-Items";
import {getEvent} from "../../store/selectors/event-page-selectors";
import TicketsPage from "../../component/tickets-page";

const ShoppingCartContainer = ({cartItems, event}) => {
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
            </div>
        </section>
    )
}
const mapStateToProps = (state) => {
    return {
        event: getEvent(state),
        cartItems: getCartItems(state)
    }
};
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer);
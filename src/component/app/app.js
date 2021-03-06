import React from "react";
import HeaderInfo from "../header-info";
import Main from "../main";
import FooterInfo from "../footer-info";
import "./app.sass";
import {Redirect, Route, Switch} from 'react-router-dom';
import EventPageContainer from '../../container-component/event-page-container';
import AsideListContainer from "../../container-component/aside-list-container";
import LoginPageContainer from "../../container-component/login-page-container";
import RegistrationPageContainer
    from "../../container-component/registration-page-container";
import ConditionsPage from "../conditions-page";
import HallsSchemesContainer from "../halls-schemes-bar";
import TicketPageContainer from "../../container-component/tickets-page-container/tickets-page-container";
import ShoppingCartContainer from "../../container-component/shopping-cart-container/shopping-cart-container";
import PayingContainer from "../../container-component/paying-container/paying-container";


const App = () => {
    return (
        <div>
            <HeaderInfo/>
            <section className='app-events'>
                <AsideListContainer/>
                <Switch>
                    <Route path="/conditions" component={ConditionsPage}/>
                    <Route path="/events" component={Main}/>
                    <Route path="/login" component={LoginPageContainer}/>
                    <Route path="/registration" component={RegistrationPageContainer}/>
                    <Route path="/event/:eventId" component={EventPageContainer}/>
                    <Route path="/halls" component={HallsSchemesContainer}/>
                    <Route path="/hall/:eventId" component={TicketPageContainer}/>
                    <Route path="/shopping-cart/" component={ShoppingCartContainer}/>
                    <Route path="/paying/" component={PayingContainer}/>
                    <Redirect to="/events"/>
                </Switch>
            </section>
            <FooterInfo/>
        </div>
    )
};
export default App;
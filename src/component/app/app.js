import React from "react";
import HeaderInfo from "../header-info";
import Main from "../main";
import Footer from "../footer-info";
import "./app.sass";
import {Redirect, Route,Switch} from 'react-router-dom';
import EventPageContainer from '../../container-component/event-page-container';
import AsideListContainer from "../../container-component/aside-list-container";
import LoginPageContainer from "../../container-component/login-page-container";
import RegistrationPageContainer
    from "../../container-component/registration-page-container";
import ConditionsPage from "../conditions-page";
import HallsSchemesContainer from "../../container-component/halls-schemes-container";
import TicketPageContainer from "../../container-component/tickets-page-container/tickets-page-container";


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
                <Route path="/hall/" component={TicketPageContainer}/>
                <Redirect to="/events"/>
                </Switch>
            </section>
            <Footer/>
        </div>
    )
};
export default App;
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
import HallsSchemesSmall from "../halls-schemes/hells-schemes-small";
import HallsSchemesLarge from "../halls-schemes/halls-schemes-large";


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
                <Route path="/halls" component={HallsSchemesLarge}/>
                <Redirect to="/events"/>
                </Switch>
            </section>
            <Footer/>
        </div>
    )
};
export default App;
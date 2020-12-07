import React from "react";
import HeaderInfo from "../header-info";
import Main from "../main";
import Footer from "../footer-info";
import "./app.sass";
import {Route} from 'react-router-dom';
import EventPageContainer from '../../container-component/event-page-container';
import AsideListContainer from "../../container-component/aside-list-container";
import LoginPageContainer from "../../container-component/login-page-container";
import RegistrationPageContainer
    from "../../container-component/registration-page-container";
import ConditionsPage from "../conditions-page";


const App = () => {
    return (
        <div>
            <HeaderInfo/>
            <section className='app-events'>
                <AsideListContainer/>
                <Route path="/conditions" component={ConditionsPage}/>
                <Route exact path="/events" component={Main}/>
                <Route path="/login" component={LoginPageContainer}/>
                <Route path="/registration" component={RegistrationPageContainer}/>
                <Route path="/event/:eventId" component={EventPageContainer}/>
            </section>
            <Footer/>
        </div>
    )
};
export default App;
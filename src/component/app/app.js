import React from "react";
import HeaderInfo from "../header-info";
import Main from "../main";
import Footer from "../footer-info";
import "./app.sass";
import LoginPage from "../login-page";
import {Route} from 'react-router-dom';
import EventPageContainer from '../../container-component/event-page-container';
import AsideListContainer from "../../container-component/aside-list-container/aside-list-container";


const App = () => {
    return (
            <div>
                <HeaderInfo/>
                <section className='app-events'>
                    <AsideListContainer/>
                    <Route exact path="/events" component={Main}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path='/event' component={EventPageContainer}/>
                </section>
                <Footer/>
            </div>
    )
};
export default App;
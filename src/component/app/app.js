import React from "react";
import HeaderInfo from "../header-info";
import Main from "../main";
import Footer from "../footer-info";
import AsideList from "../aside-list/aside-list";
import "./app.sass";
import {Route} from 'react-router-dom'
import LoginPage from "../login-page";
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Router>
                <HeaderInfo/>
                <section className='app-events'>
                    <AsideList/>
                    <Route path="/events" component={Main}/>
                    <Route path="/login" component={LoginPage}/>
                </section>
                <Footer/>
            </Router>
        </div>
    )
};
export default App;
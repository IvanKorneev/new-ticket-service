import React from "react";
import HeaderInfo from "../header-info";
import Main from "../main";
import Footer from "../footer-info";
import AsideList from "../../container-component/aside-list-container/aside-list";
import "./app.sass";
import LoginPage from "../login-page";
import { Route} from 'react-router-dom';


const App = () => {
    return (
            <div>
                <HeaderInfo/>
                <section className='app-events'>
                    <AsideList/>
                    <Route exact path="/events" component={Main}/>
                    <Route path="/login" component={LoginPage}/>
                </section>
                <Footer/>
            </div>
    )
};
export default App;
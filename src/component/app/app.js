import React from "react";
import HeaderInfo from "../header-info";
import Eside from "../eside/eside";
import Main from "../main";
import Footer from "../footer-info";

import EventsList from "../events-list/events-list";


const App = () => {
    return (
        <div>
            <HeaderInfo/>
            <Eside/>
            <Main/>
            <Footer/>
        </div>


    )
};
export default App;
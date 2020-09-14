import React from "react";
import HeaderInfo from "../header-info";
import Main from "../main";
import Footer from "../footer-info";
import AsideList from "../aside-list/aside-list";

const App = () => {
    return (
        <div>
            <HeaderInfo/>
            <AsideList/>
            <Main/>
            <Footer/>

        </div>
    )
};
export default App;
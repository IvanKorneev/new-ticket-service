import React from "react";
import {connect} from "react-redux";
import './paying-container.sass'
import Paying from "../../component/paying";

const PayingContainer = () => {
    return (
        <div>
            <Paying/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PayingContainer);
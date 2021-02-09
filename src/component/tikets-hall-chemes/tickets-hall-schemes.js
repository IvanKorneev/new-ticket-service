import React from "react";
import HallsSchemesSmall from "../halls-schemes/hells-schemes-small";
import HallsSchemesLarge from "../halls-schemes/halls-schemes-large";
import Spinner from "../spinner";

const TicketsHallSchemes = ({eventHall}) => {

    if (eventHall === 1) {
        return <HallsSchemesSmall/>
    }
    if (eventHall === 2) {
        return <HallsSchemesLarge/>
    } else {
        return <Spinner/>
    }
}
export default TicketsHallSchemes;

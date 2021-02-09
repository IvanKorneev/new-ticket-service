import React from "react";
import HallsSchemesSmall from "../halls-schemes/hells-schemes-small";
import HallsSchemesLarge from "../halls-schemes/halls-schemes-large";
import Spinner from "../spinner";

const TicketsHallSchemes = ({eventHall,priceRanges}) => {

    if (eventHall === 1) {
        return <HallsSchemesSmall priceRanges={priceRanges} />
    }
    if (eventHall === 2) {
        return <HallsSchemesLarge priceRanges={priceRanges}/>
    } else {
      return  <Spinner/>
    }
}
export default TicketsHallSchemes;

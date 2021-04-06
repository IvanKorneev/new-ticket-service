import React from "react";
import HallsSchemesSmall from "../halls-schemes/hells-schemes-small";
import HallsSchemesLarge from "../halls-schemes/halls-schemes-large";


const TicketsHallSchemes = ({eventHall, priceRanges, onAddedToCart}) => {

    if (eventHall === 1) {
        return <HallsSchemesSmall priceRanges={priceRanges} onAddedToCart={onAddedToCart} hall={eventHall}/>
    }
    if (eventHall === 2) {
        return <HallsSchemesLarge priceRanges={priceRanges} onAddedToCart={onAddedToCart} hall={eventHall}/>
    } else {
        return <div>
            &&&
        </div>
    }
}
export default TicketsHallSchemes;

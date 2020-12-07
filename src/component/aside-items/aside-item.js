import React from "react";
import {getData} from "../helpers";
import {getTime} from "../helpers";
import './aside-item.sass'

const AsideItem = ({eventsPropsItem}) => {
    const {artist, eventStart, images} = eventsPropsItem;
    return (
        <div className='aside-items'>
            <img src={images[0]} alt={artist}/>
            <div className='aside-items-artist'>{artist}</div>
            <div className='aside-items-info'>
                <div className='aside-items-start'>{getData(eventStart)}</div>
                <div className='aside-items-time'>{getTime(eventStart)}</div>
                <div className='aside-items-tickets'>
                    <div className='aside-items-tickets-text'>
                        Buy
                    </div>
                </div>
            </div>

        </div>
    )
};
export default AsideItem;
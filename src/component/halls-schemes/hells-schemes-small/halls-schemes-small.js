import React from "react";
import './halls-schemes-small.sass'
import GenerateSeats from "../../generate-seats";

const HallsSchemesSmall = (priceRanges, onAddedToCart) => {
    return (
        <div className='hall-container'>
            <section className='hall'>
                <div className='hall1'>
                    <div className='title'>
                        <h2>BÜHNE</h2>
                    </div>

                    <div className='hall-notausgang'>
                        <div className='hall-section'>Notausgang</div>
                        <div className='hall-section'>Notausgang</div>
                    </div>
                    <div className='test'>
                        <div className='hall-seat'>
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], priceRanges,1)}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],priceRanges,2)}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],priceRanges,3)}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],priceRanges,4)}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],priceRanges,5)}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],priceRanges,6)}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],priceRanges,7)}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],priceRanges,8)}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],priceRanges,9)}
                        </div>
                    </div>
                    <h3>KLEINER SAAl</h3>
                    <div className='hall-schemes-exit'>
                        <div className='hall-exit'>
                            <span>Linke Seite</span>
                            <span className='eingang-ausgang'>Eingang Ausgang</span>

                        </div>
                        <div className='hall-exit'>
                            <span>Rechte Seite</span>
                            <span className='eingang-ausgang'>Eingang Ausgang</span>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HallsSchemesSmall;
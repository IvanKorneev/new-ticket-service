import React from "react";
import './halls-schemes-large.sass';
import GenerateSeats from "../../generate-seats";

const HallsSchemesLarge = (priceRanges) => {
    return (
        <section className='hall-container-large'>
            {/*<h1>HALLS SCHEMES</h1>*/}
            <div className='title-large'>
                <h2>BÜHNE</h2>
            </div>
            <div className='hall-notausgang-large'>
                <div className='hall-section-large'>Notausgang</div>
                <div className='hall-section-large'>Notausgang</div>
            </div>

            <div className='hall-large'>
                <div className='hall-large-left'>
                    {GenerateSeats([1, 2, 3],priceRanges,1)}
                    {GenerateSeats([1, 2, 3, 4],priceRanges,2)}
                    {GenerateSeats([1, 2, 3, 4, 5],priceRanges,3)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6],priceRanges,4)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7],priceRanges,5)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8],priceRanges,6)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9],priceRanges,7)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],priceRanges,8)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],priceRanges,9)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9],priceRanges,10)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8],priceRanges,11)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7],priceRanges,12)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6],priceRanges,13)}
                    {GenerateSeats([1, 2, 3, 4, 5],priceRanges,14)}
                </div>

                <div className='hall-large-center'>
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],priceRanges,1)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],priceRanges,2)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],priceRanges,3)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],priceRanges,4)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],priceRanges,5)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],priceRanges,6)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],priceRanges,7)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],priceRanges,8)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],priceRanges,9)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],priceRanges,10)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],priceRanges,11)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],priceRanges,12)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],priceRanges,13)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],priceRanges,14)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],priceRanges,15)}
                </div>

                <div className='hall-large-right'>
                    {GenerateSeats([1, 2, 3],priceRanges,1)}
                    {GenerateSeats([1, 2, 3, 4],priceRanges,2)}
                    {GenerateSeats([1, 2, 3, 4, 5],priceRanges,3)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6],priceRanges,4)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7],priceRanges,5)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8],priceRanges,6)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9],priceRanges,7)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],priceRanges,8)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],priceRanges,9)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9],priceRanges,10)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8],priceRanges,11)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7],priceRanges,12)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6],priceRanges,13)}
                    {GenerateSeats([1, 2, 3, 4, 5],priceRanges,14)}

                </div>
            </div>
            <h3>GROSSE SAAl</h3>
            <div className='hall-schemes-large-exit'>
                <div className='hall-exit-large'>
                    <span>Linke Seite</span>
                    <span className='eingang-ausgang-large'>Eingang Ausgang</span>

                </div>
                <div className='hall-exit-large'>
                    <span>Rechte Seite</span>
                    <span className='eingang-ausgang-large'>Eingang Ausgang</span>

                </div>
            </div>

        </section>
    )
}
export default HallsSchemesLarge;
import React from "react";
import './halls-schemes-large.sass';
import GenerateSeats from "../../generate-seats";

const HallsSchemesLarge = (props) => {
    return (
        <section className='hall-container-large'>
            <div className='title'>
                <h2>BÜHNE</h2>
            </div>
            <div className='hall-notausgang-large'>
                <div className='hall-section-large'>Notausgang</div>
                <div className='hall-section-large'>Notausgang</div>
            </div>

            <div className='hall-large'>
                <div className='hall-large-left'>
                    {GenerateSeats([1, 2, 3], props, 1)}
                    {GenerateSeats([1, 2, 3, 4], props, 2)}
                    {GenerateSeats([1, 2, 3, 4, 5], props, 3)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6], props, 4)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7], props, 5)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8], props, 6)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9], props, 7)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], props, 8)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], props, 9)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9], props, 10)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8], props, 11)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7], props, 12)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6], props, 13)}
                    {GenerateSeats([1, 2, 3, 4, 5], props, 14)}
                </div>

                <div className='hall-large-center'>
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], props, 1)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], props, 2)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], props, 3)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], props, 4)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], props, 5)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], props, 6)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], props, 7)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], props, 8)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], props, 9)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], props, 10)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], props, 11)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], props, 12)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], props, 13)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], props, 14)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], props, 15)}
                </div>

                <div className='hall-large-right'>
                    {GenerateSeats([1, 2, 3], props, 1)}
                    {GenerateSeats([1, 2, 3, 4], props, 2)}
                    {GenerateSeats([1, 2, 3, 4, 5], props, 3)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6], props, 4)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7], props, 5)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8], props, 6)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9], props, 7)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], props, 8)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], props, 9)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9], props, 10)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8], props, 11)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7], props, 12)}
                    {GenerateSeats([1, 2, 3, 4, 5, 6], props, 13)}
                    {GenerateSeats([1, 2, 3, 4, 5], props, 14)}

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
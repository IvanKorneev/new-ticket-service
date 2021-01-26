import React from "react";
import './halls-schemes-small.sass'
import GenerateSeats from "../../generate-seats";

const HallsSchemesSmall = () => {
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
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1])}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1])}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1])}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1])}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1])}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1])}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 11, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1])}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 11, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1])}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 12, 11, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1])}
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
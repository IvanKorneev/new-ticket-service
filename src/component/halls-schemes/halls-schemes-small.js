import React from "react";
import './halls-schemes-small.sass'
import GenerateSeats from "../generate-seats";

const HallsSchemesSmall = () => {
    return (
        <div className='hall-container'>
            <h1>HALLS SCHEMES</h1>
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
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21])}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22])}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23])}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24])}
                            {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25])}
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
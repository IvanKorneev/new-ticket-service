import React from "react";
import './halls-schemes-large.sass';
import GenerateSeats from "../../generate-seats";

const HallsSchemesLarge = () => {
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
                    {GenerateSeats([1, 2, 3])}
                    {GenerateSeats([1, 2, 3, 4])}
                    {GenerateSeats([1, 2, 3, 4, 5])}
                    {GenerateSeats([1, 2, 3, 4, 5, 6])}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7])}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8])}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9])}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9])}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8])}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7])}
                    {GenerateSeats([1, 2, 3, 4, 5, 6])}
                    {GenerateSeats([1, 2, 3, 4, 5])}
                </div>

                <div className='hall-large-center'>
                    {GenerateSeats([4, 5, 6, 7, 8, 9, 10, 11, 10, 9, 8, 7, 6, 5, 4])}
                    {GenerateSeats([5, 6, 7, 8, 9, 10, 11, 12, 12, 11, 10, 9, 8, 7, 6, 5])}
                    {GenerateSeats([6, 7, 8, 9, 10, 11, 12, 13, 14, 13, 12, 11, 10, 9, 8, 7, 6])}
                    {GenerateSeats([7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 14, 13, 12, 11, 10, 9, 8, 7])}
                    {GenerateSeats([8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8])}
                    {GenerateSeats([9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9])}
                    {GenerateSeats([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10])}
                    {GenerateSeats([11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11])}
                    {GenerateSeats([11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11])}
                    {GenerateSeats([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10])}
                    {GenerateSeats([9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9])}
                    {GenerateSeats([8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8])}
                    {GenerateSeats([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7])}
                    {GenerateSeats([6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6])}
                    {GenerateSeats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1])}
                </div>

                <div className='hall-large-right'>
                    {GenerateSeats([3, 2, 1])}
                    {GenerateSeats([4, 3, 2, 1])}
                    {GenerateSeats([5, 4, 3, 2, 1])}
                    {GenerateSeats([6, 5, 4, 3, 2, 1])}
                    {GenerateSeats([7, 6, 5, 4, 3, 2, 1])}
                    {GenerateSeats([8, 7, 6, 5, 4, 3, 2, 1])}
                    {GenerateSeats([9, 8, 7, 6, 5, 4, 3, 2, 1])}
                    {GenerateSeats([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])}
                    {GenerateSeats([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])}
                    {GenerateSeats([9, 8, 7, 6, 5, 4, 3, 2, 1])}
                    {GenerateSeats([8, 7, 6, 5, 4, 3, 2, 1])}
                    {GenerateSeats([7, 6, 5, 4, 3, 2, 1])}
                    {GenerateSeats([6, 5, 4, 3, 2, 1])}
                    {GenerateSeats([5, 4, 3, 2, 1])}

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
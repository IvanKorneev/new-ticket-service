import React, {useState} from "react";
import './halls-schemes-container.sass'
import HallsSchemesSmall from "../../component/halls-schemes/hells-schemes-small";
import HallsSchemesLarge from "../../component/halls-schemes/halls-schemes-large";

const HallsSchemesContainer = (priceRanges) => {
    const [hall1, setHall] = useState(true)

    const renderHall = () => {
        if (hall1) {
            return <HallsSchemesSmall priceRanges={priceRanges}/>
        } else {
            return <HallsSchemesLarge priceRanges={priceRanges}/>
        }
    }
    return (
        <div className='schemes-wrapper'>
            <h1>HALLS SCHEMES</h1>
            <section className='schemes-container'>
                <div className="schemes-container-button">
                    <i className="fas fa-chevron-left fa-3x" onClick={() => setHall(!hall1)}/>
                </div>

                {renderHall()}

                <div className="schemes-container-button">
                    <i className="fas fa-chevron-right fa-3x" onClick={() => setHall(!hall1)}/>
                </div>
            </section>
        </div>
    )
}


export default HallsSchemesContainer;

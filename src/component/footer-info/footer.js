import React from "react";
import logo from "../images/logo_col.svg";
import './footer-info.sass'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer-img'>
                <img src={logo} alt='logo'/>
            </div>

            <div className='footer-right-info'>
                <div className='footer-address'>
                    <span>Berlin City Hall</span>
                    <span>Freudstrasse 69, 10117 Berlin</span>
                    <span>Tel.: 030 2223344</span>
                </div>
                <div className='footer-info'>
                    <span>Fax: 030 2223355</span>
                    <span>E-Mail: info@bch.de</span>
                    <div className='footer-social'>
                        <i className="fab fa-youtube"/>
                        <i className="fab fa-facebook-square"/>
                        <i className="fab fa-twitter"/>
                        <i className="fab fa-instagram"/>
                        <i className="fa fa-odnoklassniki" aria-hidden="true"/>
                    </div>

                </div>
            </div>
        </section>
    )
};
export default Footer;
import React from "react";
import './header-menu-bar.sass';
import logoWhite from '../images/logo_white.svg';
import {connect} from 'react-redux';
import {showBar} from '../../store/actions'
import {Link} from "react-router-dom";



const HeaderMenuBar = ({closeBarAction,showBar}) => {

    const clickClosedHandler = () => {
        closeBarAction(!showBar);

    };
    return (
        <div className='header-menu-bar'>
            <div className='header-menu-bar-btn'>
                <i className="fas fa-times" onClick={clickClosedHandler}/>
            </div>
            <div className='header-menu-bar-img'>
                <img src={logoWhite} alt='logo'/>
            </div>
            <div className='header-menu-bar-data'>
                <section className='header-menu-bar-social-container'>
                    <p>Berlin City Hall | Events and Tickets</p>
                    <div className='social'>
                        <i className="fab fa-youtube"/>
                        <i className="fab fa-facebook-square"/>
                        <i className="fab fa-twitter"/>
                        <i className="fab fa-instagram"/>
                        <i className="fab fa-odnoklassniki"/>
                        <i className="fas fa-rss text-muted"/>
                    </div>
                    <div className='header-menu-bar-data-info'>
                        <p>Berlin City Hall</p>
                        <p>Freudstrasse 69, 10117 Berlin</p>
                        <p>Tel.: 030 2223344</p>
                        <p>Fax: 030 2223355</p>
                        <p>E-Mail: info@bch.de</p>
                    </div>
                </section>
            </div>
            <div className='header-menu-bar-link'>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li>Shopping Cart</li>
                    <li><Link to="/halls">Halls Scheme</Link></li>
                    <li>About Us</li>
                </ul>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        showBar: state.showBar.showBar
    }
};

const mapDispatchToProps = {
    closeBarAction: (val) => showBar(val)
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenuBar);
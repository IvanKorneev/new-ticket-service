import React, {Component} from "react";
import logo from '../images/logo_col.svg';
import './header-info.sass';
import {connect} from 'react-redux';
import {showBar} from "../../store/actions"
import HeaderMenuBar from "../header-menu-bar";
import {Link} from "react-router-dom";


const HeaderInfo = ({showBarAction, showBar}) => {
    const clickHandler = () => {
        showBarAction(true)
    };


    if (showBar) {
        return <HeaderMenuBar/>
    }

    return (

        <header className='header'>
            <section className='header-img'>
                <img src={logo} alt='logo'/>
            </section>

            <section className='header-lang-social'>
                <section className='lang'>
                    <p>Berlin City Hall | Events and Tickets</p>
                    <div className='header-link'>
                        <Link to="/login">Login</Link>
                        <p>DE</p>
                        <p>RU</p>
                    </div>
                </section>
                <section className='social-container'>
                    <div className='social'>
                        <i className="fab fa-youtube"/>
                        <i className="fab fa-facebook"/>
                        <i className="fab fa-twitter"/>
                        <i className="fab fab fa-instagram-square"/>
                        <i className="fa fa-odnoklassniki" aria-hidden="true"/>
                        <i className="fas fa-rss text-muted"/>

                    </div>
                    <div className='header-button' onClick={clickHandler}>
                        <div className='header-button-row'/>
                        <div className='header-button-row'/>
                        <div className='header-button-row'/>
                    </div>
                </section>
            </section>
        </header>
    )
};


const mapStateToProps = (state) => {
    return {
        showBar: state.showBar.showBar
    }
};
const mapDispatchToProps =  {
    showBarAction: (val) => showBar(val),
};


export default connect(mapStateToProps, mapDispatchToProps)(HeaderInfo)
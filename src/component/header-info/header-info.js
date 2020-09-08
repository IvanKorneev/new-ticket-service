import React, {Component} from "react";
import logo from '../images/logo_col.svg'
import './header-info.css'

export default class HeaderInfo extends Component {
    render() {
        return (
            <header className='header'>
                <section className='header-img'>
                    <img src={logo} alt='logo'/>
                </section>

                <section className='header-lang-social'>
                    <section className='lang'>
                        <p>Berlin City Hall | Events and Tickets</p>
                        <div className='header-link'>
                            <p>Login</p>
                            <p>DE</p>
                            <p>RU</p>
                        </div>
                    </section>
                    <section className='social'>
                            <i className="fab fa-youtube"/>
                            <i className="fab fa-facebook-square"/>
                            <i className="fab fa-twitter"/>
                            <i className="fab fa-instagram"/>
                            <i className="fa fa-odnoklassniki" aria-hidden="true"/>
                    </section>

                </section>

            </header>
        )

    };
};
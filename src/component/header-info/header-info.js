import React, {Component} from "react";
import logo from '../images/logo_col.svg';
import './header-info.sass';
import {connect} from 'react-redux';
import {showBar} from "../../actions"
import HeaderMenuBar from "../header-menu-bar";


class HeaderInfo extends Component {
    clickHandler = () => {
        this.props.showBarAction(true)
    };

    render() {
        if (this.props.showBar) {
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
                            <p>Login</p>
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
                        <div className='header-button' onClick={this.clickHandler}>
                            <div className='header-button-row'></div>
                            <div className='header-button-row'></div>
                            <div className='header-button-row'></div>
                        </div>
                    </section>
                </section>
            </header>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        showBar: state.showBar
    }
};
const mapDispatchToProps = (dispatch) => ({
    showBarAction: (val) => dispatch(showBar(val)),
});


export default connect(mapStateToProps, mapDispatchToProps)(HeaderInfo)
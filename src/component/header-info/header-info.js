import React, {Component} from "react";
import logo from '../images/logo_col.svg';
import './header-info.sass';
import {connect} from 'react-redux';
import {showBar} from "../../actions"
import HeaderMenuBar from "../header-menu-bar";


class HeaderInfo extends Component {
    render() {

            //Проверка какой компонент отрисовать
        // if(this.props.showBar) {
        //     console.log(this.state);
        //     return <HeaderMenuBar/>
        // }

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
                            <i className="fab fa-facebook-square"/>
                            <i className="fab fa-twitter"/>
                            <i className="fab fa-instagram"/>
                            <i className="fa fa-odnoklassniki" aria-hidden="true"/>
                        </div>
                        <div className='header-button' onClick={()=>{}}>
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
const mapDispatchToProps ={
    //как я должен указатб функцию  и поменять стеит
    showBar
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderInfo)
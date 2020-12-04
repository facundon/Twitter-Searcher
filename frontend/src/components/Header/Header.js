import React from 'react';
import { Link } from 'react-router-dom'
import './styles.scss'

const Header = () => {
    return (
        <div className="header-wrapper">
        <nav className="navbar navbar-expand">
            <div className="navbar-brand">
                <Link to="/">
                    <div className="container">
                        <img id="logo" src="https://www.flaticon.com/svg/static/icons/svg/356/356025.svg" loading="lazy"/>
                        <div className="wrapper">
                            <div>Tweeter</div>
                            <div>Searcher</div> 
                        </div>
                    </div>
                </Link>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" to="/buscador">Buscador</Link>
                    <Link className="nav-link" to="/historial">Historial</Link>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Header

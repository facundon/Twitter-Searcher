import React from 'react';
import { Link } from 'react-router-dom'
import './styles.scss'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
                <img id="logo" src="https://www.flaticon.com/svg/static/icons/svg/356/356025.svg" alt="" loading="lazy"/>
                Tweeter Searcher
            </a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" to="/buscador">Buscador</Link>
                    <Link className="nav-link" to="/historial">Historial</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header

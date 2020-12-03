import React from 'react';
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
                    <a className="nav-link">Buscador</a>
                    <a className="nav-link">Historial</a>
                </div>
            </div>
        </nav>
    )
}

export default Header

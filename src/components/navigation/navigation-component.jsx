import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './navigation-style.scss'
import {ReactComponent as MenuIcon} from "../../assets/menu002.svg";

const Navigation = ({onMenuOpen, onMenuClose, isMenuOpen}) => {

    const openSlideMenu = () => {
        onMenuOpen();
    }
    const closeSlideMenu = () => {
        onMenuClose()
    }

    return (
        <nav className='navbar'>
            <MenuIcon className='navbar__menu-icon' onClick={openSlideMenu}/>
            <div id='side-menu' className={`side-nav ${isMenuOpen ? 'side-nav--open' : ''}`}>
                <div className='side-nav__btn-close' onClick={closeSlideMenu}>&times;</div>
                <Link className='side-nav__link' to='/'>Concerts</Link>
                <Link className='side-nav__link' to='/addconcert'>Add Concerts</Link>
            </div>
        </nav>
    )
}

export default Navigation;
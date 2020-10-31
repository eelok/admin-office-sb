import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './navigation-style.scss'
import {ReactComponent as MenuIcon} from "../../assets/menu002.svg";

const Navigation = ({onMenuOpen, onMenuClose}) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const openSlideMenu = () => {
        setMenuOpen(true);
        // todo почему нужны ()
        onMenuOpen();
    }
    const closeSlideMenu = () => {
        setMenuOpen(false);
        onMenuClose();
    }

    return (
        <nav className='navbar'>
            <MenuIcon className='navbar__menu-icon' onClick={openSlideMenu}/>
            <div id='side-menu' className={`side-nav ${menuOpen ? 'side-nav--open' : ''}`}>
                <a href="#" className='side-nav__btn-close' onClick={closeSlideMenu}>&times;</a>
                <Link className='side-nav__link' to='/'>Concerts</Link>
                <Link className='side-nav__link' to='/addconcert'>Add Concerts</Link>
            </div>
        </nav>
    )
}

export default Navigation;
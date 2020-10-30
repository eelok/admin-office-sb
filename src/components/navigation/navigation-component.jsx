import React from 'react';
import {Link} from "react-router-dom";
import './navigation-style.scss'
import {ReactComponent as MenuIcon} from "../../assets/menu002.svg";

const Navigation = () => {

    const openSlideMenu = () => {
        document.getElementById('side-menu').style.width = '250px';
        document.getElementById('main').style.marginLeft = '250px';
    }
    const closeSlideMenu = () => {
        document.getElementById('side-menu').style.width = '0';
        document.getElementById('main').style.marginLeft = '0';
    }


    return (
        <nav className='navbar'>
            <a className='navbar__open-slide' >
                <MenuIcon className='navbar__menu-icon' onClick={openSlideMenu}/>
            </a>
            {/*<ul className='navbar__nav'>*/}
            {/*    <li><Link className='navbar__link' to='/'>Home</Link></li>*/}
            {/*    <li><Link className='navbar__link' to='/concerts'>Concerts</Link></li>*/}
            {/*    <li><Link className='navbar__link' to='/addconcert'>Add Concerts</Link></li>*/}
            {/*</ul>*/}

            <div id='side-menu' className='side-nav'>
                <a href="#" className='side-nav__btn-close' onClick={closeSlideMenu}>&times;</a>
                <Link className='side-nav__link' to='/'>Home</Link>
                <Link className='side-nav__link' to='/concerts'>Concerts</Link>
                <Link className='side-nav__link' to='/addconcert'>Add_Concerts</Link>
            </div>
        </nav>
    )
}

export default Navigation;
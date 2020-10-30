import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './navigation-style.scss';
import {ReactComponent as MenuIcon} from "../../assets/menu002.svg";

const Navigation = ({onMenuOpen, onMenuClosed}) => {
  let [menuOpen, setMenuOpen] = useState(false);

  const openSlideMenu = () => {
    setMenuOpen(true);
    onMenuOpen();
  }
  const closeSlideMenu = () => {
    setMenuOpen(false);
    onMenuClosed();
  }


  return (
      <nav className='navbar'>
        <a className='navbar__open-slide'>
          <MenuIcon className='navbar__menu-icon' onClick={openSlideMenu}/>
        </a>
        {/*<ul className='navbar__nav'>*/}
        {/*    <li><Link className='navbar__link' to='/'>Home</Link></li>*/}
        {/*    <li><Link className='navbar__link' to='/concerts'>Concerts</Link></li>*/}
        {/*    <li><Link className='navbar__link' to='/addconcert'>Add Concerts</Link></li>*/}
        {/*</ul>*/}

        <div id='side-menu' className={`side-nav ${menuOpen ? 'side-nav--open' : ''}`}>
          <a href="#" className='side-nav__btn-close' onClick={closeSlideMenu}>&times;</a>
          <Link className='side-nav__link' to='/'>Home</Link>
          <Link className='side-nav__link' to='/concerts'>Concerts</Link>
          <Link className='side-nav__link' to='/addconcert'>Add Concert</Link>
        </div>
      </nav>
  )
}

export default Navigation;

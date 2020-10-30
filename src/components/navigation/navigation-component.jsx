import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './navigation-style.scss'
import {ReactComponent as MenuIcon} from "../../assets/menu002.svg";

const Navigation = ({onMenuOpen, onMenuClosed}) => {
  let [sideMenuWidth, setSideMenuWidth] = useState('0');

  const openSlideMenu = () => {
    let sidebarWidth = '250px';
    setSideMenuWidth(sidebarWidth);
    onMenuOpen(sidebarWidth);
  }
  const closeSlideMenu = () => {
    setSideMenuWidth('0')
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

        <div id='side-menu' className='side-nav' style={{width: sideMenuWidth}}>
          <a href="#" className='side-nav__btn-close' onClick={closeSlideMenu}>&times;</a>
          <Link className='side-nav__link' to='/'>Home</Link>
          <Link className='side-nav__link' to='/concerts'>Concerts</Link>
          <Link className='side-nav__link' to='/addconcert'>Add_Concerts</Link>
        </div>
      </nav>
  )
}

export default Navigation;

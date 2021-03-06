import React from 'react';
import {Link} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import './navigation-style.scss'
import {ReactComponent as MenuIcon} from "../../assets/menu.svg";
import {ReactComponent as SmIcon} from "../../assets/smilebusters.svg";
import {auth} from "../../firebase";

const Navigation = ({onMenuOpen, onMenuClose, isMenuOpen}) => {

    const history = useHistory();
    const path = window.location.pathname;
    let urls = [
        {title: 'Концерты', url: '/'},
        {title: 'Добавить Концерт', url: '/addconcert'},
        {
            title: 'Выйти', url: '/login', onClick: () => {
                auth.signOut();
            }
        }
    ];

    const openSlideMenu = () => {
        onMenuOpen();
    }
    const closeSlideMenu = () => {
        onMenuClose();
    }

    return (
        <nav className='navbar'>
            <div className='navbar__icons-box'>
                <SmIcon className='navbar__sm-icon' onClick={() => history.push('/')}/>
                <MenuIcon className='navbar__menu-icon' onClick={openSlideMenu}/>
            </div>
            <div id='side-menu' className={`side-nav ${isMenuOpen ? 'side-nav--open' : ''}`}>
                <div className='side-nav__btn-close' onClick={closeSlideMenu}>&times;</div>

                {urls.map((location) => (
                    <Link key={location.url} className={`side-nav__link ${location.url === path ? 'highlight' : ''}`}
                          to={location.url}
                          onClick={() => {
                              closeSlideMenu();
                              if (location.onClick) {
                                  location.onClick();
                              }
                          }}
                    >
                        {location.title}
                    </Link>
                ))}

            </div>
        </nav>
    )
}

export default Navigation;

import {Link} from "react-router-dom";
import './navigation-style.scss'
import {ReactComponent as MenuIcon} from "../../assets/menu002.svg";
import {auth} from "../../firebase";

const Navigation = ({onMenuOpen, onMenuClose, isMenuOpen, currentUser}) => {
    const path = window.location.pathname;
    let urls = [
        {title: 'Concerts', url: '/'},
        {title: 'Add Concert', url: '/addconcert'},
        {title: 'Login', url: '/login'}
    ];

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
                {urls.map((location) => (
                    //todo key??
                    <Link className={`side-nav__link ${location.url === path ? 'highlight' : ''}`} to={location.url} onClick={closeSlideMenu}>{location.title}</Link>
                ))}
            </div>
        </nav>
    )
}

export default Navigation;
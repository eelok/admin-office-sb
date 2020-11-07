import React, {useState} from "react";
import Navigation from "../../components/navigation/navigation-component";

const WithNav = ({children}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className={`overlay ${menuOpen ? 'overlay--open' : ''}`}
                 onClick={() => setMenuOpen(false)}
            />
            <Navigation
                onMenuOpen={() => setMenuOpen(true)}
                onMenuClose={() => setMenuOpen(false)}
                isMenuOpen={menuOpen}
            />
            <div className={`main ${menuOpen ? 'main--open' : ''}`}>
                {children}
            </div>
        </>
    )
}

export default WithNav;


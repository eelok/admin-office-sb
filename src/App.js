import React, {useState} from "react";
import {Route, Switch} from 'react-router-dom';
import CreateConcert from "./components/create-concert/create-concert-component";
import AllConcerts from "./pages/all-concerts/all-concerts-page.component";
import EditConcert from "./pages/edit-concerts/edit-concerts-page.component";
import Navigation from "./components/navigation/navigation-component";
import './App.css';
import Login from "./pages/login/login-page-component";

function App() {
    let [menuOpen, setMenuOpen] = useState(false);

    const handleOnMeinContentClick = () => {
        setMenuOpen(false);
    }

    return (
        <div className="App">
            <div className={`overlay ${menuOpen ? 'overlay--open' : ''}`}
                 onClick={handleOnMeinContentClick}
            />
            <Navigation
                onMenuOpen={() => setMenuOpen(true)}
                onMenuClose={() => setMenuOpen(false)}
                isMenuOpen={menuOpen}
            />
            <div className={`main ${menuOpen ? 'main--open' : ''}`}>
                <Switch>
                    <Route exact={true} path='/' component={AllConcerts}/>
                    <Route exact={true} path='/addconcert' component={CreateConcert}/>
                    <Route exact={true} path='/concerts/:id' component={EditConcert}/>
                    <Route exact={true} path='/login' component={Login}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;

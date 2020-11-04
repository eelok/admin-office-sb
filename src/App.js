import React, {useState} from "react";
import {Route, Switch} from 'react-router-dom';
import CreateConcert from "./components/create-concert/create-concert-component";
import AllConcerts from "./pages/all-concerts/all-concerts-page.component";
import EditConcert from "./pages/edit-concerts/edit-concerts-page.component";
import Navigation from "./components/navigation/navigation-component";
import './App.css';
import Login from "./pages/login/login-page-component";
import {auth} from './firebase.js'

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
            menuOpen: false
        }
    }
// todo что делать с currentUser
    handleOnMainContentClick = () => {
        this.setState({
            menuOpen: false
        })
    }
    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user});

            console.log('USER', user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        let {currentUser, menuOpen} = this.state;

        return (
            <div className="App">
                <div className={`overlay ${menuOpen ? 'overlay--open' : ''}`}
                     onClick={this.handleOnMainContentClick}
                />
                <Navigation
                    onMenuOpen={() => this.setState({menuOpen: true})}
                    onMenuClose={() => this.setState({menuOpen: false})}
                    isMenuOpen={menuOpen}
                    currentUser={this.state.currentUser}
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


}

export default App;

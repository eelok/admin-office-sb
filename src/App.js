import React from "react";
import {Route, Switch} from 'react-router-dom';
import CreateConcert from "./components/create-concert/create-concert-component";
import AllConcerts from "./pages/all-concerts/all-concerts-page.component";
import EditConcert from "./pages/edit-concerts/edit-concerts-page.component";
import './App.css';
import Login from "./pages/login/login-page-component";
import {auth} from './firebase.js';
import {withRouter} from "react-router-dom";

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: {}
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
            if (user === null) {
                this.props.history.push('/login')
                return;
            }
            this.props.history.push('/')
            console.log('USER', user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <Switch>
                <Route exact={true} path='/' component={AllConcerts}/>
                <Route exact={true} path='/addconcert' component={CreateConcert}/>
                <Route exact={true} path='/concerts/:id' component={EditConcert}/>
                <Route exact={true} path='/login' component={Login}/>
            </Switch>
        );
    }


}

export default withRouter(App);

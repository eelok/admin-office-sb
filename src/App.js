import './App.css';
import {Route, Switch} from 'react-router-dom';
import CreateConcert from "./components/create-concert/create-concert-component";
import AllConcerts from "./pages/all-concerts/all-concerts-page.component";
import EditConcert from "./pages/edit-concerts/edit-concerts-page.component";
import Navigation from "./components/navigation/navigation-component";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Switch>
                <Route exact={true} path='/addconcert' component={CreateConcert}/>
                <Route exact={true} path='/concerts' component={AllConcerts}/>
                <Route exact={true} path='/concerts/:id' component={EditConcert}/>
            </Switch>
        </div>
    );
}

export default App;

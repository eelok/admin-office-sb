import './App.css';
import {Route, Switch} from 'react-router-dom';
import CreateConcert from "./components/create-concert/create-concert-component";
import AllConcerts from "./pages/all-concerts-page.component";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact={true} path='/addconcert' component={CreateConcert}/>
                <Route exact={true} path='/concerts' component={AllConcerts}/>
            </Switch>
        </div>
    );
}

export default App;

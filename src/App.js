import './App.css';
import {Route, Switch} from 'react-router-dom';
import CreateConcert from "./components/create-concert/create-concert-component";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path='/concerts' component={CreateConcert}/>
            </Switch>
        </div>
    );
}

export default App;

import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { GlobalProvider } from "./context/GlobalState";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <div style={{ maxWidth: "56rem", margin: "4rem auto" }}>
            <GlobalProvider>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/add" component={AddUser} />
                        <Route path="/edit" component={AddUser} />
                    </Switch>
                </Router>
            </GlobalProvider>
        </div>
    )
}

export default App

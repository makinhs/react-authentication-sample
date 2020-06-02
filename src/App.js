import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import LoginComponent from './components/loginComponent'
import LoggedComponent from './components/loggedComponent'
import AuthComponent from './components/authComponent'

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <LoginComponent/>
                </Route>
                <Route path='/home'>
                    <AuthComponent>
                        <LoggedComponent/>
                    </AuthComponent>
                </Route>
            </Switch>
        </div>
    );
}

export default App;

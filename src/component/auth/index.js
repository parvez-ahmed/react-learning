import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import { NavLink, Switch,Route } from 'react-router-dom'
import SignIn  from './signin';
import  SignUp  from './signup';
import './index.css';

class Auth extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Switch>
                <Route path="/auth/signin">
                    <SignIn/>
                </Route>
                <Route path="/auth/signup">
                    <SignUp/>
                </Route>
            </Switch>
        )
    }
}

export default Auth;
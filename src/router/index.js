import React from 'react'
import * as async from './bundle'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// 登陆组件
const Login = async.asyncComponent(() => async.load('login/login.js'));

// 根组件
const Index = async.asyncComponent(() => async.load('index/index.js'));

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login"  component={Login} />
            <Route path="/"  component={Index} />
        </Switch>
    </BrowserRouter>
)

import React, {Component} from 'react'
import './login.css'
import {Button} from 'antd';
import store from '../../store/index';
import loginActions from './../../store/modules/login/actions.js'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: store.getState().Login.username,
        }
    }

    /**
     * 登陆
     */
    handleLogin() {
        store.dispatch(loginActions.login({
            username: 111
        }))
        this.setState({
            username: store.getState().Login.username,
        })
    }

    render() {
        return (
            <div className="App">
                <div className="x-app-back">
                    <canvas id="Mycanvas" width="1920" height="946"></canvas>
                </div>
                <Button type="primary" onClick={this.handleLogin.bind(this)}>登陆{this.state.username}</Button>
                <p>我是登陆页面</p>
            </div>
        )
    }
}

export default Login

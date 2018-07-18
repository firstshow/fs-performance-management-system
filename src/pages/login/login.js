import React, {Component} from 'react'
import './login.scss'
import {Button} from 'antd';
import store from '~store/index';
import { login } from '~store/modules/user/actions.js'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '', // 用户名
            password: '', // 密码
            btnState: true // 按钮状态，当没有输入用户名或者密码的时候，按钮置灰
        }
    }

    /**
     * 当页面第一次渲染完成的生命周期函数
     */
    componentDidMount() {
        console.log('生成成功')
    }

    /**
     * 当用户名输入框变化
     * @param event 输入框对象
     */
    handelUserChange(event) {
        this.setState({
            username: event.target.value
        }, () => {
            this.checkBtnState()
        })

    }

    /**
     * 当密码输入框变化
     * @param event 输入框对象
     */
    handelPassChange(event) {
        this.setState({
            password: event.target.value
        }, () => {
            this.checkBtnState()
        })
    }

    /**
     * 当用户名或者密码为空的时候，按钮不可点击
     *
     */
    checkBtnState() {
        if (!this.state.username || !this.state.password) {
            this.setState({
                btnState: true
            })
        } else {
            this.setState({
                btnState: false
            })
        }
    }

    /**
     * 登陆
     */
    handleLogin() {
        store.dispatch(login({
            username: this.state.username,
            password: this.state.password
        })).then((res) => {
            console.log(res)
            if (res.resultCode === 200) {
                this.props.history.push('/home')
            }
        })
    }

    render() {
        return (
            <div className="x-login-container" data-flex="dir:top main:center cross:center">
                <h1>噼里啪啦团队</h1>
                <div className="x-login-content" data-flex="dir:top">
                    <label htmlFor="username">
                        <input id="username" ref="username" type="text" placeholder="请输入用户名" onChange={this.handelUserChange.bind(this)}/>
                    </label>
                    <label htmlFor="password">
                        <input id="password" ref="password" type="password" placeholder="请输入密码" onChange={this.handelPassChange.bind(this)}/>
                    </label>
                </div>
                <Button className="x-login-btn" type="primary" disabled={this.state.btnState} onClick={this.handleLogin.bind(this)}>登陆</Button>
            </div>
        )
    }
}

export default Login

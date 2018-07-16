import React, {Component} from 'react'
import './index.scss'
import imgConf from '~config/imgConf'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '', // 用户名
            password: '', // 密码
            btnState: true // 按钮状态，当没有输入用户名或者密码的时候，按钮置灰
        }
    }

    render() {
        return (
            <header className="x-header-container" data-flex="main:center">
                <div className="x-header-content" data-flex="main:justify cross:center">
                    <h1>噼里啪啦团队</h1>
                    <div className="x-user-info-box" data-flex="cross:center">
                        <h3>主管：张城</h3>
                        <img className="x-user-logo" src={imgConf.headerImg} alt=""/>
                    </div>

                    <ul className="x-down-list-warp">
                        <li>
                            <i className="icon iconfont icon-yonghu"></i>
                            <span>我的信息</span>
                        </li>
                        <li>
                            <i className="icon iconfont icon-password"></i>
                            <span>修改密码</span>
                        </li>
                        <li>
                            <i className="icon iconfont icon-exit"></i>
                            <span>退出</span>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Login

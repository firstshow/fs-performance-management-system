import React, {Component} from 'react'
import './index.scss'

class XNav extends Component {
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
            <nav className="x-nav-container">
                <ul>
                    <li></li>
                </ul>
            </nav>
        )
    }
}

export default XNav

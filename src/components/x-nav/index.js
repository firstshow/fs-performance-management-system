import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './index.scss'

class XNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: [
                {
                    to: '',
                    name: '绩效管理',
                    icon: 'icon-star',
                    childList: [
                        {
                            to: '/home',
                            name: '绩效列表',
                            icon: ''
                        },
                        {
                            to: '/LIST',
                            name: '维度列表',
                            icon: ''
                        }
                    ]
                },
                {
                    to: '',
                    name: '团队管理',
                    icon: 'icon-team',
                    childList: [
                        {
                            to: '/team',
                            name: '团队列表',
                            icon: ''
                        },
                        {
                            to: '/group',
                            name: '小组列表',
                            icon: ''
                        }
                    ]
                },
                {
                    to: '/user',
                    name: '用户管理',
                    icon: 'icon-users'
                }
            ]
        }
    }

    /**
     * 渲染一级菜单列表；当有to的时候，表示是只有一级菜单，可以做跳转；不然只是纯展示
     * @param item
     * @returns {XML}
     */
    renderMenuEl (item) {
        if (item.to) {
            return (
                <NavLink className="x-nav-menu" activeClassName="selected" to={item.to}>
                    <i className={`icon iconfont ${item.icon}`}></i>
                    <span className="x-menu-name">{item.name}</span>
                </NavLink>
            )
        } else {
            return (
                <li className="x-nav-menu">
                    <i className={`icon iconfont ${item.icon}`}></i>
                    <span className="x-menu-name">{item.name}</span>
                </li>
            )
        }
    }


    /**
     * 渲染二级菜单列表
     * @param list
     * @returns {XML}
     */
    renderSubMenuEl (list) {
        if (list) {
            return (
                <ul className="x-submenu-box">
                    {
                        list.map((item, i) => {
                            return (
                                <li key={i}>
                                    <NavLink className="x-nav-menu" activeClassName="selected" to={item.to}>
                                        <span className="x-menu-name">{item.name}</span>
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            )
        }
    }

    render() {
        let menuArry = this.state.menu
        return (
            <nav className="x-nav-container">
                <ul className="x-menu-box">
                    {
                        menuArry.map((item, i) => {
                            return (
                                <li key={i}>
                                    {this.renderMenuEl(item)}
                                    {this.renderSubMenuEl(item.childList, i)}
                                </li>
                            )
                        })
                    }

                </ul>
            </nav>
        )
    }
}

export default XNav

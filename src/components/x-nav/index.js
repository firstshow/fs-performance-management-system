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
                    key: '',
                    icon: 'icon-star',
                    childList: [
                        {
                            to: '/performanceList',
                            name: '绩效列表',
                            query: {
                                page: 1
                            },
                            key: 'performance',
                            icon: ''
                        },
                        {
                            to: '/dimensionList',
                            name: '维度列表',
                            query: {
                                page: 1
                            },
                            key: 'dimension',
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
                            to: '/teamList',
                            name: '团队列表',
                            query: {
                                page: 1
                            },
                            key: 'team',
                            icon: ''
                        },
                        {
                            to: '/groupList',
                            name: '小组列表',
                            query: {
                                page: 1
                            },
                            key: 'group',
                            icon: ''
                        }
                    ]
                },
                {
                    to: '/userList',
                    name: '用户管理',
                    query: {
                        page: 1
                    },
                    key: 'user',
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
                <NavLink className="x-nav-menu" activeClassName="selected" to={{pathname: item.to, search: '?page=1'}} isActive={(match, location) => {
                    if (location.pathname.indexOf(item.key) > -1) {
                        return true
                    }
                    return false
                }}>
                    <i className={`icon iconfont ${item.icon}`}></i>
                    <span className="x-menu-name">{item.name}</span>
                </NavLink>
            )
        } else {
            return (
                <div className="x-nav-menu">
                    <i className={`icon iconfont ${item.icon}`}></i>
                    <span className="x-menu-name">{item.name}</span>
                </div>
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
                                    <NavLink className="x-nav-menu" activeClassName="selected" to={{pathname: item.to, search: '?page=1'}} isActive={(match, location) => {
                                        if (location.pathname.indexOf(item.key) > -1) {
                                            return true
                                        }
                                        return false
                                    }}>
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

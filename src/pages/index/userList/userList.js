import React, {Component} from 'react'
import XBreadcrumb from '~components/x-breadcrumb/index'
import './userList.scss'

class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            breadcrumbData: [
                {
                    to: '/userList',
                    name: '用户列表'
                },
                {
                    to: '/userList/userEdit',
                    name: '用户新增'
                }
            ], // 面包屑导航栏的数据
        }
    }

    render() {
        return (
            <div className="x-warp">
                <XBreadcrumb data={this.state.breadcrumbData}></XBreadcrumb>
                <p>用户列表</p>
            </div>
        )
    }
}

export default UserList

import React, {Component} from 'react'
import { Select, Input, Table, Divider } from 'antd';
import XBreadcrumb from '~components/x-breadcrumb/index'
import './userList.scss'

const Option = Select.Option

const Search = Input.Search

const columns = [{
    title: '头像',
    dataIndex: 'headImg',
    render: text => <img src={text} alt="头像" width="40px" height="40px" />,
}, {
    title: '用户名',
    dataIndex: 'username',
}, {
    title: '姓名',
    dataIndex: 'realName',
}, {
    title: '花名',
    dataIndex: 'flowerName',
}, {
    title: '性别',
    dataIndex: 'gender',
    render: text => {
        return text === 1 ? '男' : '女'
    }
}, {
    title: '手机号',
    dataIndex: 'phone',
}, {
    title: '部门',
    dataIndex: 'teamName',
    key: 'teamName',
}, {
    title: '小组',
    dataIndex: 'groupName',
}, {
    title: '角色',
    dataIndex: 'roleName',
}, {
    title: '参与绩效',
    dataIndex: 'isJoin',
    width: '60px',
    render: text => {
        return text === 1 ? '是' : '否'
    }
}, {
    title: '最后登陆',
    dataIndex: 'lastLoginTime',
    width: '120px'
}, {
    title: '操作',
    width: '120px',
    render: (text, record) => (
        <span>
          <a className="x-modify-btn" href="javascript:void(0);">修改</a>
          <Divider type="vertical" />
          <a className="x-del-btn" href="javascript:void(0);">
            删除
          </a>
        </span>
    ),
}]

class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            breadcrumbData: [ // 面包屑导航栏的数据
                {
                    to: '/userList',
                    name: '用户列表'
                }
            ],
            tableList: [{
                "userId": "002",
                "headImg": "https://accounts.processon.com/uphoto/4/168/5a3a3fe0e4b0bf89b84ea93f.png",
                "username": "shandong",
                "realName": "善栋",
                "flowerName": "xxx",
                "gender": 1,
                "phone": "15968849894",
                "teamName": "前端团队",
                "groupName": "APP小组",
                "roleName": "组员",
                "isJoin": 1,
                "lastLoginTime": "2018-07-22 00:00:00"
            }]
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('进入了')
    }

    componentWillMount(nextProps, nextState) {
        console.log('进入了')
        return false
    }

    handleChange (value) {
        console.log(`selected ${value}`)
    }

    render() {
        return (
            <div className="x-warp">
                <XBreadcrumb data={this.state.breadcrumbData}></XBreadcrumb>
                <div className="x-search-warp" data-flex="main:justify cross:center">
                    <div data-flex="main:left">
                        <div className="x-search-section">
                            <span>团队：</span>
                            <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                            </Select>
                        </div>
                        <div className="x-search-section">
                            <span>小组：</span>
                            <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>

                            </Select>
                        </div>
                    </div>
                    <div className="x-search-section">
                        <Search
                            placeholder="请输入姓名／花名"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                        />
                    </div>
                </div>
                <div className="x-table-warp">
                    <Table columns={columns} dataSource={this.state.tableList} rowKey={record => record.userId} />
                </div>
            </div>
        )
    }
}

export default UserList

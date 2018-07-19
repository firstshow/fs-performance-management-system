import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Select, Input, Table, Pagination, Divider, Popconfirm} from 'antd';
import XBreadcrumb from '~components/x-breadcrumb/index'
import './userList.scss'
import store from '~store/index';
import {getUserList} from '~store/modules/user/actions.js'
import {getTeamList} from '~store/modules/team/actions.js'
import {getUrlQuery} from '~utils/utils'


const Option = Select.Option

const Search = Input.Search

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
            teamList: [], // 筛选项中的小组列表
            groupList: [], // 筛选项中的小组列表
            tableTotal: 0, // 列表总数据量
            tableList: [], // 列表数据
            reqData: { //  入参数据
                teamId: '', // 团队ID
                groupId: '', // 小组ID
                searchName: '', // 搜索内容
                page: getUrlQuery(props.location.search, 'page') * 1, // 当前第几页
                pageSize: 10 // 一页多少条数据
            }
        }
    }

    componentDidMount() {
        this.getTeamList()
        this.getGroupList()
        this.getTableList()
    }

    /**
     * 获取筛选项中小组列表数据
     */
    getTeamList() {
        store.dispatch(getTeamList({
            page: 1,
            pageSize: 10,
            parentTeamId: ''
        })).then((res) => {
            if (res.resultCode === 200) {
                this.setState({
                    teamList: res.data.list
                })
            }
        })
    }

    /**
     * 获取筛选项中小组列表数据
     */
    getGroupList() {
        store.dispatch(getTeamList({
            page: 1,
            pageSize: 10,
            parentTeamId: this.state.reqData.teamId
        })).then((res) => {
            if (res.resultCode === 200) {
                this.setState({
                    groupList: res.data.list
                })
            }
        })
    }

    /**
     * 获取列表数据
     */
    getTableList() {
        store.dispatch(getUserList(this.state.reqData)).then((res) => {
            if (res.resultCode === 200) {
                this.setState({
                    tableList: res.data.list,
                    tableTotal: res.data.total
                })
            }
        })
    }

    /**
     * 翻页查询数据
     * @param page
     * @param pageSize
     */
    handlePageChange(page) {
        // 改变当前url中page值，解决：详情返回列表，从第一页开始
        this.props.history.replace('/userList?page=' + page)
        this.setState({
            reqData: {
                ...this.state.reqData,
                page
            }
        }, () => {
            this.getTableList()
        })
    }

    /**
     * 小组修改后，做对应赋值
     * @param value 改变的值
     */
    handleTeamChange(value) {
        this.setState({
            reqData: {
                ...this.state.reqData,
                teamId: value
            }
        })
    }

    /**
     * 小组修改后，做对应赋值
     * @param value 改变的值
     */
    handleGroupChange(value) {
        this.setState({
            reqData: {
                ...this.state.reqData,
                groupId: value
            }
        })
    }

    /**
     * 搜索输入框改变时进行赋值
     * @param event 输入框对象
     */
    handleInputChange(event) {
        this.setState({
            reqData: {
                ...this.state.reqData,
                searchName: event.target.value
            }
        })
    }

    render() {
        const columns = [{
            title: '头像',
            dataIndex: 'headImg',
            render: text => <img src={text} alt="头像" width="40px" height="40px"/>,
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
            width: '100px'
        }, {
            title: '操作',
            width: '110px',
            render: (text, record) => (
                <span>
          <Link className="x-modify-btn" to="/userEdit">修改</Link>
          <Divider type="vertical"/>
          <Popconfirm className="x-del-btn" title="确定删除吗？" okText="确定" cancelText="取消" onConfirm={() => {
              this.delData(record.detailsId)
          }}>
              删除
          </Popconfirm>
        </span>
            ),
        }]

        return (
            <div className="x-warp">
                <XBreadcrumb data={this.state.breadcrumbData}></XBreadcrumb>
                <div className="x-search-warp" data-flex="main:justify cross:center">
                    <div data-flex="main:left">
                        <div className="x-search-section">
                            <span>团队：</span>
                            <Select defaultValue="" style={{width: 120}} onChange={this.handleTeamChange.bind(this)}>
                                <Option value="">请选择团队</Option>
                                {
                                    this.state.teamList.map((item) => {
                                        return <Option value={item.teamId} key={item.teamId}>{item.teamName}</Option>
                                    })
                                }
                            </Select>
                        </div>
                        <div className="x-search-section">
                            <span>小组：</span>
                            <Select defaultValue="" style={{width: 120}} onChange={this.handleGroupChange.bind(this)}>
                                <Option value="">请选择小组</Option>
                                {
                                    this.state.groupList.map((item) => {
                                        return <Option value={item.teamId} key={item.teamId}>{item.teamName}</Option>
                                    })
                                }
                            </Select>
                        </div>
                    </div>
                    <div className="x-search-section">
                        <Search
                            placeholder="请输入姓名／花名"
                            onChange={this.handleInputChange.bind(this)}
                            onSearch={this.getTableList.bind(this)}
                            style={{width: 200}}
                        />
                    </div>
                </div>
                <div className="x-table-warp">
                    <Table columns={columns} dataSource={this.state.tableList} rowKey={record => record.userId}
                           pagination={false} locale={{emptyText: '暂无数据'}}/>
                    <Pagination className="x-pagination" current={this.state.reqData.page}
                                pageSize={this.state.reqData.pageSize} total={this.state.tableTotal}
                                onChange={this.handlePageChange.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default UserList

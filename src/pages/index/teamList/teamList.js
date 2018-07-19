import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Input, Table, Divider, Pagination, Popconfirm, message} from 'antd';
import XBreadcrumb from '~components/x-breadcrumb/index'
import './teamList.scss'
import store from '~store/index'
import {getTeamList, delTeam} from '~store/modules/team/actions.js'
import {getUrlQuery} from '~utils/utils'

const Search = Input.Search

class TeamList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            breadcrumbData: [ // 面包屑导航栏的数据
                {
                    to: '/teamList',
                    name: '团队列表'
                }
            ],
            tableTotal: 0, // 列表总数据量
            tableList: [], // 列表数据
            reqData: { //  入参数据
                searchName: '', // 搜索内容
                parentTeamId: '', // 上一级teamId，为空的时候，代表是大团队
                page: getUrlQuery(props.location.search, 'page') * 1, // 当前第几页
                pageSize: 10 // 一页多少条数据
            }
        }
    }

    componentDidMount() {
        this.getTableList()
    }

    /**
     * 获取列表数据
     */
    getTableList() {
        store.dispatch(getTeamList(this.state.reqData)).then((res) => {
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
        this.props.history.replace('/teamList?page=' + page)
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

    /**
     * 删除对应id的数据
     * @param teamId
     */
    delData(teamId) {
        store.dispatch(delTeam({
            teamId
        })).then((res) => {
            if (res.resultCode === 200) {
                message.success(res.resultMessage, 3)
            }
        })
    }

    render() {
        const columns = [{
            title: '团队名称',
            dataIndex: 'teamName'
        }, {
            title: '主管',
            dataIndex: 'realName'
        }, {
            title: '数量',
            dataIndex: 'quantity',
        }, {
            title: '描述',
            dataIndex: 'teamDescribe',
        }, {
            title: '操作',
            width: '120px',
            render: (text, record) => (
                <span>
          <Link className="x-modify-btn" to="/teamEdit">修改</Link>
          <Divider type="vertical"/>
          <Popconfirm className="x-del-btn" title="确定删除吗？" okText="确定" cancelText="取消" onConfirm={() => {
              this.delData(record.teamId)
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

                    </div>
                    <div className="x-search-section">
                        <Search
                            placeholder="请输入团队名称"
                            onChange={this.handleInputChange.bind(this)}
                            onSearch={this.getTableList.bind(this)}
                            style={{width: 200}}
                        />
                    </div>
                </div>
                <div className="x-table-warp">
                    <Table columns={columns} dataSource={this.state.tableList} rowKey={record => record.teamId}
                           pagination={false} locale={{emptyText: '暂无数据'}}/>
                    <Pagination className="x-pagination" current={this.state.reqData.page}
                                pageSize={this.state.reqData.pageSize} total={this.state.tableTotal}
                                onChange={this.handlePageChange.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default TeamList

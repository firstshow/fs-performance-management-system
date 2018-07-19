import React, {Component} from 'react'
import {Select, Input, Table, Pagination} from 'antd';
import {Link} from 'react-router-dom'
import XBreadcrumb from '~components/x-breadcrumb/index'
import './performanceList.scss'
import store from '~store/index';
import {getTotalPerformanceList} from '~store/modules/performance/actions.js'
import {getTeamList} from '~store/modules/team/actions.js'
import {getNowQuarter, getFullYear, getUrlQuery} from '~utils/utils'
import publicConf from '~config/publicConf'

const Option = Select.Option

const Search = Input.Search

const columns = [{
    title: '头像',
    dataIndex: 'headImg',
    render: text => <img src={text} alt="头像" width="40px" height="40px"/>,
}, {
    title: '姓名',
    dataIndex: 'realName'
}, {
    title: '花名',
    dataIndex: 'flowerName'
}, {
    title: '性别',
    dataIndex: 'gender',
    render: text => {
        return text === 1 ? '男' : '女'
    }
}, {
    title: '小组',
    dataIndex: 'groupName'
}, {
    title: '分数',
    dataIndex: 'totalSocre'
}, {
    title: '操作',
    width: '120px',
    render: (text, record) => (
        <span>
          <Link className="x-modify-btn" to={{
              pathname: '/performanceDetailList',
              search: '?sort=' + record.userId + '&page=1'
          }}>查看</Link>
        </span>
    )
}]

class PerformanceList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            breadcrumbData: [ // 面包屑导航栏的数据
                {
                    to: '/performanceList',
                    name: '绩效列表'
                }
            ],
            groupList: [], // 筛选项中的小组列表
            tableTotal: 0, // 列表总数据量
            tableList: [], // 列表数据
            reqData: { //  入参数据
                year: getFullYear(), // 年份
                quarter: getNowQuarter(), // 季度
                groupId: '', // 团队id
                searchName: '', // 搜索内容
                page: getUrlQuery(props.location.search, 'page') * 1, // 当前第几页
                pageSize: 10 // 一页多少条数据
            }
        }
    }

    componentDidMount() {
        this.getGroupList()
        this.getTableList()
    }

    /**
     * 获取筛选项中小组列表数据
     */
    getGroupList() {
        store.dispatch(getTeamList({
            page: 1,
            pageSize: 10,
            parentTeamId: store.getState().User.teamId
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
        store.dispatch(getTotalPerformanceList(this.state.reqData)).then((res) => {
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
        this.props.history.replace('/performanceList?page=' + page)
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
     * 年份修改后，做对应赋值
     * @param value 改变的值
     */
    handleYearChange(value) {
        this.setState({
            reqData: {
                ...this.state.reqData,
                year: value
            }
        })
    }

    /**
     * 季度修改后，做对应赋值
     * @param value 改变的值
     */
    handleQuarterChange(value) {
        this.setState({
            reqData: {
                ...this.state.reqData,
                quarter: value
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
        // 获取当前所在的季度
        let nowQuarter = getNowQuarter()
        return (
            <div className="x-warp">
                <XBreadcrumb data={this.state.breadcrumbData}></XBreadcrumb>
                <div className="x-search-warp" data-flex="main:justify cross:center">
                    <div data-flex="main:left">
                        <div className="x-search-section">
                            <span>年份：</span>
                            <Select defaultValue={(new Date()).getFullYear().toString()} style={{width: 120}}
                                    onChange={this.handleYearChange.bind(this)}>
                                {
                                    publicConf.yearList.map((item) => {
                                        return <Option value={item.value} key={item.value}>{item.name}</Option>
                                    })
                                }
                            </Select>
                        </div>
                        <div className="x-search-section">
                            <span>季度：</span>
                            <Select defaultValue={nowQuarter} style={{width: 120}}
                                    onChange={this.handleQuarterChange.bind(this)}>
                                {
                                    publicConf.quarterList.map((item) => {
                                        return <Option value={item.value} key={item.value}>{item.name}</Option>
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
                    <Table columns={columns} dataSource={this.state.tableList} rowKey={record => record.totalSocreId}
                           pagination={false} locale={{emptyText: '暂无数据'}}/>
                    <Pagination className="x-pagination" current={this.state.reqData.page}
                                pageSize={this.state.reqData.pageSize} total={this.state.tableTotal}
                                onChange={this.handlePageChange.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default PerformanceList


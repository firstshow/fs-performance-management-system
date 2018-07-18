import React, {Component} from 'react'
import { Select, Input, Table } from 'antd';
import { Link } from 'react-router-dom'
import XBreadcrumb from '~components/x-breadcrumb/index'
import './performanceList.scss'
import store from '~store/index';
import { getTotalPerformanceList } from '~store/modules/performance/actions.js'

const Option = Select.Option

const Search = Input.Search

const columns = [{
    title: '头像',
    dataIndex: 'headImg',
    render: text => <img src={text} alt="头像" width="40px" height="40px" />,
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
          <Link className="x-modify-btn" to="/performanceDetailList">查看</Link>
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
            tableList: []
        }
    }

    componentDidMount () {
        this.getTableList()
    }

    /**
     * 获取列表数据
     */
    getTableList () {
        store.dispatch(getTotalPerformanceList({
            page: 1,
            pageSize: 10
        })).then((res) => {
            console.log(res)
            if (res.resultCode === 200) {
                this.setState({
                    tableList: res.data.list
                })
            }
        })
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
                    <span>年份：</span>
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                      <Option value="jack">2018</Option>
                      <Option value="lucy">2019</Option>
                    </Select>
                  </div>
                    <div className="x-search-section">
                        <span>季度：</span>
                        <Select defaultValue="Q1" style={{ width: 120 }} onChange={this.handleChange}>
                            <Option value="Q1">Q1季度</Option>
                            <Option value="Q2">Q2季度</Option>
                            <Option value="Q3">Q3季度</Option>
                            <Option value="Q4">Q4季度</Option>
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
                <Table columns={columns} dataSource={this.state.tableList} rowKey={record => record.totalSocreId} />
              </div>
            </div>
        )
    }
}

export default PerformanceList


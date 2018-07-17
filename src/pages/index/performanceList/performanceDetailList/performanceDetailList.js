import React, {Component} from 'react'
import { Select, Input, Table, Divider } from 'antd';
import XBreadcrumb from '~components/x-breadcrumb/index'
import './performanceDetailList.scss'

const Option = Select.Option

const Search = Input.Search

const columns = [{
    title: '绩效内容',
    dataIndex: 'detailsContent'
}, {
    title: '维度名称',
    dataIndex: 'dimensionName'
}, {
    title: '操作者',
    dataIndex: 'updateRealName'
}, {
    title: '更新时间',
    dataIndex: 'updateTime'
}, {
    title: '分数',
    dataIndex: 'socre'
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
    )
}]

class PerformanceDetailList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            breadcrumbData: [ // 面包屑导航栏的数据
                {
                    to: '/performanceList',
                    name: '绩效列表'
                },
                {
                    to: '/performanceDetailList',
                    name: '个人绩效列表'
                }
            ],
            tableList: [{
                "detailsId": "001",
                "detailsContent": "XXX项目上线",
                "dimensionName": "项目上线",
                "updateRealName": "善栋",
                "updateTime": "2018-07-11 12:00:00",
                "socre": 3
            }]
        }
        console.log('进入了')
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
                <Table columns={columns} dataSource={this.state.tableList} rowKey={record => record.detailsId} />
              </div>
            </div>
        )
    }
}

export default PerformanceDetailList


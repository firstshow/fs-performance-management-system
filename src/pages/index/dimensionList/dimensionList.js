import React, {Component} from 'react'
import { Input, Table, Divider } from 'antd';
import XBreadcrumb from '~components/x-breadcrumb/index'
import './dimensionList.scss'

const Search = Input.Search

const columns = [{
    title: '维度名称',
    dataIndex: 'dimensionName'
}, {
    title: '维度描述',
    dataIndex: 'dimensionDescribe'
}, {
    title: '加权分数',
    dataIndex: 'dimensionWeight',
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

class DimensionList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            breadcrumbData: [ // 面包屑导航栏的数据
                {
                    to: '/dimensionList',
                    name: '维度列表'
                }
            ],
            tableList: [{
                "dimensionId": "001",
                "dimensionName": "项目上线",
                "dimensionDescribe": "项目上线XZXXX",
                "dimensionWeight": 49
            }]
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
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

                </div>
                <div className="x-search-section">
                  <Search
                      placeholder="请输入维度名称"
                      onSearch={value => console.log(value)}
                      style={{ width: 200 }}
                  />
                </div>
              </div>
              <div className="x-table-warp">
                <Table columns={columns} dataSource={this.state.tableList} rowKey={record => record.dimensionId} />
              </div>
            </div>
        )
    }
}

export default DimensionList


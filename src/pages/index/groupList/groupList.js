import React, {Component} from 'react'
import { Input, Table, Divider } from 'antd';
import XBreadcrumb from '~components/x-breadcrumb/index'
import './groupList.scss'

const Search = Input.Search

const columns = [{
    title: '小组名称',
    dataIndex: 'teamName'
}, {
    title: '组长',
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
          <a className="x-modify-btn" href="javascript:void(0);">修改</a>
          <Divider type="vertical" />
          <a className="x-del-btn" href="javascript:void(0);">
            删除
          </a>
        </span>
    ),
}]

class GroupList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            breadcrumbData: [ // 面包屑导航栏的数据
                {
                    to: '/groupList',
                    name: '小组列表'
                }
            ],
            tableList: [{
                "teamId": "002",
                "teamName": "前端团队",
                "realName": "张城",
                "quantity": 21,
                "teamDescribe": "牛逼"
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
                      placeholder="请输入小组名称"
                      onSearch={value => console.log(value)}
                      style={{ width: 200 }}
                  />
                </div>
              </div>
              <div className="x-table-warp">
                <Table columns={columns} dataSource={this.state.tableList} rowKey={record => record.teamId} />
              </div>
            </div>
        )
    }
}

export default GroupList

import React, {Component} from 'react'
import {Select, Input, DatePicker, Button} from 'antd';
import XBreadcrumb from '~components/x-breadcrumb/index'
import './performanceEdit.scss'

const Option = Select.Option

class PerformanceEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            btnState: true, // 按钮状态，当没有输入用户名或者密码的时候，按钮置灰
            breadcrumbData: [ // 面包屑导航栏的数据
                {
                    to: '/performanceList',
                    name: '绩效列表'
                },
                {
                    to: '/performanceDetailList',
                    name: '个人绩效列表'
                },
                {
                    to: '/performanceEdit',
                    name: '绩效编辑页面'
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

    onChange(date, dateString) {
        console.log(date, dateString);
    }

    /**
     * 返回上一页
     */
    back () {
        this.props.history.goBack()
    }

    /**
     * 当用户名或者密码为空的时候，按钮不可点击
     *
     */
    checkBtnState () {
        if (!this.state.username || !this.state.password) {
            this.setState({
                btnState: true
            })
        } else {
            this.setState({
                btnState: false
            })
        }
    }

    /**
     * 点击保存
     */
    handleSave () {

    }

    render() {
        return (
            <div className="x-warp">
                <XBreadcrumb data={this.state.breadcrumbData}></XBreadcrumb>
                <div className="x-edit-section" data-flex="main:left cross:center">
                    <span className="x-title">绩效内容：</span>
                    <Input placeholder="请输入绩效内容" style={{width: '200px'}}/>
                </div>
                <div className="x-edit-section" data-flex="main:left cross:center">
                    <span className="x-title">所属维度：</span>
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                    </Select>
                </div>
                <div className="x-edit-section" data-flex="main:left cross:center">
                    <span className="x-title">绩效时间：</span>
                    <DatePicker placeholder="请选择时间" onChange={this.onChange} />
                </div>
                <div className="x-edit-section" data-flex="main:left cross:center">
                    <span className="x-title">绩效分数：</span>
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                        <Option value="jack">1</Option>
                        <Option value="lucy">2</Option>

                    </Select>
                </div>
                <div className="x-edit-section" data-flex="main:left cross:center">
                    <Button type="primary" disabled={this.state.btnState} onClick={this.handleSave.bind(this)}>保存</Button>
                    <Button onClick={this.back.bind(this)}>返回</Button>
                </div>
            </div>
        )
    }
}

export default PerformanceEdit

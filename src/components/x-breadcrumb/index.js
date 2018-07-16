import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import './index.scss'

class XBreadcrumb extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    // 解决自组件娶不到history
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    /**
     * 返回上一页
     */
    back () {
        this.context.router.history.goBack();
    }

    render() {
        let data = this.props.data
        return (
            <section className="x-breadcrumb-warp" data-flex="main:left cross:center">
                <i className="icon iconfont icon-back" onClick={this.back.bind(this)}></i>
                <ul className="x-breadcrumb-nav">
                    {
                        data.map((item, i) => {
                            return (
                                <li key={i}>
                                    <Link to={item.to}>
                                        &nbsp;{item.name} &nbsp;
                                        {
                                           i !== data.length-1 ? '>' : ''
                                        }
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default XBreadcrumb

import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import './index.scss'
import RouteConfig from '~router/routes'
import XHeader from '~components/x-header/index'
import XNav from '~components/x-nav/index'

console.log(process.env.NODE_ENV)

const RouteWithSubRoutes = route => (
    <Route
        exact
        path={route.path}
        render={props => <route.component {...props} routes={route.routes}/>}
    />
)

class Index extends Component {
    render() {
        return (
            <div className="App">
                <XHeader></XHeader>
                <section className="x-body-container" data-flex="main:center">
                    <div className="x-body-content" data-flex="main:left">
                        <XNav></XNav>
                        <div className="x-main-content">
                            <Switch>
                                {RouteConfig.map((route, index) => (
                                    <RouteWithSubRoutes key={index} {...route} />
                                ))}
                            </Switch>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Index

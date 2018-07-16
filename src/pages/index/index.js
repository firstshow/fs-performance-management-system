import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './index.scss'
import RouteConfig from '~router/routes'
import XHeader from '~components/x-header/index'

console.log(process.env.NODE_ENV)

const RouteWithSubRoutes = route => (
    <Route
        exact
        path={route.path}
        render={props => <route.component {...props} routes={route.routes} />}
    />
)

class Index extends Component {
  render() {
    return (
      <div className="App">
        <XHeader></XHeader>
          <div>
              <Switch>
                  {RouteConfig.map((route, index) => (
                      <RouteWithSubRoutes key={index} {...route} />
                  ))}
              </Switch>
          </div>
      </div>
    )
  }
}

export default Index

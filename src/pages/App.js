import React, {Component} from 'react'
import './App.scss'
import * as async from '~router/bundle'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import canvas from '~utils/canvas-background.js'

// 登陆组件
const Login = async.asyncComponent(() => async.load('login/login.js'));

// 根组件
const Index = async.asyncComponent(() => async.load('index/index.js'));

class App extends Component {
    /**
     * 在第一次渲染后调用
     */
    componentDidMount() {
        canvas.render()
    }

    render() {
        return (
            <BrowserRouter>
               <div>
                   <div className="x-app-back">
                       <canvas id="Mycanvas" width="1920" height="946"></canvas>
                   </div>
                   <Switch>
                       <Route exact path="/login"  component={Login} />
                       <Route path="/"  component={Index} />
                   </Switch>
               </div>

            </BrowserRouter>
        )
    }
}

export default App

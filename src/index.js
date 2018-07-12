import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from './router/index'
import { Provider } from 'react-redux'
import store from './store/index.js'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root'))
registerServiceWorker()

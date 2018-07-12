import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from '~pages/App.js'
import { Provider } from 'react-redux'
import store from './store/index.js'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))
registerServiceWorker()

import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from '~pages/App'
import { Provider } from 'react-redux'
import store from './store/index.js'
import registerServiceWorker from './registerServiceWorker'

import 'flex.css/dist/data-flex.css';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))
registerServiceWorker()

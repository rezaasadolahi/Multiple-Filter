import React from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
// CSS
import './index.css'
// Components
import App from './App'
import store from './Redux/store'




render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
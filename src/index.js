import React from 'react'
import reactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './Redux/reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'

import './styles/index.css'

import Routes from './Routes'

const actionsLogger = ({ getState }) => next => action => {
	console.log('Dispatching this type of action: ', action)
	console.log('Current State: ', getState())
	next(action)
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, actionsLogger)))
console.log('Store inside index.js: ', store)
reactDOM.render(
	<Provider store={store}>
		<Router>
			<Routes />
		</Router>
	</Provider>,
	document.getElementById('root'),
)

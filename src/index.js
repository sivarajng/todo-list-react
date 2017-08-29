import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import C from './store/constants'
import routes from './router/routes'
import sampleData from './store/initialState'
import storeFactory from './store'
import { addError } from './store/actions'

localStorage.clear();

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    sampleData

const saveState = () => 
    localStorage["redux-store"] = JSON.stringify(store.getState())

const handleError = error => {
	store.dispatch(
		addError(error.message)
	)
}

const store = storeFactory(initialState)
store.subscribe(saveState)

window.React = React
window.store = store

window.addEventListener("error", handleError)

render(
	<Provider store={store}>
	   {routes}
	</Provider>,
  document.getElementById('react-app')
)

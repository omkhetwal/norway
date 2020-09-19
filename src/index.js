import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import App from './App'
import './index.css'
import thunk from 'redux-thunk'
import reducers from './reducers'



const store=createStore(reducers,applyMiddleware(thunk))
 

ReactDOM.render( 
 <Provider store={store}>
   <App/>

 </Provider>
  
  ,document.getElementById('root'))

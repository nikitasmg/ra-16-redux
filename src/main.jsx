import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createStore} from "redux";
import {Provider} from "react-redux";
import RootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools()

const store = createStore(RootReducer, composedEnhancer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
)

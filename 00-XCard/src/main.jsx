import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorld } from './HelloWorld.jsx'
import { App } from './App.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <HelloWorld /> //Print hello world by component
  <App />
);

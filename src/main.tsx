import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route } from "wouter";
import './index.css'

import Home from './pages/Home'
import Edit from './pages/Edit';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Route path='/'><Home></Home></Route>
    <Route path='/md/:id'><Edit></Edit></Route>
  </React.StrictMode>,
)

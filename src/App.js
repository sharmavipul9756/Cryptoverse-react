import { Switch, Route, Link, Router } from 'react-router'
import { Layout, Typography, Space } from 'antd'
import React from 'react'
import {Navbar,Exchanges,HomePage,Cryptocurrencies,News,Cryptodetails} from './components'
import './App.css'
const App = () => {
    return (
        <div className="App">
           <div className="navbar">
               <Navbar/>
           </div>
           <div className="main">
               <Layout>
               <div className="routes">
                   <Switch>
                       <Route exact path="/">
                           <HomePage/>
                       </Route>
                       <Route exact path="/exchanges">
                           <Exchanges/>
                       </Route>
                       <Route exact path="/cryptocurrencies">
                           <Cryptocurrencies/>
                       </Route>
                       <Route exact path="/cryptodetails">
                           <Cryptodetails/>
                       </Route>
                       <Route exact path="/news">
                           <News/>
                       </Route>
                   </Switch>
               </div>
               </Layout>
           </div>
           <div className="footer"></div>
        </div>
    )
}

export default App

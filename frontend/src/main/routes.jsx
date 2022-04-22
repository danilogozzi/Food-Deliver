import React from 'react'

//IMPORT REACT ROUTER
import {Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router'

import App from './app'

import Dashboard from '../dashboard/dashboard'

import ShopLunche from '../shop/lunche/lunche'

import LocalDeliver from '../deliver/localDeliver'

//CRIANDO ROTAS PARA OS COMPONENTES
export default props =>(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard}/>
            <Route path='shop/lunche' component={ShopLunche}/>
            <Route path='/user/deliver/' component={LocalDeliver}/>
        </Route>
        <Redirect from='*' to='/'/>
    </Router>
)
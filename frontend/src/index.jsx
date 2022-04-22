import React from 'react'
import ReactDOM from 'react-dom'

//CRIANDO STORE
import {applyMiddleware, createStore} from 'redux'

//IMPORTANDO MIDDLEWARE
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'


//INTEGRAÇÃO DO REACT COM REDUX
import {Provider} from 'react-redux'

//REDUCERS
import reducers from './main/reducers'

//IMPORT DAS ROTAS
import Routes from './main/routes'

//CONFIGURANDO DEVTOOLS REDUX NO CHROME
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()

//DEFININDO A STORE
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

//RENDERIZANDO O COMPONENTE APP
ReactDOM.render(
    //ENVOLVER A APLICAÇÃO COM PROVIDER
    <Provider store={store}>
        <Routes/>
    </Provider>
, document.getElementById('app'))
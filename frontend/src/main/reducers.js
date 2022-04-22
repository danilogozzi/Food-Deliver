//CADASTRO DE TODOS OS REDUCERS

//REDUCER FORM
import {reducer as formReducer} from 'redux-form'

//LIGANDO REDUX-FORM AOS REDUCERS
import { reducer as toastrReducer} from 'react-redux-toastr'

import {combineReducers} from 'redux'

import luncheReducer from '../shop/lunche/luncheReducer'

import dashboardReducer from '../dashboard/dashboardReducer'

import deliverReducer from '../deliver/deliverReducer'

//COMBINANDO OS REDUCERS - MÓDULO QUE COMBINA TODOS OS REDUCERS
//RESULTADO DA COMBINAÇÃO DOS REDUCERS
const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    deliver: deliverReducer,
    lunches: luncheReducer,
    form: formReducer,
    toastr: toastrReducer
})


//EXPORTANDO A COMBINAÇÃO DE TODOS OS REDUCERS DA APLICAÇÃO
export default rootReducer 
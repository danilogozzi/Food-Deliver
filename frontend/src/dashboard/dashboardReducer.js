//REDUCERS DE VERDADE
const INITIAL_STATE = { dashboard: [] }


export default function (state = INITIAL_STATE, action) {

    //AÇÃO GERADA APARTIR DO ACTION CREATOR
    switch (action.type) {

        case 'SET_LUNCHE_SUMMARY_FETCHED':

            return {
                ...state,
                dashboard: action.payload
            }

        case 'ADD_LUNCHE':
            return {
                ...state,
                dashboard: state.dashboard.concat(action.payload)
            }

        case 'REMOVE_LUNCHE':
            return {
                ...state,
                dashboard: state.dashboard.filter(item => item.id !== action.payload)
            }
        default:
            return state

    }

}
//REDUCERS DE VERDADE
const INITIAL_STATE = { lunches: []}


export default function (state = INITIAL_STATE, action) {

    //AÇÃO GERADA APARTIR DO ACTION CREATOR
    switch (action.type) {

        case 'LUNCHE_SUMMARY_FETCHED':

            return { ...state, lunches: action.payload }

        default:
            return state

    }

}
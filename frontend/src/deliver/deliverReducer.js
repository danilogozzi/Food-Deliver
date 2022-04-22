//REDUCERS DE VERDADE
const INITIAL_STATE = { deliver: [] }


export default function (state = INITIAL_STATE, action) {

    //AÇÃO GERADA APARTIR DO ACTION CREATOR
    switch (action.type) {
        case 'SET_DELIVER':
            return{
                ...state,
                deliver: action.payload
            }
        case 'ADD_DELIVER':
            return {
                ...state,
                deliver: state.deliver.concat(action.payload)
            }

        default:
            return state

    }

}
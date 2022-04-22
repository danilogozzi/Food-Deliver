//VALORES INICIAIS PARA FORMULARIOS
const INITIAL_VALUES = {dashboard: []}

//ACTION CREATOR(CRIA UM OBJETO)
export function setLunche() {

    return {
        //ACTION CRIADA
        type: 'SET_LUNCHE_SUMMARY_FETCHED',
        payload: INITIAL_VALUES.dashboard
    }

}




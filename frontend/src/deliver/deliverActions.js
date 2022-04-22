//VALORES INICIAIS PARA FORMULARIOS
const INITIAL_VALUES = {deliver: []}

export function setDeliver(){
    return{
        type: 'SET_DELIVER',
        payload: INITIAL_VALUES.deliver
    }
}

export function addDeliver(value){
    return {
        type: 'ADD_DELIVER',
        payload: value
    }
}

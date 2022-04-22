import batata from '../../../public/img/batata.png'
import lunche from '../../../public/img/lunche.png'
import coca from '../../../public/img/coca.png'
import espetos from '../../../public/img/espetos.png'
import hotdog from '../../../public/img/hotdog.png'
import pastel from '../../../public/img/pastel.png'

//ACTION CREATOR(CRIA UM OBJETO)
export function getLunche(){
    //const request = axios.get(`https://api.mockaroo.com/api/2f12b180?count=10&key=7982f060`)
    const items = [
        {id: 1, img: batata, name: 'Batata Frita', value: 17, qtd:0},
        {id: 2, img: lunche, name: 'X-Burguer', value: 22, qtd:0},
        {id: 3, img: coca, name: 'Coca-Cola', value: 6, qtd:0},
        {id: 4, img: espetos, name: 'Espeto', value: 7, qtd:0},
        {id: 5, img: hotdog, name: 'Hot Dog', value: 10, qtd:0},
        {id: 6, img: pastel, name: 'Pastel', value: 15, qtd:0}
    ]
    return{
        //ACTION CRIADA
        type: 'LUNCHE_SUMMARY_FETCHED',
        payload: items
    }
}

export function addLunche(value){
    return {
        type: 'ADD_LUNCHE',
        payload: value
    }
}

export function removeLunche(value){
    return{
        type: 'REMOVE_LUNCHE',
        payload: value
    }
}

//QUANDO VAI TER BASTANTE COISA NO COMPONENT, USANDO COMPONENT DE CLASSES
import React, { Component } from 'react'
import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import Row from '../../common/layout/row'
import { getLunche, addLunche, removeLunche} from './luncheActions'
//INTEGRANDO COMPONENTE COM O STATE GERENCIADO PELO REDUX
import { connect } from 'react-redux'
//LIGANDO ACTION CREATOR COM O COMPONENTE
import { bindActionCreators } from 'redux'
import ProductBox from '../../common/widget/productBox'

//CRIANDO COMPONENT COM CLASSE
class Lunche extends Component {

    componentWillMount() {
        //CHAMANDO A ACTION SEMPRE QUE O COMPONENTE FOR CARREGADO
        this.props.getLunche()
    }

    //RENDERIZANDO A LISTA
    renderRows() {

        const lunches = this.props.lunches || []

        return lunches.map(l => (
            <div key={l.id}>
            <ProductBox lunches={l} addLunche={this.props.addLunche} removeLunche={this.props.removeLunche}/>
            </div>
        ))
    }

    render() {
        return (
            <div>
                <ContentHeader title='Lunches' small='Versão 1.0' />
                <Content>
                    <Row>
                        {this.renderRows()}
                    </Row>
                </Content>
            </div>
        )
    }
}

//MAPEANDO AS PROPS DE STATE DO REDUX NA STORE
//SUMMARY É A VARIAVEL QUE SERÁ ADICIONADA AS PROPRIEDADES DO COMPONENTE
const mapStateToProps = state => ({ lunches: state.lunches.lunches})

//LIGANDO ACTION AO COMPONENTE
const mapDispatchToProps = dispatch => bindActionCreators({ getLunche, addLunche, removeLunche }, dispatch)//ACTION CREATOR -> DISPATCH

//EXPORTANDO O COMPONENTE CLASSE ->DECORANDO DASHBOARD COM O STATE DO REDUX
export default connect(mapStateToProps, mapDispatchToProps)(Lunche)
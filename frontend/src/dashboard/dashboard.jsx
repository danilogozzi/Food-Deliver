//QUANDO VAI TER BASTANTE COISA NO COMPONENT, USANDO COMPONENT DE CLASSES
import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import { setLunche } from './dashboardActions'
import {addDeliver} from '../deliver/deliverActions'
//TRANSFORMANDO O COMPONENT EM CONTAINER
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UserProductBox from '../common/widget/userProductBox'
import Grid from '../common/layout/grid'
import Deliver from '../deliver/deliver'

//CRIANDO COMPONENT COM CLASSE
class Dashboard extends Component {
    //METODO DE CICLO DE VIDA QUE IRÁ CHAMAR O GETLIST
    componentDidWillMount() {
        this.props.setLunche()
    }
    //RENDERIZANDO A LISTA
    renderRows() {

        const dashboard = this.props.dashboard || []

        return dashboard.map(d => (
            <div key={d.id}>
                <UserProductBox dashboard={d} />
            </div>
        ))
    }

    render() {
        let sum = 0
        let sumItems = 0

        this.props.dashboard.map((e) => {
            sum += e.value * e.qtd
            sumItems += e.qtd
        })

        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <Grid cols='12 9'>
                            {this.renderRows()}
                        </Grid>
                        <Grid cols='12 3'>
                            <Deliver deliver={this.props.addDeliver} dashboard={this.props.dashboard} sum={sum} sumItems={sumItems}/>
                        </Grid>
                    </Row>
                </Content>
            </div>
        )
    }
}

//MAPEANDO O STATE DA APLICAÇÃO
const mapStateToProps = state => ({ dashboard: state.dashboard.dashboard })
//DISPARA AS AÇÕES PARA O REDUCERS
const mapDispatchToProps = dispatch => bindActionCreators({ setLunche, addDeliver }, dispatch)

//DECORATOR QUE VAI LER OS METODOS MAPSTATE E MAPDISPATCH
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)//COMPONENTE A SER DECORADO
import React, { Component } from 'react'
//TRANSFORMANDO O COMPONENT EM CONTAINER
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Row from '../common/layout/row'
import Grid from '../common/layout/grid'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import { setDeliver } from './deliverActions'
import { setLunche } from '../dashboard/dashboardActions'

class LocalDeliver extends Component {

    //METODO DE CICLO DE VIDA QUE IRÁ CHAMAR O GETLIST
    componentDidWillMount() {
        this.props.setDeliver()
        this.props.setLunche()
    }

    //RENDERIZANDO A LISTA
    renderRows() {

        const deliver = this.props.deliver || []

        return deliver.map(d => (
            <div key={d.id} className='deliver'>
                <label>
                    Nome:
                    &nbsp;{d.fullname}
                </label>
                <label>
                    Endereço:
                    &nbsp;{d.adress},
                    Nº:
                    &nbsp;{d.number}
                </label>
                <label>
                    Contato:
                    &nbsp;{d.phone}
                </label>

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
            <div className='box-deliver'>
                <ContentHeader title='Deliver' small='Versão 1.0' />
                <Content>
                    <Row>
                        <Grid cols='12 4'>
                            {this.renderRows()}
                            <label>
                                <span className='resume-deliver'>
                                    Resume: &nbsp;
                                    {sumItems} - Items Por R$ {sum}
                                    <br />
                                    <label>

                                        Preparing Order <i className="fa fa-clock-o" aria-hidden="true"></i>
                                    </label>
                                </span>
                            </label>
                        </Grid>
                    </Row>
                </Content>
            </div>
        )
    }
}

//MAPEANDO O STATE DA APLICAÇÃO
const mapStateToProps = state => ({ deliver: state.deliver.deliver, dashboard: state.dashboard.dashboard })
//DISPARA AS AÇÕES PARA O REDUCERS
const mapDispatchToProps = dispatch => bindActionCreators({ setDeliver, setLunche }, dispatch)

//DECORATOR QUE VAI LER OS METODOS MAPSTATE E MAPDISPATCH
export default connect(mapStateToProps, mapDispatchToProps)(LocalDeliver)//COMPONENTE A SER DECORADO

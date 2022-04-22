import React from 'react'
import '../common/template/dependencies'

//REFERENCIA PARA O HEADER COMPONENT
import Header from '../common/template/Header'

//IMPORT DO SIDEBAR QUE POR TABELA IMPORTA O MENU
import SideBar from '../common/template/sideBar'

import Footer from '../common/template/Footer'

export default props => (
    <div>
        <Header/>
        <SideBar/>
        <div className='content-wrapper'>
            {props.children}
        </div>
        <Footer/>
    </div>
)
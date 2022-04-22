import React from 'react'

//IMPORT LIN REACT ROUTER
import {Link} from 'react-router'

//{} -> REACT, {{}} -> VUE, PARA PASSAR PARAMETROS
//PROPRIEDADES PASSADAS POR MENU
export default props =>(
    <li>
        <Link to={props.path}>
            <i className={`fa fa-${props.icon}`}></i><span>{props.label}</span>
        </Link>
    </li>
)
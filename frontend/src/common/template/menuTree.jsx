//COMPONENT LISTA COM SUB LISTAS
import React from 'react'

//PROPRIEDADES PASSADAS POR MENU
export default props =>(
    <li className='treeview'>
        <a href>
            <i className={`fa fa-${props.icon}`}></i><span>{props.label}</span>
            <i className='fa fa-angle-left pull-right'></i>
        </a>
        <ul className='treeview-menu'>
            {props.children}
        </ul>
    </li>
)
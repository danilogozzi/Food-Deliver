import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'


//ESTAMOS PASSANDO OS PARAMETROS DO MENUITEM PELO MENU
export default props =>(
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard' icon='dashboard'/>
        <MenuTree label='Lojas' icon='shopping-basket'>
            <MenuItem path='shop/lunche' label='Lanches' icon='cutlery' />
        </MenuTree>
    </ul>
)
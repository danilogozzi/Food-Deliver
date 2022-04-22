import React from 'react'

//COMPONENT HEADER
export default props =>(
    <header className='main-header'>
        <a href='/#/' className='logo bg-red'>
            <span className='logo-mini'><b> F</b>D</span>
            <span className='logo-lg'>
                <i className='fa fa-cutlery'></i>
                <b> Food</b>
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle="offcanvas"></a>
        </nav>
    </header>
)
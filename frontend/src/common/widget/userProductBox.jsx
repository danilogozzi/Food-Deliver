import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid cols='12 3'>
        <ul className='card'>
            <li className='listCard'>
                <span className='qtdLunche'>{props.dashboard.qtd}</span>
                <img src={props.dashboard.img} />
                <br />
                <p className='text-bold'>{props.dashboard.name}</p>
                <br />
                <span>R${props.dashboard.value}</span>
            </li>
        </ul>
    </Grid>
)
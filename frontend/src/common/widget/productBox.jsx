import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid cols='12 2'>
        <ul className='card'>
            <li className='listCard'>
                <img src={props.lunches.img}/>
                <p className='text-bold'>{props.lunches.name}</p>
                <span>R${props.lunches.value}</span>
                <br/>
                <span className='card-buttons'>
                <button className='bg-success' onClick={()=> props.addLunche(props.lunches)}>Add</button>
                <button className='bg-danger' onClick={()=> props.removeLunche(props.lunches.id)}>Remove</button>
                <input type='number' placeholder='0' onChange={()=> props.lunches.qtd += 1}/>
                </span>
            </li>
        </ul>
    </Grid>
)
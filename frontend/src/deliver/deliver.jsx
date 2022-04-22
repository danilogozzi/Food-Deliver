import React from 'react'
import {Link} from 'react-router'

const userDeliver = [{
    id:0,
    fullname:'',
    adress:'',
    number:null,
    phone:''
}]

export default props => (
    <div className={props.dashboard.length > 0 ? 'note' : 'hide-note'}>
        <h4>Resume</h4>
        <span className='text-bold'>
            <h3>R${props.sum} - Items: {props.sumItems}</h3>
        </span>
        <input onChange={(e)=> userDeliver.map(d => d.fullname = e.target.value)} type='text' placeholder='FullName...' />
        <input onChange={(e)=> userDeliver.map(d => d.adress = e.target.value)} type='text' placeholder='Adress...' />
        <input onChange={(e)=> userDeliver.map(d => d.number = e.target.value)} type='number' placeholder='Number...' />
        <input onChange={(e)=> userDeliver.map(d => d.phone = e.target.value)} type='text' placeholder='Phone...' />
        <Link to='/user/deliver/' className='bg-success btn-deliver' onClick={()=> props.deliver(userDeliver)}>
            Deliver
        </Link>
    </div>

)
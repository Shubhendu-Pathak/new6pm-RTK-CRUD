
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { regUser } from '../store/thunk/fetchUser'

function Register() {

    let [a,b]=useState({
        email:''
    })

let dispatch = useDispatch()



let handleChange = (e)=>{ 
    b( 
        {
            ...a, [e.target.name] : e.target.value

        }
     ) 
}

let onRegClick = ()=>{
    dispatch( regUser(a) )
}

  return (
    <div>
            <input 
        type="text" 
        placeholder='EMAIL' 
        value={a.email} 
        name='email' 
        onChange={handleChange}
        />
        <button onClick={onRegClick} className='btn btn-warning'>register</button>
    </div>
  )
}

export default Register
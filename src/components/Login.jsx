import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../store/thunk/fetchUser'

function Login() {

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

let onLoginClick = ()=>{
    dispatch(loginUser( a ))
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
        <button onClick={onLoginClick} className='btn btn-primary'>LOGIN</button>
    </div>
  )
}

export default Login
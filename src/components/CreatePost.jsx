import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { postUser } from '../store/thunk/fetchUser'

function CreatePost() {
  let [state,setstate] = useState({
    name:'Peter',
    image:'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpZGVybWFufGVufDB8fDB8fHww',
    email:'spidey99@test.com',
    gender:'male',
    description:'I am Peter Parker '
  })

  let dispatch = useDispatch()

let handleChange =(e)=>{
  setstate(
    {...state,[e.target.name]:e.target.value}
  )
}



let handleSubmit =(e)=>{
e.preventDefault()
console.log(state);
dispatch(postUser(state))
}

  return (
    <div>
      <h1 className="display-3 border-bottom border-3 pb-3 w-50">CREATE-POST</h1>

<div className="border border-3 p-3 w-75 m-auto rounded-5">
  <form onSubmit={handleSubmit} >
    <Form.Control
    type="text"
    placeholder='Name'
    name="name"
className='my-3'
value={state.name}
onChange={handleChange}
    />
        <Form.Control
    type="text"
    placeholder='Name'
    name="email"
className='my-3'
value={state.email}
onChange={handleChange}
    />

<Form.Control
    type="text"
    placeholder='IMAGE'
    name="image"
className='my-3'
value={state.image}
onChange={handleChange}
    />

    <div className="border">
      <label htmlFor="">Gender :: </label>
      <label className='mx-3' htmlFor="">Male</label>
      <input
    type="radio"
    placeholder='Name'
    name="gender"
className=' form-check-input'
value="male"
onChange={handleChange}
checked={state.gender==='male' ? true :false}
    />
    <label className='mx-3' htmlFor="">Female</label>
         <input
    type="radio"
    placeholder='Name'
    name="gender"
className=' form-check-input'
value="female"
checked={state.gender==='female' ?true :false}
onChange={handleChange}
    />
    </div>

<textarea 
name="description" 
className='my-3 d-block' 
placeholder='DESCRIPTION'
rows={'5'}
cols={"50"}
id=""
value={state.description}
onChange={handleChange}
></textarea>

<Button type='submit' variant='primary' className='d-block m-auto w-75'>
  SUBMIT
</Button>

  </form>
</div>

    </div>
  )
}

export default CreatePost
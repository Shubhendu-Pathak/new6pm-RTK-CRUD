import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { updateUser } from '../store/thunk/fetchUser'

function Update() {
    let [state,setstate] = useState(null)

    let handleChange =(e)=>{
        setstate(
          {...state,[e.target.name]:e.target.value}
        )
      }

    let {data} = useSelector(state=>state.allusers)
    console.log(data);

    let dispatch = useDispatch()
  
    let {id} = useParams()
    console.log(id);

    useEffect(()=>{
        let findData = data.find(ele=>ele.id==id)
        console.log(findData);
        setstate(findData)
      },[id])

      let handleSubmit =(e)=>{
        e.preventDefault()
        console.log(state);
dispatch( updateUser(state) )
      }

  return (
    <div>
    <h1 className="display-3 border-bottom border-3 pb-3 w-50">Update-POST</h1>

<div className="border border-3 p-3 w-75 m-auto rounded-5">
<form onSubmit={handleSubmit}  >
  <Form.Control
  type="text"
  placeholder='Name'
  name="name"
className='my-3'
value={state && state.name}
onChange={handleChange}
  />
      <Form.Control
  type="text"
  placeholder='Name'
  name="email"
className='my-3'
value={state && state.email}
onChange={handleChange}
  />

<Form.Control
  type="text"
  placeholder='IMAGE'
  name="image"
className='my-3'
value={state && state.image}
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
checked={state && state.gender==='male' ? true :false}
  />
  <label className='mx-3' htmlFor="">Female</label>
       <input
  type="radio"
  placeholder='Name'
  name="gender"
className=' form-check-input'
value="female"
checked={state && state.gender==='female' ?true :false}
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
value={state && state.description}
onChange={handleChange}
></textarea>

<Button type='submit' variant='primary' className='d-block m-auto w-75'>
UPDATE
</Button>

</form>
</div>

  </div>
  )
}

export default Update
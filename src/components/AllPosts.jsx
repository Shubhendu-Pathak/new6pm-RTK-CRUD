import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, showUser } from '../store/thunk/fetchUser';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';

function AllPosts() {
  let [radioData,setRadioData]=useState('')

let myuser= useSelector(state=>state.allusers)

// console.log(myuser)

let {data,isLoading,error,searchData} = myuser
console.log(data);

let onDel = (para)=>{
  console.log(para);
dispatch(deleteUser(para))
}

let nav = useNavigate()

let getprev = (para) =>{
nav(`/${para.id}`)
}

let editpost=(para)=>{
  // console.log(para);
  nav(`/edit/${para.id}`)
}


let dispatch = useDispatch()

useEffect(()=>{
  dispatch(showUser())
},[])


if(error){
  return <h1>{error.message}</h1>
}

if(isLoading===true){
  return <Loader/>
}

return (
<div>

<h1 className='display-3 '>ALL-POSTS</h1>

<div className='d-flex justify-content-evenly w-50 border'>
<Form.Check 
type='radio'
label='ALL'
name='gender'
value=''
onChange={(e)=>setRadioData(e.target.value)}
checked={ radioData==='' }
/>
<Form.Check 
type='radio'
label='Male'
name='gender'
value='male'
onChange={(e)=>setRadioData(e.target.value)}
checked={ radioData==='male' }
/>
<Form.Check 
type='radio'
label='Female'
name='gender'
value='female'
onChange={(e)=>setRadioData(e.target.value)}
checked={ radioData==='female' }
/>
</div>


{
    data && data
    // sorting search
    .filter(ele=>{
      if(searchData.length===0){
        return ele
      }else{
        return ele.name.toLowerCase().includes(searchData.toLowerCase())
      }
    })
    .filter((ele)=>{
      if(radioData==='male'){
        return ele.gender==='male'
      }else if(radioData==='female'){
        return ele.gender==='female'
      }else{
        return ele
      }
    })
    .map(ele=>{
      return <div  key={ele.id} className='border border-5 p-3 w-50 m-auto rounded-5 my-3 text-center text-bg-info text-white'>
        <img src={ele.image} alt=""  style={{height:"70px"}}/>
        <h5>{ele?.name}</h5>
        <h6>{ele?.email}</h6>
        {/* <p className="lead fw-bolder fs-4">{ele.description.substr(0,20)}.....</p> */}
        <h2>Gender = {ele.gender}</h2>
        <div className=" p-3 d-flex justify-content-evenly">
          <button className='btn btn-warning' 
          onClick={()=>getprev(ele)}
          >Preview</button>
          <button 
          className='btn btn-warning'
          onClick={()=>editpost(ele)}
          >Edit</button>
          <button className='btn btn-warning'
          onClick={()=>onDel(ele)}
          >Delete</button>
        </div>
      </div>
    })
  }
</div>
)

}

export default AllPosts
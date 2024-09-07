import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'

function Preview() {

  let [state,setstate] = useState(null)

  let {data} = useSelector(state=>state.allusers)
  console.log(data);

  let {id} = useParams()
  console.log(id);

  useEffect(()=>{
    let findData = data.find(ele=>ele.id==id)
    console.log(findData);
    setstate(findData)
  },[id])


  return (
    <div>
      <img src={state?.image} style={{height:"200px",width:"200px",borderRadius:"50%"}} alt="" />
      <h2 className='display-1 border-bottom pb-3 w-50 border-4'>{state?.name}</h2>
      <p className="lead my-3 fst-italic ">
        {state?.description}
      </p>
      <h5 className='fw-bolder'>Contact me at = {state?.email}</h5>
    </div>
  )
}

export default Preview
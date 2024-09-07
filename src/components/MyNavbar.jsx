import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout, searchData } from '../store/usersSlice';

function MyNavbar() {

let [txt,setxt] = useState('')

let loginData = useSelector(state=>state?.allusers?.userLoginData)
console.log(loginData);

let dispatch = useDispatch()

useEffect(()=>{
dispatch(searchData(txt))
},[txt])

let onlogout =()=>{
  dispatch( logout() )
}

  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="" style={{height:"40px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink className="fs-6 mx-3 fw-bolder text-info text-decoration-none" to="/login">LOGIN</NavLink>
          <NavLink className="fs-6 mx-3 fw-bolder text-info text-decoration-none" to="/register">REGISTER</NavLink>
           {
            loginData ? 
            <NavLink className="fs-6 mx-3 fw-bolder text-info text-decoration-none" to="/">ALL-POST</NavLink>
            :
            ''
           }
              {
            loginData ? 
            <NavLink className="fs-6 mx-3 fw-bolder text-info text-decoration-none" to="/createpost">CREATE-POST</NavLink>
            :
            ''
           }
         
          </Nav>
        </Navbar.Collapse>
        <input 
        type="text" 
        name="" 
        id="" 
        className='form-control w-25'
        placeholder='SEARCH BLOG....'
        value={txt}
        onChange={(e)=>setxt(e.target.value)}
        />
       {
        loginData ?  <button onClick={onlogout}>LOGOUT</button> : ''
       }
      </Container>
    </Navbar>
  )
}

export default MyNavbar
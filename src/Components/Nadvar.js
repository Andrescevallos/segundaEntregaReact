import React from 'react'
import { NavLink } from 'react-router-dom'

const Nadvar = () => {
  return (
    <div >
        <NavLink className='titulo' to="/"> <h1> Tienda </h1> </NavLink>
        <div className='nadvar'>
            <NavLink to={"/marca/Marvel"}> Marvel </NavLink>
            <NavLink to={"/marca/Harry Potter"}> Harry Potter </NavLink>
            <NavLink to={"/marca/Dragon ball Z"}> Dragon ball Z </NavLink>
            <NavLink to={"/marca/Disney"}> Disney </NavLink>
            <NavLink to={"/marca/Star Wars"}> Star Wars </NavLink>
            <NavLink to={"/marca/The lord of the ring"}> The lord of the ring </NavLink>
            <NavLink to={"/marca/Deportes"}> Deportes </NavLink>
            <NavLink to={"/marca/Tom Raider"}> Tomb Raider </NavLink>
            <NavLink to={"/marca/Universal"}> Universal </NavLink>
            <NavLink to={"/marca/DC"}> DC </NavLink>
            <NavLink to={"/marca/Pokemon"}> Pokemon </NavLink>
        </div>
    </div>
  )
}

export default Nadvar
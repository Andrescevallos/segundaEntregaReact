import React from 'react'
import { NavLink } from 'react-router-dom'

const Nadvar = () => {
  return (
    <div >
        <NavLink className='titulo' to="/"> <h1> Tienda </h1> </NavLink>
        <div className='nadvar'>
            <NavLink to={"/marca/marvel"}> Marvel </NavLink>
            <NavLink to={"/marca/harryPotter"}> Harry Potter </NavLink>
            <NavLink to={"/marca/dragonBallZ"}> Dragon ball Z </NavLink>
            <NavLink to={"/marca/disney"}> Disney </NavLink>
            <NavLink to={"/marca/StarWars"}> Star Wars </NavLink>
            <NavLink to={"/marca/theLordOfTheRing"}> The lord of the ring </NavLink>
            <NavLink to={"/marca/Deportes"}> Deportes </NavLink>
            <NavLink to={"/marca/tombRaider"}> Tomb Raider </NavLink>
            <NavLink to={"/marca/universal"}> Universal </NavLink>
            <NavLink to={"/marca/dc"}> DC </NavLink>
            <NavLink to={"/marca/pokemon"}> Pokemon </NavLink>
        </div>
    </div>
  )
}

export default Nadvar
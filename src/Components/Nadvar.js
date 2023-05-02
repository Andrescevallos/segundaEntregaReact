import React from 'react'
import { Link } from 'react-router-dom'

const Nadvar = () => {
  return (
    <div >
        <Link className='titulo' to="/"> <h1> Tienda </h1> </Link>
        <div className='nadvar'>
            <Link to={"/marca/Marvel"}> Marvel </Link>
            <Link to={"/marca/Harry Potter"}> Harry Potter </Link>
            <Link to={"/marca/Dragon ball Z"}> Dragon ball Z </Link>
            <Link to={"/marca/Disney"}> Disney </Link>
            <Link to={"/marca/Star Wars"}> Star Wars </Link>
            <Link to={"/marca/The lord of the ring"}> The lord of the ring </Link>
            <Link to={"/marca/Deportes"}> Deportes </Link>
            <Link to={"/marca/Tom Raider"}> Tomb Raider </Link>
            <Link to={"/marca/Universal"}> Universal </Link>
            <Link to={"/marca/DC"}> DC </Link>
            <Link to={"/marca/Pokemon"}> Pokemon </Link>
        </div>
    </div>
  )
}

export default Nadvar
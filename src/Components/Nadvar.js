import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CartWidget from './CartWidget';



const Nadvar = () => {
  return (
    <div className='header' >



      <Link className='titulo' to={"/"} > FunCompras </Link>
      <div className='nadvar'>
      <DropdownButton  id="drop" title="Marcas">
              <Dropdown.Item><Link to={"/marca/Marvel"}>Marvel</Link></Dropdown.Item>
              <Dropdown.Item><Link to={"/marca/Dragon ball Z"}>Dragon ball Z</Link></Dropdown.Item>
              <Dropdown.Item><Link to={"/marca/Games"}>Games</Link></Dropdown.Item>
              <Dropdown.Item><Link to={"/marca/DC"}>DC</Link></Dropdown.Item>
              <Dropdown.Item><Link to={"/marca/Pokemon"}>Pokemon</Link></Dropdown.Item>
    </DropdownButton>
      </div>
      <CartWidget className ="icon" />
    </div>
  )
}

export default Nadvar
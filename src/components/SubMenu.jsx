import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap'

const SubMenu = () => {

  const [dropdown,setDropdown] = useState(false);
  
  const abrirCerrarDropdown = ()=>{

    setDropdown(!dropdown);

  }

  const handleMouseOver = () => {
    abrirCerrarDropdown(true);
  };

  const handleMouseOut = () => {
    abrirCerrarDropdown(false);
  };

  return (
    <div className='Dropdown'>
      <Dropdown onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>

        <DropdownToggle caret>
          Productos
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem>AGUA 20LT</DropdownItem>
          <DropdownItem>SAN LUIS 20LT</DropdownItem>
          <DropdownItem>DISPENSADOR </DropdownItem>
          <DropdownItem>SURTIDOR AZUL</DropdownItem>
          <DropdownItem>CIELO 20LT</DropdownItem>
          <DropdownItem>CAJA 20LT</DropdownItem>
          <DropdownItem>VIDA 20LT</DropdownItem>
          <DropdownItem>SURDITOR 20/21 LTS</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default SubMenu

import React from 'react'
import { Link } from 'react-router-dom'
import '../../components/styles/Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar-contenedor">
            <Link className="name-icon" to='/'>Eduardo Ramos</Link>            
            <Link className="nav-link" to='/'>Inicio</Link>
            <Link className="nav-link" to='/Items'>Items</Link>                        
            <Link className="nav-link" to='/pokemon'>Pokemon</Link>              
        </nav>
    </div>
  )
}

export default Navbar
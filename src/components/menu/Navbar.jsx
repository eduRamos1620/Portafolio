import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav class="navbar-contenedor">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Eduardo Ramos</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <Link className="nav-link" to='/'>Inicio</Link>
                        <Link className="nav-link" to='/pokemon'>Pokemon</Link>
                        <Link className="nav-link" to='/Items'>Items</Link>
                        
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link class="navbar-brand" to='/'>Eduardo Ramos</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav mx-auto">
                        <Link class="nav-link" to='/'>Inicio</Link>
                        <Link class="nav-link" to='/pokemon'>Pokemon</Link>
                        <Link class="nav-link" to='/Items'>Items</Link>
                        
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
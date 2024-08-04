import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Inicio from './Inicio/Inicio.jsx'
import Proyectos from './Proyectos/Proyectos.jsx'
import Sobremi from './Sobremi/Sobremi.jsx'
import Menu from './Menu/Menu.jsx'


function App() {

  return (
      <div>
        <Menu/>
        <Routes>
          <Route path='/Portfolio/' element={<Inicio/>} />
          <Route path='/Portfolio/proyectos' element={<Proyectos/>} />
          <Route path='/Portfolio/sobremi' element={<Sobremi/>} />
        </Routes>
      </div>
  )
}

export default App

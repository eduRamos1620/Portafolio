import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/menu/Navbar';
import Inicio from './components/pages/Inicio';
import Items from './components/pages/Items';
import Pokemos from './components/pages/Pokemos';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/pokemon' element={<Pokemos/>} />
          <Route path='/items' element={<Items/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

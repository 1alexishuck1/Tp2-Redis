import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router,
  Routes,
  Route,
  Link } from "react-router-dom";

import AgregarPersonajes from './pages/AgregarPersonajes';
import VerPersonajes from './pages/VerPersonajes';
import EliminarPersonaje from './pages/EliminarPersonaje';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/agregarpersonajes' element={<AgregarPersonajes/>}/>
        <Route path='/verpersonajes' element={<VerPersonajes/>} />
        <Route path='/eliminarpersonaje' element={<EliminarPersonaje/>} />
      </Routes>
      
    </Router>
  );
}

export default App;

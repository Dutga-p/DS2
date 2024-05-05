import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Tabla from './Tabla/Tabla';
import './App.css';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tabla" element={<Tabla />} />
        </Routes>
      </Router>
  )
}

export default App
